import React, { Component } from "react";
import { Link } from "react-router-dom";
import './DesktopMenu.css';

class DesktopMenu extends Component {
    render() {
        return (
            <nav id="desktop-menu">
                <Link to="/">Inicio</Link>
                <Link to="/series">Series</Link>
                <Link to="/animacion">Animación</Link>
                <Link to="/archivo">Archivo</Link>
                <Link to="/estadisticas">Estadísticas</Link>
                <Link to="/sobre_mi">Sobre&nbsp;mí</Link>
            </nav>
        );
    }
}

export default DesktopMenu;