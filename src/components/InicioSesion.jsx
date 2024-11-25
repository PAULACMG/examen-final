import React, { Component } from 'react';
import { iniciarSesion } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

class InicioSesion extends Component {
  state = {
    email: '',
    password: '',
    mensaje: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    iniciarSesion(email, password)
      .then(userCredential => {
        this.setState({ mensaje: 'Inicio de sesión exitoso' });
      })
      .catch(error => {
        this.setState({ mensaje: 'Error en el inicio de sesión' });
      });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2><FaSignInAlt /> Inicio de Sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Ingresar email"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Ingresar contraseña"
              required
            />
            <br></br>
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
        <div className="mt-3">
          <Link to="/registro" className="btn btn-secondary">No tienes cuenta? Regístrate</Link>
        </div>
        {this.state.mensaje && <p className="mt-3">{this.state.mensaje}</p>}
      </div>
    );
  }
}

export default InicioSesion;