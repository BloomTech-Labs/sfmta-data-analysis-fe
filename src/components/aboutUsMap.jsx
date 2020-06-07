import React, { useState, useRef } from 'react';
import ReactMapGL, {  Marker, Popup } from 'react-map-gl';
import * as parkData from './data/developer-data.json'

function AboutUs() {
  // setup map of US based on central coorindate points 
    const [viewport, setViewPort] = useState({
      // latitude: 45.4211,
      // longitude: -75.6903,
      latitude: 37.71,
      longitude: -96.24,
      width: '70vw',
      height: '65vh',
    });
    const mapRef = useRef();

return (
<div className="aboutus-map">
 <ReactMapGL
   {...viewport}
    //fixes the map to still position
    minZoom={3.7}
    maxZoom={3.7}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
    onViewportChange={viewport => {
    setViewPort(viewport);
     }}
     ref={mapRef}
    >
      {parkData.features.map((park) => (
        <Marker 
          key={park.properties.PARK_ID} 
          latitude={park.geometry.coordinates[1]}
          longitude={park.geometry.coordinates[0]}
          >
          <div>MARKER</div>
        </Marker>
      ))}
    </ReactMapGL>
</div>
  )
}
export default AboutUs