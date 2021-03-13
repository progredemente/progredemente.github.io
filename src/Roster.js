import React, { Component } from 'react';
import './Roster.css';
import list from './list.json';
import RosterCharacter from './RosterCharacter';
 
class Roster extends Component {

    constructor(props){
        super(props);
        this.song = new Audio(require("./audio/smash.ogg"));
    }

    changePlayer = (player) => {
        this.props.changeImg();
        let audio = new Audio(require(`./audio/${player}.mp3`));
        audio.play();
    }


    componentDidMount() {
        this.song.volume = .5;
        this.song.loop = true;
        this.song.play();
        let location = this.props.location.pathname.split("/");
        let currentPlayer = location[location.length - 1];
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
        let location = this.props.location.pathname.split("/");
        let currentPlayer = location[location.length - 1];
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
                            />
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Roster;