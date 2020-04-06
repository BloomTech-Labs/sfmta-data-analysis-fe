import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import profileData from './profileData';

import createPlotlyComponent from "react-plotly.js/factory";
import ModalCard from './modal';

//Importing Plotly React
var Plotly = require('plotly.js/lib/core');
Plotly.register([
    require('plotly.js/lib/scattermapbox'),
]);

const Plot = createPlotlyComponent(Plotly);

const AboutUsMap = props => {

//Create state so modal can load properly on click
    const [modal, setModal] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null)
    
    const switchModal = () => setModal(!modal);

    const showModal = (data) => {
        let studentName = (data.points[0].hovertext)
        profileData.map(student => {
            if(student.name === studentName){
                setCurrentStudent(student)
                switchModal()
            }})
        }
        
    return (
        <div>
            {(modal && currentStudent) && <ModalCard student={currentStudent} modal={modal} toggle={switchModal}/> }
            
        <Plot
        data={[{
            "lat": [33.633322, 36.12870, 45.443604, 32.624580, 33.748975, 33.557465, 30.458172, 34.0522, 33.895847, 58.410460],
            "lon": [-112.6, -79.40860, -122.840082, -85.449071, -116.958139, -111.899536, -84.216021, -118.7, -118, 8.726921],
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
        onClick={(data) => {showModal(data)}}
        />

        </div>
)}

export default AboutUsMap;