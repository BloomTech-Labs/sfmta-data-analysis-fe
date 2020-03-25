import React, { useState, useEffect } from 'react';
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutes } from "../actions/index";
import { fetchLayouts } from '../actions/index';

import Loading from "./Loading";

//Importing Plot.ly react
var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);
const Plot = createPlotlyComponent(Plotly);

//Component
function RouteList(props) {

//Get route data
  useEffect(() => {
    props.fetchRoutes();
    props.fetchLayouts();
  }, [])

//Setup for selecting/submitting the route data
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [routeData, setRouteData] = useState({
    ids: [],
    latitude: [],
    longitude: [],
    marker: {color: "blue"},
    mode: "lines",
    type: "scattermapbox"
  })

  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value)
  }

  const handleRouteSubmit = e => {
    e.preventDefault()
    let route = props.allroutes[selectedRoute]

    setRouteData({
      ids: route.ids,
      latitude: route.lat,
      longitude: route.lon,
      marker: route.marker,
      mode: route.mode,
      type: route.type
    })
  }

  //Grabbing plotly API key
  require('dotenv').config()
  
    return (
      <div>
        {props.isFetching && <div><Loading/></div>}
        {props.error && <div>{props.error.message}</div>}

        <form onSubmit={handleRouteSubmit}>

          <select value={selectedRoute} onChange={handleRouteSelect}>
          {props.allroutes.map((route, index) => <option>{index}</option>)}
          </select>
            <button>Get Data</button>
          </form>

          <Plot 
            data={[{ "lat": routeData.latitude, 
            "lon": routeData.longitude, 
            "mode": routeData.mode,
            "type": routeData.type
          }]}
          layout={{ "height": 800, "mapbox": { "accesstoken": process.env.REACT_APP_PLOTLY_API_KEY, "style": "outdoors", "zoom": 11.25, "center": { "lat": 37.76, "lon": -122.4 } }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0 }, "showlegend": false, "width": 800 }}
          />
      </div>
)}
  
  const mapStateToProps = state => {
    return{
    allroutes: state.allroutes,
    layout: state.layout,
    error: state.error,
    isFetching: state.isFetching 
    }
  };
  
  export default connect( 
    mapStateToProps, {fetchRoutes, fetchLayouts}
  )(RouteList);

