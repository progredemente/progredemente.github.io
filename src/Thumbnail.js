import React, { Component } from 'react';
import './Thumbnail.css';
import {Link} from 'react-router-dom';
import {formatDate} from './utils.js';
import Loading from './Loading';
 
class Thumbnail extends Component {

    constructor(props){
        super(props);
        this.state = { load: false }
    }

    render() {
        return (
            <Link to={`${this.props.url}/post/${this.props.post.id}`} key={this.props.post.id} className="thumbnail">
                <div
                    className={ `loading-thumbnail${this.state.load ? " hidden": ""}` }
                >
                    <Loading />
                </div>
                <img
                    className={ this.state.load ? "": "hidden" }
                    src={require(`./img/thumbnails/${this.props.post.id}.png`)}
                    alt={this.props.post.name}
                    title={`${formatDate(new Date(this.props.post.date))} - ${this.props.post.name}`}
                    onLoad={ () => {
                        this.setState({ load: true })
                    }}
                />
            </Link>
        );
    }
}
 
export default Thumbnail;