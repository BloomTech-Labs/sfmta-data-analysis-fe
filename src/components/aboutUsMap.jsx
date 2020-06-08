import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

function AboutUs() {
<<<<<<< HEAD
  const [viewport, setViewPort] = useState({
    latitude: 37.71,
    longitude: -96.24,
    width: '59.1vw',
    height: '61vh',
    zoom: 3.5
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
          onViewportChange={viewport => {
          setViewPort(viewport);
          }}
      />
    </div>
=======
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
    minZoom={3.7}
    maxZoom={3.7}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
    onViewportChange={viewport => {
    setViewPort(viewport);
     }}
    />
</div>
>>>>>>> 253be45df298b6108bba18e6144b51c39be1ea1d
  )
}
export default AboutUs
