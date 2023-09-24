import React, { Component } from "react";
import { Link } from "react-router-dom";
import './DesktopMenu.css';

class DesktopMenu extends Component {
    render() {
        return (
            <nav id="desktop-menu">
                <Link to={'/web'}>Inicio</Link>
                <Link to={'/web/series'}>Series</Link>
                <Link to={'/web/archivo'}>Archivo</Link>
                <Link to={'/web/estadisticas'}>Estadísticas</Link>
                <Link to={'/web/sobre_mi'}>Sobre&nbsp;mí</Link>
            </nav>
        );
    }
}

export default DesktopMenu;