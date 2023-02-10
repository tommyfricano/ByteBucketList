import React, { useMemo } from 'react';
import {GoogleMap, MarkerF} from '@react-google-maps/api';
import "./Map.css"
import { useAuthContext } from '../../hooks/useAuthContext';

const Map = (props) => {
    const {user} = useAuthContext();

    const locations =[
        {
            name: "New York City",
            coor: { lat:40.7128, lng: -74.0060 },
            label: "Byte's #1"
        },

        {
            name: "YellowStone Park",
            coor: { lat: 44.4280 , lng: -110.5885 },
            label: "Byte's #2"
        },

        {
            name: "San Francisco",
            coor: {lat: 37.7749, lng:-122.4194},
            label: "Byte's #3"
        },
        {
            name: "Yosemite Park",
            coor: { lat: 37.8651, lng: -119.5383},
            label: "Byte's #4"
        },
        {
            name: "Hawaii",
            coor: {lat: 19.8968, lng: -155.5828},
            label: "Byte's #5"

        },
    ];


    return(
        <div>            
            <GoogleMap
                    onClick={ev => {
                        console.log("latitide = ", ev.latLng.lat());
                        console.log("longitude = ", ev.latLng.lng());
                        props.setLatitude(ev.latLng.lat());
                        props.setLongitude(ev.latLng.lng());
                        <MarkerF position={{lat: ev.latLng.lat() * 1, lng: ev.latLng.lng() * 1}} label={{text: "Destination", className: "markerLabel" }} ></MarkerF>                    
                    }}
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
            {locations.map((location, index) => (
                <MarkerF position={location.coor} key={index} label={{text: location.label + ", "+location.name ,className: "markerLabel" }} ></MarkerF>
            ))}
            </GoogleMap>
                
        
         </div>
        );
    }

export default Map;
