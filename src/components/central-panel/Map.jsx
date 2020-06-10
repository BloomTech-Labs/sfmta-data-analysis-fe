import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewPort] = useState({
    latitude: 37.742,
    longitude: -122.438,
    width: '100%',
    height: '63vh',
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        maxZoom={13}
        minZoom={11}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
        onViewportChange={viewport => {
          setViewPort(viewport);
        }}

        options={{
          trackResize: true
        }}
      />

    </div>
  );
}

export default Map;