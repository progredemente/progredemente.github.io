import React, { Component } from 'react';
import './Social.css';
import Loading from './Loading';
import { Icon } from 'components/Icon';

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
                className="social-link"
            >
                {
                    this.props.page.id !== 'web' &&
                    <>
                        <Loading
                            hidden={this.state.load}
                        />
                        <img
                            src={`/img/social/${this.props.page.id}.png`}
                            alt={this.props.page.id}
                            className={this.state.load ? "" : "hidden"}
                            onLoad={ () => {
                                this.setState({ load: true })
                            }}
                        />
                    </>
                }

                {
                    this.props.page.id === 'web' &&
                    <Icon icon="🌐" />
                }
                {
                    this.props.name &&
                    this.props.page.name
                }
            </a>
        );
    }
}

export default Social;
