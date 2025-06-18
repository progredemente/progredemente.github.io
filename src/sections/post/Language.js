import React, { Component } from "react";
import './Language.css';

class Language extends Component {
    
    render() {
        let checkCurrentLang = this.props.currentLang === this.props.langs.default || this.props.currentLang === null || this.props.currentLang === "";
        const flagCode = this.props.langs.default !== 'en' ? this.props.langs.default : 'gb';
        return (
            <div className="language">
                <span>Ver la viñeta en:</span>
                <img
                    src={`${process.env.RESOURCES_URL}/flags/${flagCode}.svg`}
                    className={checkCurrentLang ? "selected" : ""}
                    onClick={() => {
                        if(!checkCurrentLang) {
                            this.props.change(this.props.langs.default)
                        }
                    }}
                    alt={this.props.langs.default}
                />
                {
                    this.props.langs.available.map((lang) => {
                        const flagCode = lang !== 'en' ? lang !== 'el' ? lang : 'gr' : 'gb';
                        return (
                            <img
                                src={`${process.env.RESOURCES_URL}/flags/${flagCode}.svg`}
                                className={this.props.currentLang === lang ? "selected": ""}
                                onClick={() => {
                                    if(this.props.currentLang !== lang)
                                    this.props.change(lang)
                                }}
                                alt={lang}
                            />
                        )
                    })
                }
            </div>
        )
    }

}

export default Language;