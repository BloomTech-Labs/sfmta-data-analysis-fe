import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { LineChart }from '../line-chart/line-chart'

function Map() {
  const [viewport, setViewPort] = useState({
    latitude: 37.742,
    longitude: -122.438,
    width: '59.1vw',
    height: '61vh',
    zoom: 11
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/sfmtalambda/ckasm81dc3oml1jlls8kbz5mc'
        onViewportChange={viewport => {
          setViewPort(viewport);
        }}
      />
      <LineChart />
    </div>
  );
}

export default Map;