import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Map from"../home/map/Map"
import "./AddTrip.css"
import { useAuthContext } from "../hooks/useAuthContext";


const AddTrip = (props) => {
    const [location, setLocation] = useState({});
    const [coordinates, setCoordinates] = useState({});
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const {user} = useAuthContext();
    const navigate = useNavigate();


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
          
          }

        userLocation();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        await 

        navigate("/");
    }

    return(
        <div>
            <h2>Add trip</h2>
            {user && (
            <div className="google-map">
                <Map onClick={location} center={location} zoom={4} setLatitude={setLatitude} setLongitude={setLongitude}></Map>
                <h2>Coordinates: {latitude} , {longitude}</h2>
                <button onClick={handleSubmit}>Add Trip</button>
            </div>
            
            )}
            {!user && (
            <h2>Must be logged in to add a trip!</h2>
            )}
            
        </div>
    );
}

export default AddTrip;