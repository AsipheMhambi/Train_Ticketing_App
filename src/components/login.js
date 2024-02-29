// Login.js
import React, { useState } from 'react';
import './login.css';

const Login = () => { 
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting', { username, password });
    
  };

  return (
    <form className="form_main" onSubmit={handleSubmit}>
      <p className="heading">Login</p>
      <div className="inputContainer">
        <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
          
        </svg>
        <input
          placeholder="Username"
          id="username"
          className="inputField"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      
      <div className="inputContainer">
        <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
          
        </svg>
        <input
          placeholder="Password"
          id="password"
          className="inputField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
                
      <button type="submit" id="button">Submit</button>
      <div className="signupContainer">
        <p>Don't have any account?</p>
        <a href="#">Sign up</a>
      </div>
    </form>
  );
}

export default Login;
