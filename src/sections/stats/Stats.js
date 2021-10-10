
import React, { Component } from 'react';
import './Stats.css';
import Unemployment from './Unemployment';
import GenVio from './GenVio';
 
class Stats extends Component {

    render() {
        return (
            <div>
                <h1 className="section-title">Estadísticas</h1>
                <Unemployment />
                <GenVio />
            </div>
        );
    }
}
 
export default Stats;