import React, { Component } from 'react';
import list from './list.json';
import './Post.css';
import PostNavigator from './PostNavigator'

let filterPosts = (posts, seriesName, initialPost, initialPostName) => {
    let postNames = Object.keys(posts);
    let filteredPostNames = postNames.filter((postName) => {
        if(posts[postName].series === undefined){
            return false;
        }
        return posts[postName].series.includes(seriesName);
    });
    let retPosts = {}
    if(initialPost !== undefined && initialPostName !== undefined) {
        retPosts[initialPostName] = initialPost;
    }
    for(let postName of filteredPostNames){
        retPosts[postName] = posts[postName];
    }
    return retPosts;
}
 
class Post extends Component {
    state = { load: false }

    changeImg() {
        this.setState({ load: false });
    }

    render() {
        let id = this.props.match.params.id;
        let list_ = list;
        let section = "post";
        if(this.props.match !== undefined) {
            section = this.props.match.url.split("/")[1];
            if(["memes", "progremon", "smash", "terf_vs_trans"].includes(section)){
                if(section === "progremon"){
                    list_ = filterPosts(list, section, { "name": null, "date": null, "description": [] }, "progremon_0");
                }
                else {
                    list_ = filterPosts(list, section);
                }
            }
        }
        return (
            <div>
                <div className="post-img-container">
                    <PostNavigator currentId={id} list={Object.keys(list_)} section={section} changeImg={this.changeImg.bind(this)}/>
                    <div className={ this.state.load ? "loading hidden": "loading" }>
                        <div></div>
                    </div>
                    <img className={ this.state.load ? "": "hidden" } src={require(`./img/comic/${id}.png`)} alt={list_[id].name} onLoad={ () => {
                         this.setState({ load: true })
                     } }/>
                    <PostNavigator currentId={id} list={Object.keys(list_)} section={section} changeImg={this.changeImg.bind(this)}/>
                    <div>
                        <p className="name">{list_[id].name}</p>
                        <p className="date">{list_[id].date}</p>
                        {list_[id].description.map((text, index) => {
                            return <p key={index}>{text}</p>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Post;