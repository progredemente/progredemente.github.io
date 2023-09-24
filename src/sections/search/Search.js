import React, { Component } from 'react';
import ThumbnailContainer from '../../common/ThumbnailContainer';
import list from '../../list.json';
 
class Search extends Component {

    componentDidUpdate(prevProps) {
        if(prevProps.params.searchText !== this.props.params.searchText){
            this.render()
        }
    }

    getPosts() {
        return Object.keys(list).map((key) => {
            return {...list[key], id: key, date: new Date(list[key].date)};
        }).filter(this.filterPosts.bind(this)).sort((a, b) => b.date - a.date);
    }

    filterPosts(post) {
        throw Error("You should extend this component and the getPosts method.");
    }

    getRemainingTitle(postCount, searchText) {
        throw Error("You should extend this component and the getTitle method.");
    }

    render() {
        this.searchText = this.props.params.searchText;
        let posts = this.getPosts();
        return (
            <>
            <h1 className="section-title">Viñeta{posts.length > 1 ? "s": ""} {this.getRemainingTitle()}</h1>
            <ThumbnailContainer posts={posts}/>
            </>
        );
    }
}
 
export default Search;