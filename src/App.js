import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';
import instagram from './img/social/instagram.png';
import twitter from './img/social/twitter.png';
import gab from './img/social/gab.png';
import telegram from './img/social/telegram.png';
import parler from './img/social/parler.png';
import progremonBanner from './img/banners/progremon_banner.png';
import terfVsTransBanner from './img/banners/terf_vs_trans_banner.png';
import smashBanner from './img/banners/smash_banner.png';
import memesBanner from './img/banners/memes_banner.png';
import cuentosBanner from './img/banners/cuentos_banner.png';
import elPalmeroBanner from './img/banners/el_palmero_banner.png';
import postalesNavidenasBanner from './img/banners/postales_navidenas_banner.png';
import series from './series.json';
import list from './list.json';
import Post from './Post';
import Archive from './Archive';
import Series from './Series';
import About from './About';
import Animation from './Animation';
import PageStats from './stats/PageStats';
import Stats from './stats/Stats';
import Celebrity from './Celebrity';
import Size from './Size';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

history.listen((location) => {
    window.gtag('event', 'page_view', {
        page_title: location.hash.replace(/^#\//, "").replace(/\/.*/,"")
    });
})

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        }
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <header className="main-header">
                        <div id="menu-icon">
                            <div id="menu-button" onClick={() => this.setState({showMenu: true})}>☰</div>
                            {
                                this.state.showMenu &&
                                <nav id="menu-phone" onClick={() => this.setState({showMenu: false})}>
                                    <Link to="/">Inicio</Link>
                                    <Link to="/series">Series</Link>
                                    <Link to="/animacion">Animación</Link>
                                    <Link to="/archivo">Archivo</Link>
                                    <Link to="/estadisticas">Estadísticas</Link>
                                    <Link to="/sobre_mi">Sobre&nbsp;mí</Link>
                                    <div id="menu-close">×</div>
                                </nav>
                            }
                        </div>
                        <Link to="/">
                            <img src={logo} id="logo" alt="Logo"/>
                        </Link>
                        <div id="title">
                            <h1>progredemente</h1>
                            <div className="social">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/progredemente/"
                                    onClick={() => {
                                        window.gtag('event', 'page_view', {
                                            page_title: "instagram"
                                        });
                                    }}
                                >
                                    <img src={instagram} alt="instagram"/>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://twitter.com/progredemente"
                                    onClick={() => {
                                        window.gtag('event', 'page_view', {
                                            page_title: "twitter"
                                        });
                                    }}
                                >
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://gab.com/progredemente"
                                    onClick={() => {
                                        window.gtag('event', 'page_view', {
                                            page_title: "gab"
                                        });
                                    }}
                                >
                                    <img src={gab} alt="gab"/>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://t.me/progredemente"
                                    onClick={() => {
                                        window.gtag('event', 'page_view', {
                                            page_title: "telegram"
                                        });
                                    }}
                                >
                                    <img src={telegram} alt="telegram"/>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://parler.com/profile/progredemente"
                                    onClick={() => {
                                        window.gtag('event', 'page_view', {
                                            page_title: "parler"
                                        });
                                    }}
                                >
                                    <img src={parler} alt="parler"/>
                                </a>
                            </div>
                        </div>
                    </header>
                    <nav id="menu">
                        <Link to="/">Inicio</Link>
                        <Link to="/series">Series</Link>
                        <Link to="/animacion">Animación</Link>
                        <Link to="/archivo">Archivo</Link>
                        <Link to="/estadisticas">Estadísticas</Link>
                        <Link to="/sobre_mi">Sobre&nbsp;mí</Link>
                    </nav>
                    <section className="sections">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to={`/post/${Object.keys(list)[Object.keys(list).length - 1]}`}/>
                            </Route>
                            <Route exact path="/post/:id" component={Post}/>
                            <Route exact path="/series">
                                <Series />
                            </Route>
                            <Route exact path="/archivo">
                                <Archive />
                            </Route>
                            <Route exact path="/progremon">
                                <Redirect to="/progremon/progremon_0"/>
                            </Route>
                            <Route exact path="/progremon/:id" component={
                                (props) => {
                                    return (
                                        <div>
                                            <img className="banner" src={progremonBanner} alt={series["progremon"]}/>
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
                                            <img className="banner" src={smashBanner} alt={series["smash"]}/>
                                            <Post { ...props}/>
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
                                            <img className="banner" src={terfVsTransBanner} alt={series["terf_vs_trans"]}/>
                                            <Post {...props}/>
                                        </div>
                                    )
                                }
                            }/>
                            <Route exact path="/memes">
                                <Redirect to="/memes/bici"/>
                            </Route>
                            <Route exact path="/memes/:id" component={
                                (props) => {
                                    return (
                                        <div>
                                            <img className="banner" src={memesBanner} alt={series["memes"]}/>
                                            <Post {...props}/>
                                        </div>
                                    )
                                }
                            }/>
                            <Route exact path="/cuentos">
                                <Redirect to="/cuentos/tres_cerditos"/>
                            </Route>
                            <Route exact path="/cuentos/:id" component={
                                (props) => {
                                    return (
                                        <div>
                                            <img className="banner" src={cuentosBanner} alt={series["cuentos"]}/>
                                            <Post {...props}/>
                                        </div>
                                    )
                                }
                            }/>
                            <Route exact path="/el_palmero">
                                <Redirect to="/el_palmero/oso_machista"/>
                            </Route>
                            <Route exact path="/el_palmero/:id" component={
                                (props) => {
                                    return (
                                        <div>
                                            <img className="banner" src={elPalmeroBanner} alt={series["el_palmero"]}/>
                                            <Post {...props}/>
                                        </div>
                                    )
                                }
                            }/>
                            <Route exact path="/postales_navidenas">
                                <Redirect to="/postales_navidenas/tio_nadal"/>
                            </Route>
                            <Route exact path="/postales_navidenas/:id" component={
                                (props) => {
                                    return (
                                        <div>
                                            <img className="banner" src={postalesNavidenasBanner} alt={series["postales_navidenas"]}/>
                                            <Post {...props}/>
                                        </div>
                                    )
                                }
                            }/>
                            <Route exact path="/sobre_mi">
                                <About />
                            </Route>
                            <Route exact path="/animacion">
                                <Animation />
                            </Route>
                            <Route exact path="/estadisticas">
                                <Stats />
                            </Route>
                            <Route exact path="/.estadisticas">
                                <PageStats />
                            </Route>
                            <Route exact path="/personaje/:name" component={Celebrity}>
                            </Route>
                            <Route exact path="/.tamano/:size" component={Size}>
                            </Route>
                        </Switch>
                    </section>
                    <footer>© 2020-{new Date().getFullYear()} progredemente</footer>
                </Router>
            </div>
        );
    }
}

export default App;
