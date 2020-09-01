import React, { Component } from 'react';
import './Archive.css';
import {Link} from 'react-router-dom';
import list from './list.json';
 
class Celebrity extends Component {
    render() {
        let name = this.props.match.params.name;
        let listKeys = Object.keys(list).filter((key) => list[key].celebrities !== undefined ? list[key].celebrities.includes(name) : false);
        return (
            <>
            <h1 className="section-title">Viñeta{listKeys.length > 1 ? "s": ""} donde sale {name}</h1>
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
 
export default Celebrity;