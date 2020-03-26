import React from 'react';

import createPlotlyComponent from "react-plotly.js/factory";

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);


const AboutUsMap = props => {
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

    

