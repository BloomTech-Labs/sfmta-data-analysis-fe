import React, { useState, useEffect } from "react";
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutesInfo, fetchTypeAndRoute, fetchRealTime } from "../actions/index";

import Loading from "./Loading";
import { Input, Form} from "reactstrap";
import {StyledButton} from "../style";

//Importing Plot.ly react
var Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);

//Component
const RouteList = (props) => {

  //State for OnChange when a type is selected
  const [selectedType, setSelectedType] = useState("");

  //State for the list of routes that get displayed when type is selected
  const [routesBasedOnType, setRoutesBasedOnType] = useState({typeNames: [], typeIds: []});
    
  //State for the specific route that get's selected
  const [selectedRoute, setSelectedRoute] = useState("");
  
  //State for Plotly map
  const [routeData, setRouteData] = useState([{
    lat: [],
    lon: [],
    marker: {"color": "blue"},
    mode: "lines",
    type: "scattermapbox"
  }]);
  const [stopData, setStopData] = useState({
    lat: [],
    long: [],
    marker: {},
    mode: "",
    type: ""
  });
    
  //State to hold the type/route data
  const [typeAndRouteData, setTypeAndRouteData] = useState({})
  //Gets the routes and type data for the dropdowns
  useEffect(() => {
    props.fetchTypeAndRoute()
    .then(res => {
      setTypeAndRouteData(res)
    })
  }, []);
  
  //State to hold the ID of the selected route
  const [routeID, setRouteID] = useState("") 
  //On change handler for the route selection
  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value)

    let routeId = e.target.selectedOptions[0].id
    setRouteID(routeId)
  };
  
  //On change handler for the type selection
  const handleTypeSelect = e => {
    setSelectedType(e.target.value)
    
    //Set the state of the routes list to the correct array based on type selection
    typeAndRouteData.type.find((name, index) => {
      if(name === e.target.value){
        setRoutesBasedOnType({typeNames: typeAndRouteData.name[index], typeIds: typeAndRouteData.id[index]})
     }
   })
  };
  
  //Validation State
  const [inputValidationState, setInputValidationState] = useState({
    typeValidation: false,
    routeValidation: false
  })

  //Displaying the route that is selected on the Plotly
  const handleRouteSubmit = e => {
    e.preventDefault();

    let traceData = []
    
    //Simple validation for type/route. In order: (Neither selected, only type selected, only route selected, both selected) <-- This is to reset state if everything passes
    if(!selectedType && !selectedRoute){
      setInputValidationState({typeValidation: true, routeValidation: true})
      return 
    }

    if(!selectedType){
    setInputValidationState({typeValidation: true, routeValidation: false})
      return 
    }

    if(!selectedRoute){ 
      setInputValidationState({typeValidation: false, routeValidation: true})
      return 
    }

    //Reset Validation
    setInputValidationState({
      typeValidation: false,
      routeValidation: false
    })

    props.fetchRoutesInfo(routeID)
    .then(res => {
        if(!res){return}
        res.traces.map(trace => {
          //Check if it's stop data, and set state if it is
          if (trace.mode === "markers") {
            setStopData({
              ...stopData,
              lat: trace.lat,
              long: trace.lon,
              marker: trace.marker,
              mode: trace.mode,
              type: trace.type
            });
          }
          //Take each trace object and add it to the traces array
          return traceData.push(trace)
        });
      
      //Add the stops state to the end of the traces
      traceData.push(stopData)
      
      //Set route data state to the traces array which is get's displayed on the map
      setRouteData(traceData) 
    })
    .catch(err => console.log(err))
  };
// Displays Real Time data
const handleRealTime = e => {
  console.log('e', e.target.value)
  e.preventDefault();

  props.fetchRealTime(routeID)
    .then(res => {
      console.log('response', res)
      console.log('route data', routeData)

      let traceRealTime = {
        lat: res.vehicles.lat,
        lon: res.vehicles.lng,
        marker: {color: "blue"},
        mode: "markers",
        type: "scattermapbox"
      }
      console.log(traceRealTime)
      setRouteData({
        ...routeData,
        traceRealTime
      })
        // if(!res){return}
        // res.traces.map(trace => {
        //   //Check if it's stop data, and set state if it is
        //   if (trace.mode === "markers") {
        //     setStopData({
        //       ...stopData,
        //       lat: trace.lat,
        //       long: trace.lon,
        //       marker: trace.marker,
        //       mode: trace.mode,
        //       type: trace.type
        //     });
          })
          //Take each trace object and add it to the traces array
    //       return traceRealTime.push(trace)
    //     });
      
    //   //Add the stops state to the end of the traces
    //   traceRealTime.push(stopData)
      
    //   //Set route data state to the traces array which is get's displayed on the map
    //   setRouteData(traceRealTime) 
    // })
    .catch(err => console.log(err))
}

console.log('route data', routeData)

  return (
    <div>
      {props.isFetching ? (<Loading />) : (<div>{props.error && <div>{props.error.message}</div>}

        <Form onSubmit={handleRouteSubmit}>
          <Input type="select" onChange={handleTypeSelect} name="selectedType" value={selectedType}>
            <option name="selectedType">Select a type</option>
            {typeAndRouteData.type && typeAndRouteData.type.map(typeName => (<option key={typeName}>{typeName}</option>))}
          </Input>
            {inputValidationState.typeValidation && <div style={{color: "red"}}>Please Enter a Type</div>}

          <Input type="select" value={selectedRoute} onChange={handleRouteSelect} name="selectedRoute">
          {routesBasedOnType.typeNames.length === 0 && <option>Select type to see routes</option>}
          {routesBasedOnType.typeNames.length > 0 && <option>Select a route!</option>}
            { routesBasedOnType.typeNames.length > 0 && 
              routesBasedOnType.typeNames.map((routeName, index) => (
                <option key={routeName} id={routesBasedOnType.typeIds[index]}>{routeName}</option>))
            }
          </Input>
          {inputValidationState.routeValidation && <div style={{color: "red"}}>Please Enter a Type</div>}
          <StyledButton color="#FFC72C" type='submit'>Show Route</StyledButton>
          <StyledButton color="#FFC72C" onClick={handleRealTime}>Go Live</StyledButton>
        </Form>

        <Plot
          data={routeData}
          layout={{
            height: 600,
            mapbox: {accesstoken: process.env.REACT_APP_PLOTLY_API_KEY, style: "dark", center: { lat: 37.748, lon: -122.4 }, zoom: 11.25},
            margin: { b: 0, l: 0, r: 0, t: 0 },
            showlegend: false,
            width: 1000
          }}
        />
      </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    routesInfo: state.routesInfo,
    typeAndRouteInfo: state.typeAndRouteInfo,
    realTimeData: state.realTimeData,
    error: state.error,
    isFetching: state.isFetching
  };
};



export default connect(mapStateToProps, { 
  fetchRoutesInfo, fetchTypeAndRoute, fetchRealTime
})(RouteList);