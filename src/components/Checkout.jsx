import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState(location.state?.carrito || []);

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const finalizarCompra = async () => {
    try {
      const batch = carrito.map(producto => addDoc(collection(db, 'pedidos'), producto));
      await Promise.all(batch);
      setCarrito([]);
      alert('Compra finalizada con éxito');
      navigate('/productos');
    } catch (e) {
      console.error('Error al finalizar la compra: ', e);
      alert('Hubo un error al finalizar la compra');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
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
      <div className="mt-3">
        <button className="btn btn-danger mr-2" onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button className="btn btn-success" onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Checkout;