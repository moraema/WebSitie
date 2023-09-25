// LoginPage.js
import React from 'react';
import LoginForm from '../Moleculas/login';

function LoginPage() {
  return (
    <div className="login-wrap">
      <h2>Iniciar Sesión</h2>
      <LoginForm />
      <p>¿No tiene una cuenta? Registrase</p>
    </div>
  );
}

export default LoginPage;
