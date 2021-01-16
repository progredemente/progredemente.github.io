import React, { Component } from 'react';
import './ArchiveYear.css';
import {Link} from 'react-router-dom';
import {formatDate} from './utils.js';
 
class ArchiveYear extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: props.show
        }
    }

    render() {
        return (
            <div key={this.props.year} className={this.state.show ? "show" : ""}>
                <h2 className="collapser year" onClick={() => this.setState({show:!this.state.show})}>{this.props.year} <span>&gt;</span></h2>
                { this.state.show && 
                    <div className="thumbnails">
                    {
                        this.props.posts.map((post) => {
                            let date = formatDate(new Date(post.date));
                            return (
                                <Link to={`/post/${post.id}`} key={post.id}>
                                    <img
                                    src={require(`./img/thumbnails/${post.id}.png`)}
                                    alt={post.name}
                                    title={`${date} - ${post.name}`}/>
                                </Link>
                            )
                        })
                    }
                    </div>
                }
            </div>
        );
    }
}
 
export default ArchiveYear;