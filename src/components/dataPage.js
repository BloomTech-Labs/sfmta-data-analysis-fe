import React, { useState, useEffect } from 'react';
import createPlotlyComponent from "react-plotly.js/factory";

import { connect } from "react-redux";
import { fetchRoutes } from "../actions/index";

import Loading from "./Loading";

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);

function RouteList(props) {
  useEffect(() => {
    props.fetchRoutes()
  }, [])

  const [selectedRoute, setSelectedRoute] = useState(0)

  const handleRouteSelect = e => {
    setSelectedRoute(e.target.value)
  }

  const handleRouteSubmit = e => {
    e.preventDefault()
    
  }
  console.log(props.allroutes)
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

          />
      </div>
)}
  
  const mapStateToProps = state => {
    return{
    allroutes: state.allroutes,
    error: state.error,
    isFetching: state.isFetching 
    }
  };
  
  export default connect( 
    mapStateToProps, {fetchRoutes}
  )(RouteList);

