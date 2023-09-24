import React, { Component } from 'react';
import './Web.css';
import {
    Outlet
} from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

class Web extends Component{

    render() {
        return (
            <>
                <MainHeader />
                <DesktopMenu />
                <section className="sections">
                    <Outlet />
                </section>
                <Footer />
            </>
        );
    }
}

export default Web;
