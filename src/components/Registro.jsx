import React, { Component } from 'react';
import { registrarUsuario } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactValidator from 'simple-react-validator';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mensaje: ''
    };
    this.validator = new SimpleReactValidator();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      const { email, password } = this.state;
      registrarUsuario(email, password)
        .then(userCredential => {
          this.setState({ mensaje: 'Registro exitoso' });
        })
        .catch(error => {
          this.setState({ mensaje: 'Error en el registro' });
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Registro</h2>
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
            {this.validator.message('email', this.state.email, 'required|email')}
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
            {this.validator.message('password', this.state.password, 'required|min:6')}
          </div>
          <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
        {this.state.mensaje && <p className="mt-3">{this.state.mensaje}</p>}
      </div>
    );
  }
}

export default Registro;