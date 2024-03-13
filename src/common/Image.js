import React, { Component } from 'react';
import './Image.css';
import Loading from './Loading.js';
 
class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: false,
        }
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.imageUrl !== this.props.imageUrl){
            this.changeImg(true);
        }
    }

    changeImg = (render=false) => {
        this.setState({ load: false }, () => {
            if(render) {
                this.render();
            }
        });
    }

    render() {
        return (
            <div className='image-container'>
                <div
                    className={ `loading-image ${this.state.load ? " hidden": ""}` }
                    style={{
                        "--width": `${this.props.size[0]}`, 
                        "--height": `${this.props.size[1]}`
                    }}
                >
                </div>
                <img className={`image${this.state.load ? "": " hidden"}`} src={this.props.imageUrl} alt={this.props.alt} onLoad={ () => {
                        this.setState({ load: true })
                } }/>
            </div>
        );
    }
}
 
export default Image;