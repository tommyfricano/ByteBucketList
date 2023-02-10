import React, { useMemo } from 'react';
import {GoogleMap, MarkerF} from '@react-google-maps/api';
import "./Map.css"
import { useAuthContext } from '../../hooks/useAuthContext';

const Map = (props) => {
    const {user} = useAuthContext();

    const newYork = {
        lat:40.7128, 
        lng: -74.0060
    }

    const yellowStone = {
        lat: 44.4280 , 
        lng: -110.5885
    }

    const sanFran = {
        lat: 37.7749, 
        lng:-122.4194
    }
    const yosemite = {
        lat: 37.8651, 
        lng: -119.5383
    }
    const hawaii = {
        lat: 19.8968, 
        lng: -155.5828
    }


    return(
        <div>            
            <GoogleMap
                    center={props.center}
                    zoom={props.zoom}
                    mapContainerClassName="google-map"
                >

            {user && (
                <MarkerF position={props.center} label={{text: "Home",fontSize: "20px",
                              fontWeight: "bold",
                              color:'black', 
                              className: "markerLabel"
                              }} ></MarkerF>
            )}
                <MarkerF position={newYork} label={{text: "Byte's #1",className: "markerLabel" }} ></MarkerF>
                <MarkerF position={yellowStone} label={{text: "Byte's #2",className: "markerLabel"}} ></MarkerF>
                <MarkerF position={sanFran} label={{text: "Byte's #3",className: "markerLabel"}} ></MarkerF>
                <MarkerF position={yosemite} label={{text: "Byte's #4,",className: "markerLabel"}} ></MarkerF>
                <MarkerF position={hawaii} label={{text: "Byte's #5",className: "markerLabel"}} ></MarkerF>
            </GoogleMap>
                
        
         </div>
        );
    }

export default Map;
