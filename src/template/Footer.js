import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">© 2020-{new Date().getFullYear()} progredemente</footer>
        );
    }
}

export default Footer;