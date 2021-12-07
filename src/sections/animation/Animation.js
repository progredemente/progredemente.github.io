import React, { Component } from 'react';
import { formatDate } from '../../common/utils';
import PostNavigator from '../post/PostNavigator';
import RichText from '../post/RichText';
import './Animation.css';
import videos from './videos.json';
 
class Animation extends Component {
    render() {
        let id = this.props.match.params.id;
        let video = videos[id];
        let date = video.date != null ? formatDate(new Date(video.date)) : null;
        let currentUrl = this.props.match.url.split("/");
        currentUrl.pop();
        currentUrl = currentUrl.join("/");
        return (
            <>
            <div className="video">
                <iframe
                    width="560"
                    height="315"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <PostNavigator currentId={id} list={Object.keys(videos)} url={currentUrl} changeImg={() => {}} />
            <p className="name">{video.name}</p>
            <p className="date">{date}</p>
            {video.description.map((text, index) => {
                return <RichText key={index} text={text}/>
            })}
            </>
        );
    }
}
 
export default Animation;