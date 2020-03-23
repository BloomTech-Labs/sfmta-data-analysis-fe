import React from 'react';

import createPlotlyComponent from "react-plotly.js/factory";
import AboutUs from './aboutUs';

var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);


const AboutUsMap = props => {
    return (
        <Plot
            

        />
    )
}

export default AboutUsMap;

    

