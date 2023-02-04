import React, {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom";
import '../login/Login.css';
import { useSignup } from "../hooks/useSignup";

const RegistrationForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(user, password,lat,long);

        setUser("");
        setPassword("");
        setLat("");
        setLong("");
        Navigate("/");
    }


    const getLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            } else {
              console.log("Geolocation is not supported by this browser.");
            }
          }

    function showPosition(position) {
       console.log("Latitude: " + position.coords.latitude +
        " Longitude: " + position.coords.longitude);
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat + " " + long);
      }

    return(
        <div className="auth-form">
            <h2>Register</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input required value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="ex: johndoe32" id="Username" name="Username" />
                <label htmlFor="Password">Password</label>
                <input required value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="Password" name="Password" placeholder="******" />
                <label htmlFor="TOS">Accept terms of service **your current location will be taken when you register**</label>
                <input required type="checkbox" name="TOS"/>
                <button type="submit" onClick={getLocation}>Register</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("Login")}>Already have an account? Login here</button>
        </div>
    );
}

export default RegistrationForm;