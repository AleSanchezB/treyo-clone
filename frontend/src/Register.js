// Register.js
import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Treyo - Registro</h1>
        <h2>Crea tu cuenta para continuar</h2>
        <input type="text" placeholder="Nombre completo" className="input-field" />
        <input type="email" placeholder="Introduce tu correo electrónico" className="input-field" />
        <input type="password" placeholder="Crea una contraseña" className="input-field" />
        <input type="password" placeholder="Confirma tu contraseña" className="input-field" />
        <button className="register-btn">Registrarse</button>
        <p>O regístrate con:</p>
        <div className="social-buttons">
          <button className="google-btn">Google</button>
          <button className="microsoft-btn">Microsoft</button>
          <button className="apple-btn">Apple</button>
          <button className="slack-btn">Slack</button>
        </div>
        <p className="register-footer">
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
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

export default Register;
