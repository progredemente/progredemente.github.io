import React, { Component } from "react";
import { Link } from "react-router-dom";
import './DesktopMenu.css';

class DesktopMenu extends Component {
    render() {
        return (
            <nav id="desktop-menu">
                <Link to={`${this.props.url}`}>Inicio</Link>
                <Link to={`${this.props.url}/series`}>Series</Link>
                <Link to={`${this.props.url}/animacion`}>Animación</Link>
                <Link to={`${this.props.url}/archivo`}>Archivo</Link>
                <Link to={`${this.props.url}/estadisticas`}>Estadísticas</Link>
                <Link to={`${this.props.url}/sobre_mi`}>Sobre&nbsp;mí</Link>
            </nav>
        );
    }
}

export default DesktopMenu;