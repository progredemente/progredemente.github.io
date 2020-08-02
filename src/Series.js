import React, { Component } from 'react';
import './Series.css';
import {Link} from 'react-router-dom';
 
class Series extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/progremon">Progrémon</Link>
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