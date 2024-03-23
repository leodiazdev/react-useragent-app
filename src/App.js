import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

const Home1 = () => {
  const navigate = useNavigate();
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;

  // Redireccionamos después de mostrar la información usando useNavigate
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home2');
    }, 3000); // Espera 3 segundos antes de redirigir
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Home 1</h1>
      <p><strong>User Agent:</strong> {userAgent}</p>
      <p><strong>Referrer:</strong> {referrer || "Direct Access / No Referrer"}</p>
    </div>
  );
};

const Home2 = () => {
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;

  return (
    <div>
      <h1>Home 2</h1>
      <p><strong>User Agent:</strong> {userAgent}</p>
      <p><strong>Referrer:</strong> {referrer || "Direct Access / No Referrer"}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router basename="/react-useragent-app"> {/* Asegúrate de reemplazar "/nombre-de-tu-repositorio" con el nombre real de tu repositorio */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/home1" />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </Router>
  );
};

export default App;
