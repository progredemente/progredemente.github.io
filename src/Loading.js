import React, { Component } from 'react';
import './Loading.css';
 
class Loading extends Component {

    render() {
        return (
            <div className={`loading${this.props.hidden ? " hidden" : ""}`}></div>
        );
    }
}
 
export default Loading;