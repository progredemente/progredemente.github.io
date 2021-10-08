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
                        <Link to={`${this.props.url}`}>Inicio</Link>
                        <Link to={`${this.props.url}/series`}>Series</Link>
                        <Link to={`${this.props.url}/animacion`}>Animación</Link>
                        <Link to={`${this.props.url}/archivo`}>Archivo</Link>
                        <Link to={`${this.props.url}/estadisticas`}>Estadísticas</Link>
                        <Link to={`${this.props.url}/sobre_mi`}>Sobre&nbsp;mí</Link>
                        <div className="phone-menu-close">×</div>
                    </nav>
                }
            </div>
        )
    }
}

export default PhoneMenu;