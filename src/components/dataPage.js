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
  //Get route data
  useEffect(() => {
    props.fetchRoutes();
    props.fetchLayouts();
    props.fetchNames();
  }, []);

  //Setup for state for selecting/submitting the route data
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [routeData, setRouteData] = useState({
    routeLatitude: [],
    routeLongitude: [],
    routeMarker: {},
    routeMode: "lines",
    routeType: "scattermapbox"
  });
  const [stopData, setStopData] = useState({
    stopLatitude: [],
    stopLongitude: [],
    stopMarker: {},
    stopMode: "markers",
    stopType: "scattermapbox"
  });

  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value);
  };

  const handleRouteSubmit = e => {
    e.preventDefault();
    props.names.map(route => {
      if (route.route_name === selectedRoute) {
        route.traces.map(trace => {
          if (props.allroutes[trace].mode === "markers") {
            setStopData({
              ...stopData,
              stopLatitude: props.allroutes[trace].lat,
              stopLongitude: props.allroutes[trace].lon,
              stopMarker: props.allroutes[trace].marker,
              stopMode: props.allroutes[trace].mode,
              stopType: props.allroutes[trace].type
            });
          }
          setRouteData({
            ...routeData,
            routeLatitude: props.allroutes[trace].lat,
            routeLongitude: props.allroutes[trace].lon,
            routeMarker: props.allroutes[trace].marker,
            routeMode: props.allroutes[trace].mode,
            routeType: props.allroutes[trace].type
          });
        });
      }
    });
  };

  //Grabbing plotly API key
  require("dotenv").config();

  return (
    <div>
      <div>
        {props.error && <div>{props.error.message}</div>}

        <Form onSubmit={handleRouteSubmit}>
          <Input
            type="select"
            value={selectedRoute}
            onChange={handleRouteSelect}
            name="selectedRoute"
          >
            <option>Select a Route</option>
            {props.names.map(name => (
              <option value={name.route_name} name="selectedRoute">
                {name.route_name}
              </option>
            ))}
          </Input>
          <button>Get Data</button>
        </Form>
        {props.isFetching && (
          <div>
            <Loading />
          </div>
        )}
        <Plot
          data={[
            {
              lat: routeData.routeLatitude,
              lon: routeData.routeLongitude,
              marker: routeData.routeMarker,
              mode: routeData.routeMode,
              type: routeData.routeType
            },
            {
              lat: stopData.stopLatitude,
              lon: stopData.stopLongitude,
              marker: stopData.stopMarker,
              mode: stopData.stopMode,
              type: stopData.stopType
            }
          ]}
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
