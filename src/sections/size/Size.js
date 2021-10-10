import React, { Component } from 'react';
import ThumbnailContainer from '../../common/ThumbnailContainer';
import list from '../../list.json';
 
class Size extends Component {
    render() {
        let size = this.props.match.params.size;
        let posts = Object.keys(list).filter((key) => list[key].size === size).map((key) => {
            return {...list[key], id: key, date: new Date(list[key].date)}
        }).sort((a, b) => {
            return b.date - a.date
        });
        return (
            <>
            <h1 className="section-title">Viñeta{posts.length > 1 ? "s": ""} de tamaño {size}</h1>
            <ThumbnailContainer posts={posts} url={this.props.url}/>
            </>
        );
    }
}
 
export default Size;