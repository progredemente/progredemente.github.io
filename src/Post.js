import React, { Component } from 'react';
import list from './list.json';
import seriesList from './series.json';
import './Post.css';
import PostNavigator from './PostNavigator';
import Roster from './Roster';
import {Link} from 'react-router-dom';

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
        let series = "post";
        if(this.props.match !== undefined) {
            series = this.props.match.url.split("/")[1];
            if(Object.keys(seriesList).includes(series)){
                if(series === "progremon"){
                    list_ = filterPosts(list, series, { "name": null, "date": null, "description": [] }, "progremon_0");
                }
                else {
                    list_ = filterPosts(list, series);
                }
            }
        }
        return (
            <div>
                <div className="post-img-container">
                    { series !== "smash" &&
                        <PostNavigator currentId={id} list={Object.keys(list_)} series={series} changeImg={this.changeImg.bind(this)}/>
                    }
                    { series === "smash" &&
                        <Roster {...this.props} changeImg={this.changeImg.bind(this)}/>
                    }
                    <div className={ this.state.load ? "loading hidden": "loading" }>
                        <div></div>
                    </div>
                    <img className={ this.state.load ? "": "hidden" } src={require(`./img/comic/${id}.png`)} alt={list_[id].name} onLoad={ () => {
                         this.setState({ load: true })
                     } }/>
                     { series !== "smash" &&
                         <PostNavigator currentId={id} list={Object.keys(list_)} series={series} changeImg={this.changeImg.bind(this)}/>
                     }
                    <div>
                        <p className="name">{list_[id].name}</p>
                        <p className="date">{list_[id].date}</p>
                        { (series === "post" && list_[id].series !== undefined && list_[id].series.length > 0) &&
                            <p className="series-list">En la{list_[id].series.length > 1 ? "s" : ""} serie{list_[id].series.length > 1 ? "s" : ""}: {list_[id].series.map((s) => {
                                return <Link to={`/${s}`} key={s}><img src={require(`./img/banners/${s}_banner.png`)} alt={seriesList[s]}/></Link>
                            })}</p>
                        }
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