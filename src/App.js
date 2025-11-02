import React, { Component } from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Welcome from './welcome/Welcome';
import Web from './web/Web';
import list from './list.json';
import series from './series.json';
import Post from './sections/post/Post';
import Series from './sections/series/Series';
import Archive from './sections/archive/Archive';
import Banner from './common/Banner';
import About from './sections/about/About';
import Stats from './sections/stats/Stats';
import PageStats from './sections/stats/PageStats';
import Celebrity from './sections/search/Celebrity';
import Size from './sections/search/Size';
import Tag from './sections/search/Tag';
import NotFound from './sections/not-found/NotFound';
import Contests from './sections/contests/Contests';
import Options from './sections/options/Options';

class App extends Component{

    render() {
        return (
            <Router forceRefresh>
                    <Routes>
                        <Route index element={<Welcome />} />
                        <Route path="web" element={<Web />}>
                            <Route exact index element={<Navigate to={'post'} replace/>}/>
                            <Route exact path={'post'} element={<Navigate to={Object.keys(list).at(-1)} replace/>}/>
                            <Route exact path={'post/:id'} element={<Post { ...this.props}/>}/>
                            <Route exact path={'series'} element={<Series />}/>
                            <Route exact path={'archivo'} element={<Archive />}/>
                            <Route exact path={'progremon'} element={<Navigate to={'progremon_0'} replace/>}/>
                            <Route exact path={'progremon/:id'} element={
                                <div>
                                    <Banner id="progremon" alt={series["progremon"]} key={`banner-progremon`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'smash'} element={<Navigate to={'captain_falconetti'} replace/>}/>
                            <Route exact path={'smash/:id'} element={
                                <div>
                                    <Banner id="smash" alt={series["smash"]} key={`banner-smash`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'terf_vs_trans'} element={<Navigate to={'terf_vs_trans_1'} replace/>}/>
                            <Route exact path={'terf_vs_trans/:id'} element={
                                <div>
                                    <Banner id="terf_vs_trans" alt={series["terf_vs_trans"]} key={`banner-terf_vs_trans`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'memes'} element={<Navigate to={'bici'} replace/>}/>
                            <Route exact path={'memes/:id'} element={
                                <div>
                                    <Banner id="memes" alt={series["memes"]} key={`banner-memes`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'cuentos'} element={<Navigate to={'tres_cerditos'} replace/>}/>
                            <Route exact path={'cuentos/:id'} element={
                                <div>
                                    <Banner id="cuentos" alt={series["cuentos"]} key={`banner-cuentos`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'el_palmero'} element={<Navigate to={'oso_machista'} replace/>}/>
                            <Route exact path={'el_palmero/:id'} element={
                                <div>
                                    <Banner id="el_palmero" alt={series["el_palmero"]} key={`banner-el_palmero`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'paredones'} element={<Navigate to={'al_menos'} replace/>}/>
                            <Route exact path={'paredones/:id'} element={
                                <div>
                                    <Banner id="paredones" alt={series["paredones"]} key={`banner-paredones`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'postales_navidenas'} element={<Navigate to={'tio_nadal'} replace/>}/>
                            <Route exact path={'postales_navidenas/:id'} element={
                                <div>
                                    <Banner id="postales_navidenas" alt={series["postales_navidenas"]} key={`banner-postales_navidenas`} />
                                    <Post {...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'banderas'} element={<Navigate to={'bandera_galibertaria'} replace/>}/>
                            <Route exact path={'banderas/:id'} element={
                                <div>
                                    <Banner id="banderas" alt={series["banderas"]} key={`banner-banderas`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'latino_ball'} element={<Navigate to={'booric'} replace/>}/>
                            <Route exact path={'latino_ball/:id'} element={
                                <div>
                                    <Banner id="latino_ball" alt={series["latino_ball"]} key={`banner-latino_ball`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'sinegrita'} element={<Navigate to={'sinegrita_0'} replace/>}/>
                            <Route exact path={'sinegrita/:id'} element={
                                <div>
                                    <Banner id="sinegrita" alt={series["sinegrita"]} key={`banner-sinegrita`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'super_madre_protectora'} element={<Navigate to={'madres_protectoras'} replace/>}/>
                            <Route exact path={'super_madre_protectora/:id'} element={
                                <div>
                                    <Banner id="super_madre_protectora" alt={series["super_madre_protectora"]} key={`banner-super_madre_protectora`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'thirdney'} element={<Navigate to={'uberwittchen'} replace/>}/>
                            <Route exact path={'thirdney/:id'} element={
                                <div>
                                    <Banner id="thirdney" alt={series["thirdney"]} key={`banner-thirdney`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'espainderman'} element={<Navigate to={'espainderman'} replace/>}/>
                            <Route exact path={'espainderman/:id'} element={
                                <div>
                                    <Banner id="espainderman" alt={series["espainderman"]} key={`banner-espainderman`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'db'} element={<Navigate to={'metodo_goku'} replace/>}/>
                            <Route exact path={'db/:id'} element={
                                <div>
                                    <Banner id="db" alt={series["db"]} key={`banner-db`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'animacion'} element={<Navigate to={'alerta_antifascista_animado'} replace/>}/>
                            <Route exact path={'animacion/:id'} element={
                                <div>
                                    <Banner id="animacion" alt={series["animacion"]} key={`banner-animacion`} />
                                    <Post { ...this.props}/>
                                </div>
                            }/>
                            <Route exact path={'sobre_mi'} element={<About />}/>
                            <Route exact path={'concursos'} element={<Contests />}/>
                            <Route exact path={'estadisticas'} element={<Stats />}/>
                            <Route exact path={'.estadisticas'} element={<PageStats />}/>
                            <Route exact path={'personaje/:searchText'} element={
                                <Celebrity {...this.props} />
                            }/>
                            <Route exact path={'.tamano/:searchText'} element={
                                <Size {...this.props} />
                            }/>
                            <Route exact path={'.etiqueta/:searchText'} element={
                                <Tag {...this.props} />
                            }/>
                            <Route exact path={'.opciones'} element={
                                <Options />
                            }/>
                            <Route exact path={'404'} element={
                                <NotFound />
                            } />
                        </Route>
                        <Route path="*" element={<Navigate to={'web/404'} replace/>}/>
                    </Routes>
            </Router>
        );
    }
}

export default App;
