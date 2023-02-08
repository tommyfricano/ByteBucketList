import React from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import LocationPin from './LocationPin';
import "./Map.css"

const Map = (props) => {

    return(
        <div>            
                <GoogleMap
                    center={props.center}
                    zoom={props.zoom}
                    mapContainerClassName="google-map"
                >
                {/* <Marker position={props.center}>Current location</Marker> */}
                <Marker position={props.center}></Marker>
                </GoogleMap>
        
         </div>
        );
    }

export default Map;
