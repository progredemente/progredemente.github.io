import React, { Component } from 'react';
import './Web.css';
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import Archive from "../sections/archive/Archive";
import Banner from "../common/Banner";
import Post from "../sections/post/Post";
import Series from "../sections/series/Series";
import DesktopMenu from "./DesktopMenu";
import MainHeader from "./MainHeader";
import About from '../sections/about/About';
import Animation from "../sections/animation/Animation";
import Stats from '../sections/stats/Stats';
import PageStats from "../sections/stats/PageStats";
import series from '../series.json';
import list from '../list.json';
import Footer from "./Footer";
import videos from '../sections/animation/videos.json';
import Tag from '../sections/search/Tag';
import Celebrity from '../sections/search/Celebrity';
import Size from '../sections/search/Size';

class Web extends Component{

    render() {
        return (
            <>
                <MainHeader url={this.props.match.url}/>
                <DesktopMenu url={this.props.match.url}/>
                <section className="sections">
                    <Switch>
                        <Redirect exact from={`${this.props.match.url}`} to={`${this.props.match.url}/post`}/>
                        <Redirect exact from={`${this.props.match.url}/post`} to={`${this.props.match.url}/post/${Object.keys(list)[Object.keys(list).length - 1]}`}/>
                        <Route exact path={`${this.props.match.url}/post/:id`} component={Post}/>
                        <Route exact path={`${this.props.match.url}/series`}>
                            <Series url={this.props.match.url}/>
                        </Route>
                        <Route exact path={`${this.props.match.url}/archivo`}>
                            <Archive url={this.props.match.url}/>
                        </Route>
                        <Redirect exact from={`${this.props.match.url}/progremon`} to={`${this.props.match.url}/progremon/progremon_0`}/>
                        <Route exact path={`${this.props.match.url}/progremon/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="progremon" alt={series["progremon"]} key={`banner-progremon`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/smash`} to={`${this.props.match.url}/smash/captain_falconetti`}/>
                        <Route exact path={`${this.props.match.url}/smash/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="smash" alt={series["smash"]} key={`banner-smash`} />
                                    <Post { ...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/terf_vs_trans`} to={`${this.props.match.url}/terf_vs_trans/terf_vs_trans_1`}/>
                        <Route exact path={`${this.props.match.url}/terf_vs_trans/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="terf_vs_trans" alt={series["terf_vs_trans"]} key={`banner-terf_vs_trans`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/memes`} to={`${this.props.match.url}/memes/bici`}/>
                        <Route exact path={`${this.props.match.url}/memes/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="memes" alt={series["memes"]} key={`banner-memes`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/cuentos`} to={`${this.props.match.url}/cuentos/tres_cerditos`}/>
                        <Route exact path={`${this.props.match.url}/cuentos/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="cuentos" alt={series["cuentos"]} key={`banner-cuentos`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/el_palmero`} to={`${this.props.match.url}/el_palmero/oso_machista`}/>
                        <Route exact path={`${this.props.match.url}/el_palmero/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="el_palmero" alt={series["el_palmero"]} key={`banner-el_palmero`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Redirect exact from={`${this.props.match.url}/postales_navidenas`} to={`${this.props.match.url}/postales_navidenas/tio_nadal`}/>
                        <Route exact path={`${this.props.match.url}/postales_navidenas/:id`} render={(props) => {
                            return (
                                <div>
                                    <Banner id="postales_navidenas" alt={series["postales_navidenas"]} key={`banner-postales_navidenas`} />
                                    <Post {...props}/>
                                </div>
                            )
                        }}/>
                        <Route exact path={`${this.props.match.url}/sobre_mi`}>
                            <About />
                        </Route>
                        <Redirect exact from={`${this.props.match.url}/animacion`} to={`${this.props.match.url}/animacion/${Object.keys(videos)[Object.keys(videos).length - 1]}`}/>
                        <Route exact path={`${this.props.match.url}/animacion/:id`} component={Animation}/>
                        <Route exact path={`${this.props.match.url}/estadisticas`}>
                            <Stats />
                        </Route>
                        <Route exact path={`${this.props.match.url}/.estadisticas`}>
                            <PageStats />
                        </Route>
                        <Route exact path={`${this.props.match.url}/personaje/:searchText`} render={(props) => {
                            return <Celebrity {...props} url={this.props.match.url} />
                        }}/>
                        <Route exact path={`${this.props.match.url}/.tamano/:searchText`} render={(props) => {
                            return <Size {...props} url={this.props.match.url} />
                        }}/>
                        <Route exact path={`${this.props.match.url}/.etiqueta/:searchText`} render={(props) => {
                            return <Tag {...props} url={this.props.match.url} />
                        }}/>
                    </Switch>
                </section>
                <Footer /> 
            </>
        );
    }
}

export default Web;
