import React, {useState} from "react"

const LoginForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <label for="Username">Username</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="ex: johndoe32" id="Username" name="Username" />
                <label for="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="Password" name="Password" placeholder="******" />
                <button type="submit">Login</button>
                <button onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here</button>
            </form>
        </div>
    );
}

export default LoginForm;