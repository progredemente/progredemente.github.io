import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './Contact.js';

class RichText extends Component{

    render() {
        let parsedText = this.parseText(this.props.text);
        return (
            <p>{
                parsedText.map((text, i) => {
                    if(typeof text === "string"){
                        return <span key={i}>{text}</span>
                    }
                    else {
                        if(text.link){
                            return <a key={i} href={text.link} target="_blank" rel="noopener noreferrer">{text.link}</a>
                        }
                        if(text.contact){
                            return <Contact key={i} contact={text.contact} />
                        }
                    }
                    return <></>
                })
            }</p>
        );
    }

    parseText(text) {
        return this._parseText([], text);
    }

    _parseText(parsed, remaining){
        let match = remaining.match(/{[^}]*}/);
        if(match != null) {
            let split = remaining.split(match[0])
            if(split[0] !== "") {
                parsed.push(split[0]);
            }
            parsed.push(this.parseRichText(match[0]));
            if(split[1] !== ""){
                return this._parseText(parsed, split[1]);
            }
            else return parsed;
        }
        else {
            parsed.push(remaining);
            return parsed;
        }
    }

    parseRichText(text) {
        text = text.substr(1, text.length - 2);
        if(text.startsWith("http")){
            return {
                link: text
            };
        }
        if(text.startsWith("contact")){
            return {
                contact: contacts[text.split(":")[1]]
            }
        }
        throw new Error(`Invalid rich text format ${text}`);
    }

}

export default RichText;