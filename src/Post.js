import React, { Component } from 'react';
import list from './list.json';
import './Post.css';
import PostNavigator from './PostNavigator'
 
class Post extends Component {
    render() {
        console.log(this.props);
        let id = this.props.id || this.props.match.params.id;
        let list_ = list;
        let section = "post";
        if(this.props.match !== undefined) {
            section = this.props.match.url.split("/")[1];
            switch(section){
                case "progremon":
                    list_ = {
                        "progremon_0": {
                            "name": null,
                            "date": null,
                            "description": []
                        },
                        "progremon_1": list["progremon_1"],
                        "progremon_2": list["progremon_2"]
                    }
                    break;
                case "smash":
                    list_ = {
                        "captain_falconetti": list["captain_falconetti"],
                        "pabluigi": list["pabluigi"],
                        "koopanique": list["koopanique"],
                        "ortega_snake": list["ortega_snake"],
                        "little_mireia": list["little_mireia"],
                        "young_inigo": list["young_inigo"],
                        "duquemar": list["duquemar"]
                    }
                    break;
                case "terf_vs_trans":
                        list_ = {
                            "terf_vs_trans_1": list["terf_vs_trans_1"],
                            "terf_vs_trans_2": list["terf_vs_trans_2"]
                        }
                    break;
            }
        }
        console.log(this.props);
        console.log(this.props)
        return (
            <div>
                <PostNavigator currentId={id} list={Object.keys(list_)} section={section}/>
                <div className="post-img-container">
                    <img src={require(`./img/comic/${id}.png`)} alt={list_[id].name}/>
                    <div>
                        <p className="name">{list_[id].name}</p>
                        <p className="date">{list_[id].date}</p>
                        {list_[id].description.map((text, index) => {
                            return <p key={index}>{text}</p>
                        })}
                    </div>
                </div>
                <PostNavigator currentId={id} list={Object.keys(list_)} section={section}/>
            </div>
        );
    }
}
 
export default Post;