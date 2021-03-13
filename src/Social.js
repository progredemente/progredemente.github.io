import React, { Component } from 'react';
import './Social.css';
import Loading from './Loading';

class Social extends Component{

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            load: false
        }
    }

    render() {
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.page.url}
                onClick={() => {
                    window.gtag('event', 'page_view', {
                        page_title: this.props.page.id
                    });
                }}
                className="social-link"
            >
                <Loading
                    hidden={this.state.load}
                />
                <img
                    src={require(`./img/social/${this.props.page.id}.png`)}
                    alt={this.props.page.id}
                    className={this.state.load ? "" : "hidden"}
                    onLoad={ () => {
                        this.setState({ load: true })
                    }}
                />
            </a>
        );
    }
}

export default Social;
