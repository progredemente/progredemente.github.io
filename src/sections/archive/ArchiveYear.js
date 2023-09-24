import React, { Component } from 'react';
import './ArchiveYear.css';
import ThumbnailContainer from '../../common/ThumbnailContainer';
 
class ArchiveYear extends Component {

    render() {
        return (
            <div key={this.props.year} className={this.props.show ? "show" : ""}>
                <h2 className="collapser year" onClick={() => this.props.changeVisibility()}>{this.props.year} <span>&gt;</span></h2>
                { this.props.show && 
                    <ThumbnailContainer posts={this.props.posts}/>
                }
            </div>
        );
    }
}
 
export default ArchiveYear;