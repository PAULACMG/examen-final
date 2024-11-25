import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

const Carrito = () => {
  const location = useLocation();
  const carrito = location.state?.carrito || [];

  return (
    <div className="container mt-5">
      <h2><FaShoppingCart /> Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-group">
          {carrito.map((producto, index) => (
            <li key={index} className="list-group-item">
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <div className="mt-3">
          <Link to="/checkout" state={{ carrito }} className="btn btn-primary">Proceder al Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Carrito;