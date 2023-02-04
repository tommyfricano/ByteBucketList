import React, {useState} from "react"
import "./Login.css"

const LoginForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div className="auth-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="ex: johndoe32" id="Username" name="Username" />
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="Password" name="Password" placeholder="******" />
                <button type="submit">Login</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch("Register")}>Don't have an account? Register here</button>
        </div>
    );
}

export default LoginForm;