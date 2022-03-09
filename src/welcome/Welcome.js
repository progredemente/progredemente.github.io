import React, { Component } from "react";
import Loading from "../common/Loading";
import logo from '../img/logo.png';
import './Welcome.css';
import Social from "../common/Social";
import social from '../social.json';
import { Link } from "react-router-dom";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: false,
            favicon: false,
            perroflautum: false,
            strawman: false,
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
                    <p>Sígueme en</p>
                    {
                        social2.map((s) => {
                            return (
                                <Social key={s.id} page={s} track name/>
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
            </div>
        );
    }
}

export default Welcome;