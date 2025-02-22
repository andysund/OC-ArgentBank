// src/pages/SignIn.jsx
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Envoie les informations de connexion (adapte le nom des champs selon ton backend)
        body: JSON.stringify({ email: username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Login failed: ' + errorData.message);
      } else {
        const data = await response.json();
        // On suppose que le token est dans data.body.token
        dispatch(loginSuccess(data.body.token));
        localStorage.setItem('token', data.body.token);
        // Rediriger vers la page de profil
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div className="signin-page">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1 className="signin-title">Sign In</h1>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
