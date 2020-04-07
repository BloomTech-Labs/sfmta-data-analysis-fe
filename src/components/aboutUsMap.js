import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import profileData from './profileData';

import createPlotlyComponent from "react-plotly.js/factory";
import { Modal } from 'reactstrap';

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);

const AboutUsMap = props => {
    
    const showModal = () => {
        profileData.map(student => (
            <Modal
             key={student.id}
             name={student.name}
             title={student.title}
             bio={student.bio}
             img={student.img}
             github={student.github}
             linkedIn={student.linkedIn}
            />
        ))
    }

    //Handle click to render component based on which team member was clicked
    const handleClick = (element) => {
        return(
        (element.points[0].hovertext === 'Agustin Vargas') ? props.history.push('/agustin'):
        (element.points[0].hovertext === 'Cody Holman') ? props.history.push('/cody'):
        (element.points[0].hovertext === 'Connor Angelis') ? props.history.push('/connor'): 
        (element.points[0].hovertext === 'Daniel Aguilar') ? props.history.push('/daniel'):
        (element.points[0].hovertext === 'Erik Sandoval') ? props.history.push('/erik'):
        (element.points[0].hovertext === 'Jonathan Allison') ? props.history.push('/jonathan'):
        (element.points[0].hovertext === 'Jordan Ireland') ? props.history.push('/jordan'):
        (element.points[0].hovertext === 'Justin Menendez') ? props.history.push('/justin'):
        (element.points[0].hovertext === 'Mathias Skerden') ? props.history.push('/mathias'):
        (element.points[0].hovertext === 'Michelle Sirimanivong') ? props.history.push('/michelle'):
        (element.points[0].hovertext === 'Agustin Vargas') ? props.history.push('/agustin') : null
    )}

    require('dotenv').config()
    console.log(process.env.REACT_APP_PLOTLY_API_KEY)

    return (
        <Plot
            data={[{
                "lat": [33.633322, 36.12870, 45.443604, 32.624580],
                "lon": [-112.457310, -79.40860, -122.840082, -85.449071],
                "hovertext": ["test1", "test2", "test3", "Cody Holman"],
                "mode": "markers",
                "type": "scattermapbox",
                "marker": {"size": 12},
            }]}
            layout={{"height": 1000, "width": 1000, "mapbox": {"accesstoken": process.env.REACT_APP_PLOTLY_API_KEY, "style": "dark", "zoom": 3.2009500376323845, "center": {"lat": 37.945318626818434, "lon": -94.85080973073082} }, "margin": { "b": 0, "l": 0, "r": 0, "t": 0 }, "showlegend": false, "xaxis": {"fixedrange": true}, "yaxis": {"fixedrange": true}}}
            config={{
                "displayModeBar": false,
                "responsive": true,
                "scrollZoom": false,
                "dragmode": false
            }}
        />
)}

export default AboutUsMap;