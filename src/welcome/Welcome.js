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
            labs: false
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
                    <p>¡Nuevo! <br/>Aquí encontrarás todas mis aplicaciones web</p>
                    <a href="/labs" className="social-link highlight">
                        <Loading
                            hidden={this.state.labs}
                        />
                        <img
                            src={`${process.env.RESOURCES_URL}/labs.png`}
                            alt={'labs'}
                            className={this.state.labs ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ labs: true})
                            }}
                        /> Labs
                    </a>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Welcome;