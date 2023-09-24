import React, { Component } from 'react';
import './RosterCharacter.css';
import { Link } from 'react-router-dom';
import Loading from '../../common/Loading';
 
class RosterCharacter extends Component {

    constructor(props){
        super(props);
        this.state = { load: false }
    }

    render() {
        return (
            <Link 
                to={`${this.props.url}/${this.props.id}`}
                key={this.props.id}
                className="character-container"
                onClick={(e) => {
                    if(this.props.selected) {
                        e.preventDefault();
                    }
                    else {
                        this.props.changePlayer(this.props.id);
                    }
                }}
            >
                <Loading
                    hidden={ this.state.load }
                />
                <div
                    className={`character${this.state.load ? "": " hidden" }`}
                >
                    <img    
                        src={`../../img/thumbnails/${this.props.id}.png`}
                        alt={this.props.name}
                        title={this.props.name}
                        className="character-img"
                        onLoad={ () => {
                            this.setState({ load: true })
                        }}
                    />
                    { this.props.selected &&
                        <>
                        <div className="character-selected"></div>
                        <img
                            src={'../../img/mano_smash.png'}
                            alt="mano"
                            className="hand"
                            key="hand"
                        />
                        </>
                    }
                </div>
            </Link>
        )
    }
}
 
export default RosterCharacter;