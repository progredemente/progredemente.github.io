import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import './PhoneMenu.css';

class PhoneMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        }
    }
    render() {
        return (
            <div className="phone-menu">
                <div className="phone-menu-open" onClick={() => this.setState({showMenu: true})}>
                    <Icon icon="☰" />
                </div>
                {
                    this.state.showMenu &&
                    <nav className="phone-menu-list" onClick={() => this.setState({showMenu: false})}>
                        <Link to="/">Inicio</Link>
                        <Link to="/series">Series</Link>
                        <Link to="/animacion">Animación</Link>
                        <Link to="/archivo">Archivo</Link>
                        <Link to="/estadisticas">Estadísticas</Link>
                        <Link to="/sobre_mi">Sobre&nbsp;mí</Link>
                        <div className="phone-menu-close">×</div>
                    </nav>
                }
            </div>
        )
    }
}

export default PhoneMenu;