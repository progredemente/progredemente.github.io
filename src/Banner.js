import React, { Component } from 'react';
import './Banner.css';
import Loading from './Loading';
 
class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = { load: false }
    }

    render() {
        return (
            <div className="banner">
                <Loading
                    hidden={this.state.load}
                />
                <img
                    className={ this.state.load ? "": " hidden" }
                    src={require(`./img/banners/${this.props.id}_banner.png`)}
                    alt={this.props.alt}
                    onLoad={ () => {
                        this.setState({ load: true })
                    }}
                />
            </div>
        );
    }
}
 
export default Banner;