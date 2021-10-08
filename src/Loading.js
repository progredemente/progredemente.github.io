import React, { Component } from 'react';
import './Loading.css';
 
class Loading extends Component {

    render() {
        return (
            <span className={`loading${this.props.hidden ? " hidden" : ""}`}></span>
        );
    }
}
 
export default Loading;