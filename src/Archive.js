import React, { Component } from 'react';
import './Archive.css';
import {Link} from 'react-router-dom';
import list from './list.json';
 
class Archive extends Component {
    render() {
        return (
            <ul>
                {
                    Object.keys(list).map((key) => {
                        return <li>
                            <Link to={`/post/${key}`} key={key}>{list[key].date} - {list[key].name}</Link>
                        </li>
                    })
                }
            </ul>
        );
    }
}
 
export default Archive;