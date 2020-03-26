import React, { useState } from 'react';

import createPlotlyComponent from "react-plotly.js/factory";

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);

const AboutUsMap = props => {
    const [teamMember, setTeamMember] = useState('Connor')

    const handleClick = (element) => {
        console.log(element.points[0].hovertext)
        setTeamMember(element.points[0].hovertext)
        console.log('team member', teamMember)
        if (teamMember === 'Connor Angelis') {
            window.location.href='/connor'
        }
        if (teamMember === 'Agustin Vargas')
            window.location.href='/agustin'
    }
    console.log(teamMember)
    return (
        <div>
        <Plot
        data={[{
            "lat": [33.633322, 36.12870, 45.443604, 32.624580, 33.748975, 33.557465, 30.458172, 34.0522, 33.895847, 58.410460],
            "lon": [-112.457310, -79.40860, -122.840082, -85.449071, -116.958139, -111.899536, -84.216021, -118.2437, -118.220070, 8.726921],
            "hovertext": ["Michelle Sirimanivong", "Jonathan Allison", "Connor", "Cody Holman", 'Erik Sandoval', 'Jordan Ireland', 'Justin Menendez', 'Agustin Vargas', 'Daniel Aguilar', 'Mathias Skerden'],
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
        onClick={(data) => {handleClick(data)}}
        />
        </div>
)}

export default AboutUsMap;

    

