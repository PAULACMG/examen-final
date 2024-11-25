import React, { Component } from 'react';
import Producto from './Producto';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

class ListaProductos extends Component {
  state = {
    productos: [
      { id: '1', nombre: 'MOUSE INALAMBRICO', precio: 11990 },
      { id: '2', nombre: 'PARLANTE SOUNDBAR', precio: 119990 }
    ],
    mensaje: ''
  };

  componentDidMount() {
    this.obtenerProductos();
  }

  obtenerProductos = async () => {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    const productosFirestore = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    this.setState({ productos: [...this.state.productos, ...productosFirestore] });
  };

  agregarAlCarrito = async (producto) => {
    try {
      await addDoc(collection(db, 'pedidos'), producto);
      this.props.navigate('/carrito', { state: { carrito: [producto] } });
    } catch (e) {
      console.error('Error al agregar al carrito: ', e);
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Lista de Productos</h2>
        <div className="row mt-3">
          {this.state.productos.map(producto => (
            <div className="col-md-4" key={producto.id}>
              <Producto 
                producto={producto} 
                agregarAlCarrito={() => this.agregarAlCarrito(producto)} 
              />
            </div>
          ))}
        </div>
        {this.state.mensaje && <p className="mt-3">{this.state.mensaje}</p>}
      </div>
    );
  }
}

const ListaProductosWithNavigate = (props) => {
  const navigate = useNavigate();
  return <ListaProductos {...props} navigate={navigate} />;
};

export default ListaProductosWithNavigate;