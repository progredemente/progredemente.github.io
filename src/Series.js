import React, { Component } from 'react';
import './Series.css';
import {Link} from 'react-router-dom';
import progremonBanner from './img/banners/progremon_banner.png';
import terfVsTransBanner from './img/banners/terf_vs_trans_banner.png';
import smashBanner from './img/banners/smash_banner.png';
 
class Series extends Component {
    render() {
        return (
            <>
            <h1 className="section-title">Series</h1>
            <div className="series-container">
                <div>
                    <Link to="/progremon">
                        <img src={progremonBanner} alt="Progrémon"></img>
                    </Link>
                </div>
                <div>
                    <Link to="/smash">
                        <img src={smashBanner} alt="Spanish Smash Politics"></img>
                    </Link>
                </div>
                <div>
                    <Link to="/terf_vs_trans">
                        <img src={terfVsTransBanner} alt="TERF vs trans"></img>
                    </Link>
                </div>
            </div>
            </>
        );
    }
}
 
export default Series;