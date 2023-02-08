import React, { useEffect, useState } from "react"
import LeaderboardList from "./leaderboard/LeaderBoardList";
import Map from "./map/Map.js";
import {useLoadScript} from '@react-google-maps/api';
import './Home.css'
import { useAuthContext } from "../hooks/useAuthContext";


// const location = {
//     lat: 37.42216,
//     lng: -122.08427,
//   }

const Home = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyAqkEc9JSJSU62mA9p7zqud8z96RmjuzeM"});
    const {user} = useAuthContext();
    const [location, setLocation] = useState([
        {
            lat: 37.42216,
            lng: -122.08427,
        }
    ]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    

    useEffect(() => {
            const userLocation = async () => {
                const response = await fetch('http://localhost:4000/api/map/' + user.username, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
                })
                const json = await response.json() 
                setLocation({lat: json[0].latitude, lng: json[0].longitude,});
                console.log(location);
              
                if(!response.ok) {
                    setIsLoading(false)
                    setError(json.error)
                }
              }

            userLocation();
        }, [])
    
            if(!isLoaded){
                return <div>Loading...</div>;
            }

    return(
            <div className="container">
                <div className="item"><LeaderboardList /></div>

                {user && (
                    <div className="item"><Map onClick={location} center={location} zoom={10}/></div>
                )}

                {!user && ( <div className="item"><Map center={{ lat: 40.5, lng: -74, }} zoom={8}/></div>)}
                
            </div>
       
    );
}

export default Home;