import React, { Component } from 'react';
import './SeriesLink.css';
import {Link} from 'react-router-dom';
import Loading from './Loading';
 
class SeriesLink extends Component {

    constructor(props) {
        super(props);
        this.state = { load: false }
    }

    render() {
        return (
            <Link to={`/${this.props.id}`}>
                <div
                    className={ `loading-series-link${this.state.load ? " hidden": ""}` }
                >
                    <Loading />
                </div>
                <img
                    className={ `series-link${this.state.load ? "": " hidden"}` }
                    src={require(`./img/banners/${this.props.id}_banner.png`)}
                    alt={this.props.alt}
                    onLoad={ () => {
                        this.setState({ load: true })
                    }}
                />
            </Link>
        );
    }
}
 
export default SeriesLink;