import React, { Component } from 'react';
import './Roster.css';
import list from '../../list.json';
import RosterCharacter from './RosterCharacter';
 
class Roster extends Component {

    constructor(props){
        super(props);
        this.song = new Audio("../../audio/smash.ogg");
    }

    changePlayer = (player) => {
        this.props.changeImg();
        let audio = new Audio(`../../audio/${player}.mp3`);
        audio.play().then(()=>{}, ()=>{});
    }

    componentDidMount() {
        this.song.volume = .5;
        this.song.loop = true;
        this.song.play().then(()=>{}, ()=>{});
        let currentPlayer = this.props.params.id;
        this.changePlayer(currentPlayer);
    }

    componentWillUnmount() {
        this.song.pause();
        this.song.currentTime = 0;
    }

    render() {
        let roster = Object.keys(list).filter((post) => {
            if(list[post].series === undefined){
                return false;
            }
            return list[post].series.includes("smash");
        })
        let currentPlayer = this.props.params.id;
        return (
            <div className="roster">
                {
                    roster.map((player) => {
                        return (
                            <RosterCharacter
                                id={player}
                                key={`roster-${player}`}
                                name={list[player].name}
                                changePlayer={this.changePlayer}
                                selected={player === currentPlayer}
                                url={this.props.url}
                            />
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Roster;