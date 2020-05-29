import React, { useState } from "react";
import createPlotlyComponent from "react-plotly.js/factory";

//Importing Plot.ly react
const Plotly = require("plotly.js/lib/core");
Plotly.register([require("plotly.js/lib/scattermapbox")]);
const Plot = createPlotlyComponent(Plotly);

//Component
const Map = () => {

//Centers the map on San Francisco
const [mapState, setMapState] = useState({
  lat: [],
  lon: [],
  center: { lat: 37.742, lon: -122.438 },
  zoom: 11,
  bearing: 0,
  pitch: 0,
  type: "scattermapbox"
})

const [zoom, setZoom] = useState([{
  type: "scattermapbox"
}]);

  return (
    <div>
      {/* the map being rendered on the website */}
        <Plot
          data={zoom}
          layout={{
            // autosize: true,
            height: 600, width: 1000,
            mapbox: 
              { accesstoken: process.env.REACT_APP_PLOTLY_API_KEY, style: "dark", 
              center: mapState.center, 
              zoom: mapState.zoom, 
              bearing: mapState.bearing, 
              pitch: mapState.pitch },
              margin: { b: 0, l: 0, r: 0, t: 0 },
              showlegend: false,
          }}
          onRelayout={(e) => setMapState({
            zoom: e["mapbox.zoom"],
            center: e["mapbox.center"],
            bearing: e["mapbox.bearing"],
            pitch: e["mapbox.pitch"]
          })}
          scrollZoom={true}
        />
      </div>
      )}
 
export default Map;

