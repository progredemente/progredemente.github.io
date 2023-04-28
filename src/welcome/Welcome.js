import React, { Component } from "react";
import Loading from "../common/Loading";
import logo from '../img/logo.png';
import './Welcome.css';
import Social from "../common/Social";
import social from '../social.json';
import { Link } from "react-router-dom";
import Footer from "../web/Footer";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: false,
            favicon: false,
            perroflautum: false,
            strawman: false,
            cable: false,
            camaleon: false,
            calor: false,
            showAllSocialNetworks: false
        }
    }

    render() {
        let social2 = this.state.showAllSocialNetworks ? social : social.slice(0, 4);
        return (
            <div className="welcome">
                <div className="welcome-logo">
                    <Loading hidden={this.state.logo} />
                    <img
                        src={logo}
                        alt="Logo"
                        className={this.state.logo ? "" : "hidden" }
                        onLoad={() => this.setState({ logo: true })}
                    />
                </div>
                <div className="welcome-links">
                    <Link to={"/web"} className="social-link highlight">
                        <Loading
                            hidden={this.state.favicon}
                        />
                        <img
                            src={'./favicon.png'}
                            alt={'web'}
                            className={this.state.favicon ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ favicon: true })
                            }}
                        /> Web
                    </Link>
                    <a href="/perroflautum" className="social-link">
                        <Loading
                            hidden={this.state.perroflautum}
                        />
                        <img
                            src={'./perroflautum.png'}
                            alt={'perroflautum'}
                            className={this.state.perroflautum ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ perroflautum: true})
                            }}
                        /> Perro Flautum
                    </a>
                    <a href="/strawman" className="social-link">
                        <Loading
                            hidden={this.state.strawman}
                        />
                        <img
                            src={'./strawman.png'}
                            alt={'strawman'}
                            className={this.state.strawman ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ strawman: true})
                            }}
                        /> Hombre de paja/Straw man
                    </a>
                    <a href="/cable" className="social-link">
                        <Loading
                            hidden={this.state.cable}
                        />
                        <img
                            src={'./cable.png'}
                            alt={'cable'}
                            className={this.state.cable ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ cable: true})
                            }}
                        /> Recoge cable
                    </a>
                    <a href="/camaleon" className="social-link">
                        <Loading
                            hidden={this.state.camaleon}
                        />
                        <img
                            src={'./camaleon.png'}
                            alt={'camaleon'}
                            className={this.state.cable ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ camaleon: true})
                            }}
                        /> Camaleón
                    </a>
                    <a href="/calor" className="social-link">
                        <Loading
                            hidden={this.state.calor}
                        />
                        <img
                            src={'./calor.png'}
                            alt={'calor'}
                            className={this.state.cable ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ calor: true})
                            }}
                        /> ¡Calor!
                    </a>
                    <p>Sígueme en</p>
                    {
                        social2.map((s) => {
                            return (
                                <Social key={s.id} page={s} name/>
                            )
                        })
                    }
                    <div
                        className={`social-link more${this.state.showAllSocialNetworks ? " hidden": ""}`}
                        onClick={() => {
                            this.setState({ showAllSocialNetworks: true })
                        }}
                    >
                        +
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Welcome;