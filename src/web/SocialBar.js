import React, { Component } from "react";
import Social from "../common/Social";
import social from '../social.json';
import './SocialBar.css';

class SocialBar extends Component {
    render() {
        return (
            <div className="social-bar">
                {
                    social.map((s) => {
                        return <Social key={s.id} page={s} track={true} />
                    })
                }
            </div>
        );
    }
}

export default SocialBar;