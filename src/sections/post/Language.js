import React, { Component } from "react";
import './Language.css';

class Language extends Component {
    
    render() {
        let checkCurrentLang = this.props.currentLang === this.props.langs.default || this.props.currentLang === null || this.props.currentLang === "";
        return (
            <div className="language">
                <span>Ver la viñeta en:</span>
                <img
                    src={require(`../../img/lang/${this.props.langs.default}.svg`)}
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
                        return (
                            <img
                                src={require(`../../img/lang/${lang}.svg`)}
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