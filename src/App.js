import React from 'react';
import './App.css';
import logo from './img/logo.png';
import instagram from './img/social/instagram.png';
import twitter from './img/social/twitter.png';
import gab from './img/social/gab.png';
import progremonBanner from './img/banners/progremon_banner.png';
import terfVsTransBanner from './img/banners/terf_vs_trans_banner.png';
import list from './list.json';
import Post from './Post';
import Archive from './Archive';
import Series from './Series';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <header className="main-header">
                    <Link to="/">
                        <img src={logo} id="logo" alt="Logo"/>
                    </Link>
                    <div id="title">
                        <h1>progredemente</h1>
                        <div className="social">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/progredemente/">
                                <img src={instagram} alt="instagram"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/progredemente">
                                <img src={twitter} alt="twitter"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://gab.com/progredemente">
                                <img src={gab} alt="gab"/>
                            </a>
                        </div>
                    </div>
                </header>
                <nav id="menu">
                    <Link to="/">Inicio</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/archivo">Archivo</Link>
                </nav>
                <section>
                    <Switch>
                        <Route exact path="/">
                            <Post id={Object.keys(list)[Object.keys(list).length - 1]}/>
                        </Route>
                        <Route exact path="/post/:id" component={Post}/>
                        <Route exact path="/series">
                            <Series></Series>
                        </Route>
                        <Route exact path="/archivo">
                            <Archive></Archive>
                        </Route>
                        <Route exact path="/progremon">
                            <Redirect to="/progremon/progremon_0"/>
                        </Route>
                        <Route exact path="/progremon/:id" component={
                            (props) => {
                                return (
                                    <div>
                                        <img className="banner" src={progremonBanner} alt="Progrémon"/>
                                        <Post {...props}/>
                                    </div>
                                )
                            }
                        }/>
                        <Route exact path="/smash">
                            <Redirect to="/smash/captain_falconetti"/>
                        </Route>
                        <Route exact path="/smash/:id" component={
                            (props) => {
                                return (
                                    <div>
                                        <h1>Smash</h1>
                                        <Post {...props}/>
                                    </div>
                                )
                            }
                        }/>
                        <Route exact path="/terf_vs_trans">
                            <Redirect to="/terf_vs_trans/terf_vs_trans_1"/>
                        </Route>
                        <Route exact path="/terf_vs_trans/:id" component={
                            (props) => {
                                return (
                                    <div>
                                        <img className="banner" src={terfVsTransBanner} alt="TERF vs trans"/>
                                        <Post {...props}/>
                                    </div>
                                )
                            }
                        }/>
                    </Switch>
                </section>
                <footer>© 2020 progredemente</footer>
            </Router>
        </div>
    );
}

export default App;
