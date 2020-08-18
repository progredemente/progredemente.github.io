import React, { Component } from 'react';
import './Archive.css';
import {Link} from 'react-router-dom';
import list from './list.json';
 
class Archive extends Component {
    render() {
        return (
            <>
            <h1 className="section-title">Archivo</h1>
            <div className="thumbnails">
                {
                    Object.keys(list).map((key) => {
                        return (
                            <Link to={`/post/${key}`} key={key}>
                                <img src={require(`./img/thumbnails/${key}.png`)} alt={list[key].name} title={`${list[key].date} - ${list[key].name}`}/>
                            </Link>
                        )
                    })
                }
            </div>
            </>
        );
    }
}
 
export default Archive;