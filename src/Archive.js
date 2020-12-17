import React, { Component } from 'react';
import './Archive.css';
import list from './list.json';
import ArchiveYear from './ArchiveYear';
 
class Archive extends Component {

    listByYears = function() {
        let ret = {};
        Object.keys(list).map(function(key) {
            let post = list[key];
            let date = new Date(post.date);
            let year = date.getFullYear() + "";
            if(!(year in ret)){
                ret[year] = [];
            }
            ret[year].push({
                id: key,
                name: post.name,
                strDate: post.date
            });
            return null;
        });
        for(let year in ret){
            ret[year].reverse();
        }
        return ret;
    }

    render() {
        let listByYears = this.listByYears();
        return (
            <>
            <h1 className="section-title">Archivo</h1>
            {
                Object.keys(listByYears).sort().reverse().map((year, i) => {
                    return (
                        <ArchiveYear year={year} posts={listByYears[year]} show={i === 0} />
                    )
                    /*let show = i === 0 ? "show" : "";
                    return(
                        <div key={year} className={show}>
                            <h2 className="year" onClick={() => show === "show" ? "" : "show"}>{year} <span>&gt;</span></h2>
                            <div className="thumbnails">
                            {
                                listByYears[year].map((post) => {
                                    return (
                                        <Link to={`/post/${post.id}`} key={post.id}>
                                            <img
                                            src={require(`./img/thumbnails/${post.id}.png`)}
                                            alt={post.name}
                                            title={`${post.strDate} - ${post.name}`}/>
                                        </Link>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )*/
                })
            }
            </>
        );
    }
}
 
export default Archive;