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
                date: date
            });
            return null;
        });
        for(let year in ret){
            ret[year].sort((a, b) => {
                return b.date - a.date
            });
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
                })
            }
            </>
        );
    }
}
 
export default Archive;