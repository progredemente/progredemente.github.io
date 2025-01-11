import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from 'components/Icon';
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
                        <Link to={'/web'}>Inicio</Link>
                        <Link to={'/web/series'}>Series</Link>
                        <Link to={'/web/archivo'}>Archivo</Link>
                        <Link to={'/web/concursos'}>Concursos</Link>
                        <Link to={'/web/sobre_mi'}>Sobre&nbsp;mí</Link>
                        <a href={'/labs'}><img className="labs-icon" src={`${process.env.RESOURCES_URL}/labs_favicon.png`}/>Labs</a>
                        <div className="phone-menu-close">×</div>
                    </nav>
                }
            </div>
        )
    }
}

export default PhoneMenu;