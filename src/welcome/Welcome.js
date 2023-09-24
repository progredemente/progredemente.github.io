import React, { Component } from "react";
import Loading from "../common/Loading";
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
            buon_appetito: false,
            d_hondt: false
        }
    }

    render() {
        return (
            <div className="welcome">
                <div className="welcome-logo">
                    <Loading hidden={this.state.logo} />
                    <img
                        src="/img/logo.png"
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
                            src={`${process.env.RESOURCES_URL}/web.png`}
                            alt={'web'}
                            className={this.state.favicon ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ favicon: true })
                            }}
                        /> Web
                    </Link>
                    <p>Sígueme en</p>
                    {
                        social.map((s) => {
                            return (
                                <Social key={s.id} page={s} name/>
                            )
                        })
                    }
                    <p>Apps</p>
                    <a href="/perroflautum" className="social-link">
                        <Loading
                            hidden={this.state.perroflautum}
                        />
                        <img
                            src={`${process.env.RESOURCES_URL}/perroflautum.png`}
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
                            src={`${process.env.RESOURCES_URL}/strawman.png`}
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
                            src={`${process.env.RESOURCES_URL}/cable.png`}
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
                            src={`${process.env.RESOURCES_URL}/camaleon.png`}
                            alt={'camaleon'}
                            className={this.state.camaleon ? "" : "hidden"}
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
                            src={`${process.env.RESOURCES_URL}/calor.png`}
                            alt={'calor'}
                            className={this.state.calor ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ calor: true})
                            }}
                        /> ¡Calor!
                    </a>
                    <a href="/buon-appetito" className="social-link">
                        <Loading
                            hidden={this.state.buon_appetito}
                        />
                        <img
                            src={`${process.env.RESOURCES_URL}/buon_appetito.png`}
                            alt={'buon_appetito'}
                            className={this.state.buon_appetito ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ buon_appetito: true})
                            }}
                        /> Buon Appetito
                    </a>
                    <a href="/d-hondt" className="social-link">
                        <Loading
                            hidden={this.state.d_hondt}
                        />
                        <img
                            src={`${process.env.RESOURCES_URL}/d_hondt.png`}
                            alt={'d_hondt'}
                            className={this.state.d_hondt ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ d_hondt: true})
                            }}
                        /> d'Hondt tread on me
                    </a>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Welcome;