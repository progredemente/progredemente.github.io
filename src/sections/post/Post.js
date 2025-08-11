import React, { Component } from 'react';
import list from '../../list.json';
import seriesList from '../../series.json';
import './Post.css';
import PostNavigator from './PostNavigator';
import Roster from './Roster';
import {Link} from 'react-router-dom';
import {formatDate, getNextDayForX, withNavigate, withParams} from '../../common/utils.js';
import Banner from '../../common/Banner';
import RichText from './RichText.js';
import Language from './Language';
import Image from '../../common/Image';
import { Icon } from 'components/Icon';
import Thumbnail from '../../common/Thumbnail.js';
import Loading from '../../common/Loading.js';

let filterPosts = (posts, seriesName, initialPost, initialPostName) => {
    let postNames = Object.keys(posts);
    let filteredPostNames = postNames.filter((postName) => {
        if(posts[postName].series === undefined){
            return false;
        }
        return posts[postName].series.includes(seriesName);
    });
    let retPosts = {}
    if(initialPost !== undefined && initialPostName !== undefined) {
        retPosts[initialPostName] = initialPost;
    }
    for(let postName of filteredPostNames){
        retPosts[postName] = posts[postName];
    }
    return retPosts;
}
 
class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentLang: null,
            showSpoiler: false,
            xLoad: false
        }
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.params.id !== this.props.params.id){
            this.changeImg(true);
        }
    }

    changeImg = (render=false) => {
        this.setState({ showSpoiler: false }, () => {
            if(render) {
                this.render();
            }
        });
    }

    render() {
        let urlSplit = window.location.href.split('#')[1].split("/");
        let id = urlSplit.pop();
        let list_ = list;
        let series = urlSplit[urlSplit.length - 1];
        if(Object.keys(seriesList).includes(series)){
            if(series === "progremon"){
                list_ = filterPosts(list, series, { "name": null, "date": null, "description": [], size: "2000x2000" }, "progremon_0");
            }
            else if(series === "sinegrita"){
                list_ = filterPosts(list, series, { "name": null, "date": null, "description": [], size: "2000x2000" }, "sinegrita_0");
            }
            else {
                list_ = filterPosts(list, series);
            }
        }
        let post = list_[id];
        if(post === undefined) {
            setTimeout(() => this.props.navigate('/web/404', {replace: true}));
            return;
        }
        let size = post.size ? post.size.split("x") : null;
        let postSeries = (post.series ? post.series : []).filter((s) => s !== series);
        let postCelebrities = (post.celebrities ? post.celebrities : []);
        let date = post.date != null ? formatDate(new Date(post.date)): null;
        let currentUrl = urlSplit.join("/");
        urlSplit.pop();
        let parentUrl = urlSplit.join("/");
        let lang = "";
        let description = post.description;
        if(post.lang && this.state.currentLang !== null && this.state.currentLang !== post.lang.default) {
            lang = `.${this.state.currentLang}`;
            if(post.i18n !== undefined){
                description = post.i18n[this.state.currentLang];
            }
        }
        return (
            <div className="post-img-container">
                { series === "smash" &&
                    <Roster {...this.props} changeImg={this.changeImg} url={currentUrl}/>
                }
                {
                    !post.url &&
                    <Image key={id} size={size} imageUrl={`../../img/comic/${id}${lang}${this.state.showSpoiler === false && post.spoiler ? '.spoiler' : ''}.png`}/>
                }
                {
                    this.state.showSpoiler === false && post.spoiler &&
                    <div className='spoiler-button' onClick={() => {
                        this.setState({showSpoiler: true})
                    }}>
                        Mostrar spoiler
                    </div>
                }
                {
                    post.url &&
                    <div className="video">
                        <iframe
                            width="560"
                            height="315"
                            src={post.url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                }
                { series !== "smash" &&
                    <PostNavigator currentId={id} list={Object.keys(list_)} url={currentUrl} changeImg={this.changeImg}/>
                }
                <div>
                    <p className="name">
                        {post.name}
                        {
                            JSON.parse(window.localStorage.getItem("xButton")) && post.date &&
                            <>
                                &nbsp;
                                <a className='x-button' target="_blank" rel="noopener noreferrer" href={`https://x.com/search?q=from%3Aprogredemente%20until%3A${getNextDayForX(new Date(post.date))}&src=typed_query&f=live`}>
                                    <Loading
                                        hidden={this.state.xLoad}
                                    />
                                    <img
                                        src={`/img/social/x.png`}
                                        alt={"X"}
                                        className={this.state.xLoad ? "" : " hidden"}
                                        onLoad={ () => {
                                            this.setState({ xLoad: true })
                                        }}
                                    />
                                </a>
                            </>
                        }
                    </p>
                    <p className="date">{date}</p>
                    {
                        post.lang &&
                        <Language currentLang={this.state.currentLang} langs={post.lang} change={(lang) => {
                            this.setState({currentLang: lang})
                        }}/>
                    }
                    {description.map((text, index) => {
                        return <RichText key={index} text={text}/>
                    })}
                    { postSeries.length > 0 &&
                        <div className="series-list">En la{postSeries.length > 1 ? "s" : ""} serie{postSeries.length > 1 ? "s" : ""}: {postSeries.map((s) => {
                            return(
                                <Link to={`${parentUrl}/${s}`} key={s}>
                                    <Banner id={s} alt={seriesList[s]} key={`series-link-${s}`} />
                                </Link>
                            ) 

                        })}</div>
                    }
                    { postCelebrities.length > 0 &&
                        <div className="celebrity-list">Personaje{postCelebrities.length > 1 ? "s" : ""}: {postCelebrities.map((c, i) => {
                            return <Link to={`${parentUrl}/personaje/${c}`} key={c}>{c}</Link>
                        })}</div>
                    }
                    {
                        post.contest &&
                        <>
                        <span className="contest-banner"><Icon icon="🏆"/>&nbsp;CONCURSO&nbsp;<Icon icon="🏆"/></span>
                        {
                            post.contest !== true &&
                            <>
                            {
                                post.contest === "--unclaimed" &&
                                <p>Alguien ha ganado el concurso, pero no ha reclamado el premio todavía.</p>
                            }
                            {
                                post.contest === "--in-process" &&
                                <p>Alguien ha ganado el concurso, el premio está en proceso.</p>
                            }
                            {
                                post.contest !== "--unclaimed" && post.contest !== "--in-process" &&
                                <>
                                    <p>Alguien ha ganado el concurso. Este es el premio recibido:</p>
                                    <Thumbnail
                                        post={{
                                            id: post.contest,
                                            name: list[post.contest].name,
                                            date: new Date(list[post.contest].date)
                                        }}
                                    />
                                </>
                            }
                            </>
                        }
                        {
                            post.contest === true &&
                            <p>Sigue las instrucciones de la descripción para ganar un premio. Para saber cómo participar, ve a la sección <Link to="../concursos">concursos</Link>.</p>
                        }
                        </>
                    }
                </div>
            </div>
        );
    }
}
 
export default withNavigate(withParams(Post));