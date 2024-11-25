import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListaProductosWithNavigate from './components/ListaProductos';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro'; 
import Carrito from './components/Carrito'; 
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ListaProductosWithNavigate />} />
        <Route path="/ingreso" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;