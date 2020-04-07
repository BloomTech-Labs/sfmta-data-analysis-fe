import React, { useState, useEffect } from "react";
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutes, fetchLayouts, fetchNames } from "../actions/index";

import Loading from "./Loading";
import { Input, Form } from "reactstrap";

//Importing Plot.ly react
var Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);

//Component
function RouteList(props) {

  //Setup state for selecting/submitting the route data
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedType, setSelectedType] = useState("");
  
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

  //On change handler for the route selection
  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value);
  };

  //On change handler for the type selection
  const handleTypeSelect = e => {
    const type = e.target.value.toLowerCase()
    setSelectedType(e.target.value)
    
    //Api calls to retrieve selected type's routes
    if(type) {
    props.fetchRoutes(type);
    props.fetchLayouts(type);
    props.fetchNames(type);
    }
  };

  //Displaying the route that is selected on the Plotly
  const handleRouteSubmit = e => {
    e.preventDefault();

    let traces = []

    props.names.map(route => {
      //Finding the selected route
      if (route.route_name === selectedRoute) {
        route.traces.map(trace => {
          //Check if it's stop data, and set state if it is
          if (props.allroutes[trace].mode === "markers") {
             setStopData({
              ...stopData,
              lat: props.allroutes[trace].lat,
              long: props.allroutes[trace].lon,
              marker: props.allroutes[trace].marker,
              mode: props.allroutes[trace].mode,
              type: props.allroutes[trace].type
            });
          }
          //Take each trace object and add it to the traces array
          return traces.push(props.allroutes[trace])
        });
      }
    });

    //Add the stops state to the end of the traces
    traces.push(stopData)

    //Set route data state to the traces array which is gets displayed on the map
    setRouteData(traces)
  };

  //Grabbing plotly API key
  require("dotenv").config();

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
            <option>Select a type</option>
            <option>Bus</option>
            <option>Rapid</option>
            <option>Rail</option>
            <option>StreetCar</option>
            <option>Express</option>
            <option>Shuttle</option>
            <option>Overnight</option>
            <option>Cablecar</option>
          </Input>

          <Input
            type="select"
            value={selectedRoute}
            onChange={handleRouteSelect}
            name="selectedRoute"
          >
            <option>Select type to see routes</option>
            {props.names.map(name => (
              <option key={name.route_id} value={name.route_name} name="selectedRoute">
                {name.route_name}
              </option>
            ))}
          </Input>
          <button>Get Data</button>
        </Form>

        <Plot
          data={routeData}
          layout={{
            height: 700,
            mapbox: {
              accesstoken: process.env.REACT_APP_PLOTLY_API_KEY,
              style: "outdoors",
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
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchRoutes,
  fetchLayouts,
  fetchNames
})(RouteList);
