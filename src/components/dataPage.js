import React, { useState, useEffect } from "react";
import axios from 'axios'
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutes, fetchLayouts, fetchNames, fetchRoutesInfo } from "../actions/index";

import Loading from "./Loading";
import { Input, Form } from "reactstrap";

//Importing Plot.ly react
var Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);

//Component
function RouteList(props) {

  //State for OnChange when a type is selected
  const [selectedType, setSelectedType] = useState("");

  //State for the list of routes that get displayed when type is selected
  const [routesBasedOnType, setRoutesBasedOnType] = useState({
    typeNames: [],
    typeIds: []
  });

  //State for the specific route that get's selected
  const [selectedRoute, setSelectedRoute] = useState("");
  
  //State for Plotly map
  const [lineData, setLineData] = useState({})
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
    
  //Gets the routes and type data for the dropdowns
  const [typeAndRouteData, setTypeAndRouteData] = useState({})
  useEffect(() => {
    axios.get('https://sfmta-test.herokuapp.com/routes-info')
    .then(res => {
      setTypeAndRouteData(res.data)
    })
    .catch(err => {console.log(err)})
  }, []);
  

  //On change handler for the route selection
  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value)

    axios.get(`https://sfmta-test.herokuapp.com/type-map?id=${e.target.selectedOptions[0].id}`)
    .then(res => {setLineData(res.data)})
    .catch(err => {console.log(err)})
  };
  
  //On change handler for the type selection
  const handleTypeSelect = e => {
    setSelectedType(e.target.value)

    //Set the state of the routes list to the correct array based on type selection
    typeAndRouteData.type.find((name, index) => {
      if(name === e.target.value){
        setRoutesBasedOnType({
        typeNames: typeAndRouteData.name[index],
        typeIds: typeAndRouteData.id[index]
      })
     }
   })
  };
  
  //Displaying the route that is selected on the Plotly
  const handleRouteSubmit = e => {
    e.preventDefault();
    
    let traces = []
    
    //Finding the selected route
      lineData.traces.map(trace => {
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
        return traces.push(trace)
      });
    
    //Add the stops state to the end of the traces
    traces.push(stopData)
    
    //Set route data state to the traces array which is get's displayed on the map
    setRouteData(traces)
  };
  
  //Grabbing plotly API key
  require("dotenv").config();
  console.log(routeData)
  return (
    <div>
      {props.isFetching ? (
        <Loading />
      ) : (
      <div>
        {props.error && <div>{props.error.message}</div>}

        <Form onSubmit={handleRouteSubmit}>
          <Input
            type="select"
            onChange={handleTypeSelect}
            name="selectedType"
            value={selectedType}
          >
            <option name="selectedType">Select a type</option>
            {typeAndRouteData.type && 
            typeAndRouteData.type.map(typeName => (
              <option>{typeName}</option>))
            }
          </Input>

          <Input
            type="select"
            value={selectedRoute} //Needs to change
            onChange={handleRouteSelect}
            name="selectedRoute"
          >
          <option>Select type to see routes</option>
            { routesBasedOnType.typeNames.length > 0 && 
              routesBasedOnType.typeNames.map((routeName, index) => (
                <option id={routesBasedOnType.typeIds[index]}>{routeName}</option>))
            }
          </Input>
          <button>Get Data</button>
        </Form>

        <Plot
          data={routeData}
          layout={{
            height: 700,
            mapbox: {
              accesstoken: process.env.REACT_APP_PLOTLY_API_KEY,
              style: "dark",
              zoom: 11.25,
              center: { lat: 37.76, lon: -122.4 }
            },
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
    allroutes: state.allroutes,
    layout: state.layout,
    names: state.names,
    routesInfo: state.routesInfo,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchRoutes,
  fetchLayouts,
  fetchNames, 
  fetchRoutesInfo
})(RouteList);