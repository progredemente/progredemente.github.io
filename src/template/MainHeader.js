import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import logo from '../img/logo.png';
import './MainHeader.css'
import PhoneMenu from "./PhoneMenu";
import SocialBar from "./SocialBar";

class MainHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            logo: false
        }
    }
    render() {
        return (
            <header className="main-header">
                <PhoneMenu />
                <Link to="/" className="logo">
                    <Loading hidden={this.state.logo} />
                    <img
                        src={logo}
                        alt="Logo"
                        className={this.state.logo ? "" : "hidden" }
                        onLoad={() => this.setState({ logo: true })}
                    />
                </Link>
                <div className="title">
                    <h1>progredemente</h1>
                    <SocialBar />
                </div>
            </header>
        )
    }
}

export default MainHeader;