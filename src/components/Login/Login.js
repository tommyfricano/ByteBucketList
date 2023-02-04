import React, {useState} from 'react';
import LoginForm from './LoginForm.js';
import RegistrationForm from '../registration/RegistrationForm.js';


function Login() {
    const [currentForm, setCurrentForm ] = useState("Login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

      return (
      <>
      <div className='container'> 
      {
        currentForm === "Login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegistrationForm onFormSwitch={toggleForm}/>
      }
      </div>
      </>
      );
}

export default Login;