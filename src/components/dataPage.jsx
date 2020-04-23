import React, { useState, useEffect, useRef } from "react";
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutesInfo, fetchTypeAndRoute, fetchRealTime } from "../actions/index";

import Loading from "./Loading";
import { Input, Form, UncontrolledAlert } from "reactstrap";
import { StyledButton } from "../style";

//Importing Plot.ly react
var Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);


//Component
const RouteList = (props) => {

  //State for OnChange when a type is selected
  const [selectedType, setSelectedType] = useState("");
  const [mapState, setMapState] = useState({
    zoom: 11.25,
    center: {lat: 37.742, lon: -122.438},
    bearing: -0,
    pitch: 0
  })

  //State for the list of routes that get displayed when type is selected
  const [routesBasedOnType, setRoutesBasedOnType] = useState({ typeNames: [], typeIds: [] });

  //State for the specific route that get's selected
  const [selectedRoute, setSelectedRoute] = useState("");

  //State for Plotly map
  const [routeData, setRouteData] = useState([{
    lat: [],
    lon: [],
    marker: { "color": "blue" },
    mode: "lines",
    type: "scattermapbox"
  }]);

  //State to hold the type/route data
  const [typeAndRouteData, setTypeAndRouteData] = useState({})
  //Gets the routes and type data for the dropdowns
  useEffect(() => {
    props.fetchTypeAndRoute()
      .then(res => {setTypeAndRouteData(res)})
  }, []);

  useInterval(() => {props.fetchRealTime(routeID)}, 30000);

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
      if (name === e.target.value) {
        setRoutesBasedOnType({ typeNames: typeAndRouteData.name[index], typeIds: typeAndRouteData.id[index] })
      }
    })
  };

  //Validation State
  const [inputValidationState, setInputValidationState] = useState(false)

  //Displaying the route that is selected on the Plotly
  const handleRouteSubmit = e => {
    e.preventDefault();

    let traceData = []

    //Simple validation for type/route. 
    if (!selectedType && !selectedRoute || !selectedType || !selectedRoute) {
      setInputValidationState(true)
      return
    }

    //Reset Validation
    setInputValidationState(false)

    props.fetchRoutesInfo(routeID)
      .then(res => {
        res.traces.map(trace => {
          //Take each trace object and add it to the traces array
          return traceData.push(trace)
        });
        //Set route data state to the traces array which is get's displayed on the map
        setRouteData(traceData)

        //Fetch realtime data
        props.fetchRealTime(routeID)
          .then(res => {
            console.log('dir array', res.vehicles.dir)
            let heading = []

            res.vehicles.dir.map(dir => {
              if(dir && dir.includes("_I_")){
                heading.push("Inbound")
              } else if (dir && dir.includes("_O_")) {
                heading.push("Outbound")
              } else {
              heading.push("No Heading")
            }})

            console.log("heading", heading)
            let traceRealTime = {
              hovertemplate: "<b>Vehicle ID: </b> %{customdata} <b>Direction: </b> %{text} <extra></extra>",
              lat: res.vehicles.lat,
              lon: res.vehicles.lng,
              customdata: res.vehicles.vid,
              text: heading,
              marker: { color: "green", size: "12", symbol: "marker" },
              mode: "markers",
              type: "scattermapbox"
            }
            setRouteData(routeData => [...routeData, traceRealTime])
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  };
  console.log(mapState)
  return (
    <div>
      {props.isFetching ? (<Loading />) : (<div>{props.error && <div>{props.error.message}</div>}
        {inputValidationState && <UncontrolledAlert color="warning">Please Select both a route and a type</UncontrolledAlert>}

        <Form onSubmit={handleRouteSubmit}>
          <Input type="select" onChange={handleTypeSelect} name="selectedType" value={selectedType}>
            <option name="selectedType">Select a type</option>
            {typeAndRouteData.type && typeAndRouteData.type.map(typeName => (<option key={typeName}>{typeName}</option>))}
          </Input>

          <Input type="select" value={selectedRoute} onChange={handleRouteSelect} name="selectedRoute">
            {routesBasedOnType.typeNames.length === 0 && <option>Select type to see routes</option>}
            {routesBasedOnType.typeNames.length > 0 && <option>Select a route!</option>}
            {routesBasedOnType.typeNames.length > 0 &&
              routesBasedOnType.typeNames.map((routeName, index) => (
                <option key={routeName} id={routesBasedOnType.typeIds[index]}>{routeName}</option>))
            }
          </Input>

          <StyledButton color="#FFC72C" type='submit'>Show Route</StyledButton>
        </Form>

        <Plot
          data={routeData}
          layout={{height: 600, width: 1000,
            mapbox: { accesstoken: process.env.REACT_APP_PLOTLY_API_KEY, style: "dark", center:mapState.center, zoom: mapState.zoom, bearing: mapState.bearing, pitch: mapState.pitch },
            margin: { b: 0, l: 0, r: 0, t: 0 },
            showlegend: false,
          }}
          onRelayout={(e) => setMapState({
            zoom: e["mapbox.zoom"],
            center: e["mapbox.center"],
            bearing: e["mapbox.bearing"],
            pitch: e["mapbox.pitch"]
          })}
          scrollZoom={true}
        />
      </div>
      )}
    </div>
  );
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
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