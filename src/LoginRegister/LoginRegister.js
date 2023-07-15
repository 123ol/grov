import React, { useState } from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");

  const [password, setPassword] = useState('');
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password is correct
    if (password === 'correctPassword') {
      // Password is correct
      setWrongAttempts(0);
      // Perform any other actions here, e.g., redirect to another page
    } else {
      // Password is incorrect
      setWrongAttempts(wrongAttempts + 1);
    }
  };

  return (
    <div className="body">
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form  className="login">
          <h1>Let’s get started</h1>
          <span className="head">Create a Groverse account</span>
          <input type="text" placeholder="Email address" />
          <input type="email" placeholder="Username" />
          <input type="password" placeholder="PASSWORD" />
          <input type="password" placeholder="Confirm password" />
          <button type="submit">REGISTER</button>
          <p>Already have an account ?<span className="log" onClick={() => setaddclass("")}>Log in here</span></p>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form  onSubmit={handleSubmit} className="login">
          <h1>Welcome back</h1>
          <span className="head">Please log in to continue</span>
          <input type="email" placeholder="EMAIL" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="PASSWORD" />
          <div className="log-del">
          {wrongAttempts === 1 && <p className="wrong">Password incorrect</p> }
          {wrongAttempts >= 2 && <p className="forget">Forgot password?  <Link to="/">Click here</Link></p>}
          </div>
           
          <button type="submit">LOGIN</button>
          <p>Don’t have an account ? <span className="log"      onClick={() => setaddclass("right-panel-active")}>Sign up here</span></p>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
      
           
          
          </div>
          <div className="overlay-panel overlay-right" >
       
         
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginRegister;
