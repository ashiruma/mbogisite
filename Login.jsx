import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setCreds({ ...creds, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Fake auth: username "admin" and password "password"
    if (creds.username === 'admin' && creds.password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: '2rem auto' }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        name="username"
        value={creds.username}
        onChange={handleChange}
        required
        placeholder="Username"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <input
        name="password"
        type="password"
        value={creds.password}
        onChange={handleChange}
        required
        placeholder="Password"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;