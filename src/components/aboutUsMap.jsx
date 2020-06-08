import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function AboutUs() {
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
  )
}
export default AboutUs
