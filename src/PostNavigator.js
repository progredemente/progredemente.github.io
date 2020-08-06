import React, { Component } from 'react';
import './PostNavigator.css';
import {Link} from 'react-router-dom';
 
class PostNavigator extends Component {
    render() {
        return (
            <div className="navigator-container">
                { this.props.list.indexOf(this.props.currentId) > 0 &&
                    <>
                    <Link to={`/${this.props.section}/${this.props.list[0]}`} title="primero" onClick={this.props.changeImg}>&lt;&lt;</Link>
                    <Link to={`/${this.props.section}/${this.props.list[this.props.list.indexOf(this.props.currentId) - 1]}`} title="anterior" onClick={this.props.changeImg}>&lt;</Link>
                    </>
                }
                { this.props.list.indexOf(this.props.currentId) === 0 &&
                    <>
                    <div></div>
                    <div></div>
                    </>
                }
                { this.props.list.indexOf(this.props.currentId) < this.props.list.length - 1 &&
                    <>
                    <Link to={`/${this.props.section}/${this.props.list[this.props.list.indexOf(this.props.currentId) + 1]}`} title="siguiente" onClick={this.props.changeImg}>&gt;</Link>
                    <Link to={`/${this.props.section}/${this.props.list[this.props.list.length - 1]}`} title="último" onClick={this.props.changeImg}>&gt;&gt;</Link>
                    </>
                }
                { this.props.list.indexOf(this.props.currentId) === this.props.list.length - 1 &&
                    <>
                    <div></div>
                    <div></div>
                    </>
                }
            </div>
        );
    }
}
 
export default PostNavigator;