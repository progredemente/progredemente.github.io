import React, { Component } from 'react';
import './Series.css';
import {Link} from 'react-router-dom';
import series from '../../series.json';
import Banner from '../../common/Banner';
 
class Series extends Component {
    render() {
        return (
            <>
            <h1 className="section-title">Series</h1>
            <div className="series-container">
                { Object.keys(series).map((s) => {
                    return (
                        <Link to={`/web/${s}`} key={s}>
                            <Banner id={s} alt={series[s]} key={`series-${s}`} />
                        </Link>
                    );
                }) }
            </div>
            </>
        );
    }
}
 
export default Series;