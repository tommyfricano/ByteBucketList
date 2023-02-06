import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ center, zoom }) => (
  <div style={{ height: '50vh', width: '50%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCJ7lnvSMmckltWYC6r3d8UWKQiZHMBKqM' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <AnyReactComponent
        lat={center.lat}
        lng={center.lng}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
);

export default Map;
