import React, {useState} from "react"
import '../login/Login.css';

const RegistrationForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div className="auth-form">
            <h2>Register</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="ex: johndoe32" id="Username" name="Username" />
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="Password" name="Password" placeholder="******" />
                <label htmlFor="TOS">Accept terms of service **your current location will be taken when you register**</label>
                <input type="checkbox" name="TOS"/>
                <button type="submit">Register</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("Login")}>Already have an account? Login here</button>
        </div>
    );
}

export default RegistrationForm;