import React, { Component } from 'react';
import ThumbnailContainer from '../../common/ThumbnailContainer';
import list from '../../list.json';
 
class Celebrity extends Component {
    render() {
        let name = this.props.match.params.name;
        let posts = Object.keys(list).filter((key) => list[key].celebrities !== undefined ? list[key].celebrities.includes(name) : false).map((key) => {
            return {...list[key], id: key, date: new Date(list[key].date)}
        }).sort((a, b) => {
            return b.date - a.date
        });
        return (
            <>
            <h1 className="section-title">Viñeta{posts.length > 1 ? "s": ""} donde sale {name}</h1>
            <ThumbnailContainer posts={posts} url={this.props.url}/>
            </>
        );
    }
}
 
export default Celebrity;