import React, { Component } from 'react';
import './Series.css';
import {Link} from 'react-router-dom';
import series from './series.json';
 
class Series extends Component {
    render() {
        return (
            <>
            <h1 className="section-title">Series</h1>
            <div className="series-container">
                { Object.keys(series).map((s) => {
                    return (
                        <div key={s}>
                            <Link to={`/${s}`}>
                                <img src={require(`./img/banners/${s}_banner.png`)} alt={series[s]}/>
                            </Link>
                        </div>
                    );
                }) }
            </div>
            </>
        );
    }
}
 
export default Series;