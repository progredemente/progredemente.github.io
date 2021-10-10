import React, { Component } from 'react';
import './Social.css';
import Loading from './Loading';

class Social extends Component{

    constructor(props){
        super(props);
        this.state = {
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
                    if(this.props.track){
                        window.gtag('event', 'page_view', {
                            page_title: this.props.page.id
                        });
                    }
                }}
                className="social-link"
            >
                <Loading
                    hidden={this.state.load}
                />
                <img
                    src={require(`../img/social/${this.props.page.id}.png`)}
                    alt={this.props.page.id}
                    className={this.state.load ? "" : "hidden"}
                    onLoad={ () => {
                        this.setState({ load: true })
                    }}
                />
                {
                    this.props.name &&
                    this.props.page.name
                }
            </a>
        );
    }
}

export default Social;
