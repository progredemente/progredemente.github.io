import React, { Component } from 'react';
import './Roster.css';
import { Link } from 'react-router-dom';
import list from './list.json';
import hand from './img/mano_smash.png';
 
class Roster extends Component {
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
                            <Link to={`/smash/${player}`} key={player}  onClick={currentPlayer === player ? (e) => e.preventDefault() : this.props.changeImg}>
                                <img src={require(`./img/thumbnails/${player}.png`)} alt={list[player].name} title={list[player].name} className="player"/>
                                { currentPlayer === player &&
                                    <>
                                    <div className="player-selected"></div>
                                    <img src={hand} alt="mano" className="hand"/>
                                    </>
                                }
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Roster;