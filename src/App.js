import React, { Component } from 'react';
import './App.css';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import Archive from "./Archive";
import Banner from "./Banner";
import Post from "./Post";
import Series from "./Series";
import DesktopMenu from "./template/DesktopMenu";
import MainHeader from "./template/MainHeader";
import About from './About';
import Animation from "./Animation";
import Stats from './stats/Stats';
import PageStats from "./stats/PageStats";
import Celebrity from "./Celebrity";
import Size from "./Size";
import series from './series.json';
import list from './list.json';
import Footer from "./template/Footer";
import {createBrowserHistory} from 'history';
import Welcome from './Welcome';

const history = createBrowserHistory();

history.listen((location) => {
    window.gtag('event', 'page_view', {
        page_title: location.hash.replace(/^#\//, "").replace(/\/.*/,"")
    });
})

class App extends Component{

    render() {
        return (
            <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/web/" render={({ match: { url } }) => (
                            <>
                                <MainHeader url={url}/>
                                <DesktopMenu url={url}/>
                                <section className="sections">
                                    <Switch>
                                        <Redirect exact from={`${url}`} to={`${url}/post`}/>
                                        <Redirect exact from={`${url}/post`} to={`${url}/post/${Object.keys(list)[Object.keys(list).length - 1]}`}/>
                                        <Route exact path={`${url}/post/:id`} component={Post}/>
                                        <Route exact path={`${url}/series`}>
                                            <Series url={url}/>
                                        </Route>
                                        <Route exact path={`${url}/archivo`}>
                                            <Archive url={url}/>
                                        </Route>
                                        <Redirect exact from={`${url}/progremon`} to={`${url}/progremon/progremon_0`}/>
                                        <Route exact path={`${url}/progremon/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="progremon" alt={series["progremon"]} key={`banner-progremon`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/smash`} to={`${url}/smash/captain_falconetti`}/>
                                        <Route exact path={`${url}/smash/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="smash" alt={series["smash"]} key={`banner-smash`} />
                                                    <Post { ...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/terf_vs_trans`} to={`${url}/terf_vs_trans/terf_vs_trans_1`}/>
                                        <Route exact path={`${url}/terf_vs_trans/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="terf_vs_trans" alt={series["terf_vs_trans"]} key={`banner-terf_vs_trans`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/memes`} to={`${url}/memes/bici`}/>
                                        <Route exact path={`${url}/memes/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="memes" alt={series["memes"]} key={`banner-memes`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/cuentos`} to={`${url}/cuentos/tres_cerditos`}/>
                                        <Route exact path={`${url}/cuentos/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="cuentos" alt={series["cuentos"]} key={`banner-cuentos`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/el_palmero`} to={`${url}/el_palmero/oso_machista`}/>
                                        <Route exact path={`${url}/el_palmero/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="el_palmero" alt={series["el_palmero"]} key={`banner-el_palmero`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Redirect exact from={`${url}/postales_navidenas`} to={`${url}/postales_navidenas/tio_nadal`}/>
                                        <Route exact path={`${url}/postales_navidenas/:id`} render={(props) => {
                                            return (
                                                <div>
                                                    <Banner id="postales_navidenas" alt={series["postales_navidenas"]} key={`banner-postales_navidenas`} />
                                                    <Post {...props}/>
                                                </div>
                                            )
                                        }}/>
                                        <Route exact path={`${url}/sobre_mi`}>
                                            <About />
                                        </Route>
                                        <Route exact path={`${url}/animacion`}>
                                            <Animation />
                                        </Route>
                                        <Route exact path={`${url}/estadisticas`}>
                                            <Stats />
                                        </Route>
                                        <Route exact path={`${url}/.estadisticas`}>
                                            <PageStats />
                                        </Route>
                                        <Route exact path={`${url}/personaje/:name`} render={(props) => {
                                            return <Celebrity {...props} url={url} />
                                        }}/>
                                        <Route exact path={`${url}/.tamano/:size`} render={(props) => {
                                            return <Size {...props} url={url} />
                                        }}/>
                                    </Switch>
                                </section>
                                <Footer /> 
                            </>
                            )}>
                        </Route>
                    </Switch>
            </Router>
        );
    }
}

export default App;
