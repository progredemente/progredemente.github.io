import React, { Component } from 'react';
import './Contact.css'
import Social from './Social';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.timer = null;
    }

    render() {
        return (
            <span
                className="contact"
                onClick={() => {
                    if(this.state.visible){
                        clearTimeout(this.timer);
                        this.setState({visible: false});
                    }
                    else {
                        this.setState({visible: true});
                        this.timer = setTimeout(() => {
                            this.setState({visible: false});
                        }, 5000);
                    }
                }}
            >
                {
                    this.props.contact.name
                }
                <span className={`contact-tooltip${this.state.visible ? " visible": ""}`}>
                    {
                        this.props.contact.pages.map((page) => {
                            return <Social key={page.id} page={page}/>
                        })
                    }
                    <span className="contact-close">×</span>
                </span>
            </span>
        );
    }
}

export default Contact;