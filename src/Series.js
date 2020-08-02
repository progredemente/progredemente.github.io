import React, { Component } from 'react';
import './Series.css';
import {Link} from 'react-router-dom';
import progremonBanner from './img/banners/progremon_banner.png';
 
class Series extends Component {
    render() {
        return (
            <div className="series-container">
                <div>
                    <Link to="/progremon">
                        <img src={progremonBanner} alt="Progrémon"></img>
                    </Link>
                </div>
                <div>
                    <Link to="/smash">Smash</Link>
                </div>
                <div>
                    <Link to="/terf_vs_trans">TERF vs trans</Link>
                </div>
            </div>
        );
    }
}
 
export default Series;