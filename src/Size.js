import React, { Component } from 'react';
import './Archive.css';
import {Link} from 'react-router-dom';
import list from './list.json';
 
class Size extends Component {
    render() {
        let size = this.props.match.params.size;
        let listKeys = Object.keys(list).filter((key) => list[key].size === size);
        return (
            <>
            <h1 className="section-title">Viñeta{listKeys.length > 1 ? "s": ""} de tamaño {size}</h1>
            <div className="thumbnails">
                {
                    listKeys.map((key) => {
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
 
export default Size;