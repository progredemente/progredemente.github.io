import React, { Component } from 'react';
import list from './list.json';
import './Post.css';
import PostNavigator from './PostNavigator'
 
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
                        "duquemar": list["duquemar"],
                        "alvarez_de_hyrule": list["alvarez_de_hyrule"]
                    }
                    break;
                case "terf_vs_trans":
                        list_ = {
                            "terf_vs_trans_1": list["terf_vs_trans_1"],
                            "terf_vs_trans_2": list["terf_vs_trans_2"],
                            "terf_vs_trans_3": list["terf_vs_trans_3"]
                        }
                    break;
                default:
                    break;
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