<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as devData from './data/developer-data.json'

function AboutUs() {
=======

import React, { useState } from 'react';
import ReactMapGL, {  Marker, Popup } from 'react-map-gl';
import * as devData from './data/developer-data.json'

function AboutUs() {


>>>>>>> a2391588e91361b4f6c459371a3f6cedd00e2a55
  // setup map of US based on central coorindate points 
  const [viewport, setViewPort] = useState({
    latitude: 37.71,
    longitude: -96.24,
    width: '70vw',
    height: '65vh',
  });
<<<<<<< HEAD
  const mapRef = useRef();
=======

  const mapRef = useRef();

    
const [selectedDev, setSelectedDev] = useState(null);


>>>>>>> a2391588e91361b4f6c459371a3f6cedd00e2a55

  return (
    <div className="aboutus-map">
      <ReactMapGL
        {...viewport}
        //fixes the map to still position
        minZoom={3.7}
        maxZoom={4.1}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
        onViewportChange={viewport => {
          setViewPort(viewport);
        }}
        ref={mapRef}
      >
        {devData.features.map(dev => (
          <Marker
            key={dev.geometry.coordinates}
            latitude={dev.geometry.coordinates[1]}
            longitude={dev.geometry.coordinates[0]}
          >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </Marker>
        ))}
      </ReactMapGL>
<<<<<<< HEAD
    </div>

  )
}
=======
  )
}

    const [viewport, setViewPort] = useState({
      latitude: 37.71,
      longitude: -96.24,
      width: '59.1vw',
      height: '61vh',
    });


return (
<div className="aboutus-map">
 <ReactMapGL
   {...viewport}
    //fixes the map to still position
    minZoom={3.7}
    maxZoom={4.1}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
    onViewportChange={viewport => {
    setViewPort(viewport);
     }}
     
    >
    {devData.features.map(dev => (
        //places marker on the map
        <Marker 
          key={dev.geometry.coordinates} 
          latitude={dev.geometry.coordinates[1]}
          longitude={dev.geometry.coordinates[0]}
          >
          <button 
            className="marker-btn"
            onClick={e => {
              e.preventDefault();
              setSelectedDev(dev)
            }}
            >
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </button>
        </Marker>
      ))}

      {selectedDev ? (
          <Popup
            latitude={selectedDev.geometry.coordinates[1]}
            longitude={selectedDev.geometry.coordinates[0]}
            onClose={() => {
              setSelectedDev(null);
            }}
          >
            <div className="popup-text">
              <h2>{selectedDev.properties.name}</h2> 
              <h4>{selectedDev.properties.role}</h4>
            </div>
          </Popup>
        ) : null} 

    </ReactMapGL>
</div>

  );
}
>>>>>>> a2391588e91361b4f6c459371a3f6cedd00e2a55
export default AboutUs