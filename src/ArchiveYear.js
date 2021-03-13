import React, { Component } from 'react';
import './ArchiveYear.css';
import Thumbnail from './Thumbnail';
 
class ArchiveYear extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: props.show
        }
    }

    render() {
        return (
            <div key={this.props.year} className={this.state.show ? "show" : ""}>
                <h2 className="collapser year" onClick={() => this.setState({show:!this.state.show})}>{this.props.year} <span>&gt;</span></h2>
                { this.state.show && 
                    <div className="thumbnails">
                    {
                        this.props.posts.map((post) => {
                            return (
                                <Thumbnail post={post} />
                            )
                        })
                    }
                    </div>
                }
            </div>
        );
    }
}
 
export default ArchiveYear;