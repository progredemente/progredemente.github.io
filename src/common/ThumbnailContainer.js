import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import './ThumbnailContainer.css';

class ThumbnailContainer extends Component {

    render() {
        return(
            <div className="thumbnail-container">
            {
                this.props.posts.map((post) => {
                    return (
                        <Thumbnail post={post} key={post.id}/>
                    )
                })
            }
            </div>
        )
    }

}

export default ThumbnailContainer;