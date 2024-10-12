import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = () => {

 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
      // Envía los datos al backend usando axios
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      
      // Si la respuesta es exitosa, redirige a /home
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (err) {
      // Maneja errores, como credenciales incorrectas
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Treyo</h1>
        <h2>Inicia sesión para continuar</h2>
        <input
            type="email"
			placeholder="Introduce tu correo electrónico"
			className="email-input"
            value={email}
          	onChange={(e) => setEmail(e.target.value)}
		/>
		<input
            type="password"
          	placeholder="Introduce tu contraseña"
          	className="email-input"
          	value={password}
          	onChange={(e) => setPassword(e.target.value)}
        />
            <button className="login-btn" onClick={handleLogin}>Continuar</button>
        <p>O continúa con:</p>
        <div className="social-buttons">
          <button className="google-btn">Google</button>
          <button className="microsoft-btn">Microsoft</button>
          <button className="apple-btn">Apple</button>
          <button className="slack-btn">Slack</button>
        </div>
        <p className="login-footer">
            ¿No puedes iniciar sesión? <a href="/register">Crear una cuenta</a>
        </p>
        <p className="atlassian-footer">
          Pagina creada por alumnos de la Universidad de Sonora.
        </p>
      </div>
      <div className="illustrations">
        {/* Aquí puedes añadir ilustraciones similares si lo deseas */}
      </div>
    </div>
  );
};

export default Login;
