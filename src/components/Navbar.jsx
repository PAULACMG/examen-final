import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'pink' }}>
      <Link className="navbar-brand" to="/">Mi Tienda</Link>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/productos">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ingreso">Iniciar Sesión</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/carrito">
              <FaShoppingCart /> Carrito
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
