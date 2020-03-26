import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { toggleModal } from '../actions/';

import createPlotlyComponent from "react-plotly.js/factory";

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);

const AboutUsMap = props => {
    console.log('props', props)
useEffect(() => {
    props.toggleModal();
}, [])
    //Handle click to render component based on which team member was clicked
    const handleClick = (element) => {
        return(
        (element.points[0].hovertext === 'Agustin Vargas') ? props.history.push('/agustin'):
        (element.points[0].hovertext === 'Cody Holman') ? props.history.push('/cody'):
        (element.points[0].hovertext === 'Connor Angelis') ? props.toggleModal(): 
        (element.points[0].hovertext === 'Daniel Aguilar') ? props.history.push('/daniel'):
        (element.points[0].hovertext === 'Erik Sandoval') ? props.history.push('/erik'):
        (element.points[0].hovertext === 'Jonathan Allison') ? props.history.push('/jonathan'):
        (element.points[0].hovertext === 'Jordan Ireland') ? props.history.push('/jordan'):
        (element.points[0].hovertext === 'Justin Menendez') ? props.history.push('/justin'):
        (element.points[0].hovertext === 'Mathias Skerden') ? props.history.push('/mathias'):
        (element.points[0].hovertext === 'Michelle Sirimanivong') ? props.history.push('/michelle'):
        (element.points[0].hovertext === 'Agustin Vargas') ? props.history.push('/agustin') : null
    )}

    return (
        <div>
        <Plot
        data={[{
            "lat": [33.633322, 36.12870, 45.443604, 32.624580, 33.748975, 33.557465, 30.458172, 34.0522, 33.895847, 58.410460],
            "lon": [-112.457310, -79.40860, -122.840082, -85.449071, -116.958139, -111.899536, -84.216021, -118.2437, -118.220070, 8.726921],
            "hovertext": ["Michelle Sirimanivong", "Jonathan Allison", "Connor Angelis", "Cody Holman", 'Erik Sandoval', 'Jordan Ireland', 'Justin Menendez', 'Agustin Vargas', 'Daniel Aguilar', 'Mathias Skerden'],
            "mode": "markers",
            "type": "scattermapbox",
            "marker": {"size": 12},
        }]}
        layout={{"height": 750, "width": 1000, "mapbox": {"accesstoken": process.env.REACT_APP_PLOTLY_API_KEY, "style": "dark", "zoom": 3.5, "center": {"lat": 37.945318626818434, "lon": -98.85080973073082} }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0 }, "showlegend": false, "dragmode": "lasso"}}
        config={{
            "displayModeBar": false,
            "responsive": true,
            "scrollZoom": false,
        }}
        onClick={(data) => {handleClick(data)}}
        />
        </div>
)}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}
export default connect(mapStateToProps, {toggleModal})(AboutUsMap);