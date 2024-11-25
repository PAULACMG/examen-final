import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Precio: ${producto.precio}</p>
        <button 
          className="btn btn-primary" 
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;
