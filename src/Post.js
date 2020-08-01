import React, { Component } from 'react';
import list from './list.json';
import './Post.css';
import PostNavigator from './PostNavigator'
 
class Post extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div>
                <PostNavigator currentId={id} list={Object.keys(list)} section="post"/>
                <div className="img-container">
                    <img src={require(`./img/${id}.png`)} alt={list[id].name}/>
                    <div>
                        <p className="name">{list[id].name}</p>
                        <p className="date">{list[id].date}</p>
                        {list[id].description.map((text, index) => {
                            return <p key={index}>{text}</p>
                        })}
                    </div>
                </div>
                <PostNavigator currentId={id} list={Object.keys(list)} section="post"/>
            </div>
        );
    }
}
 
export default Post;