import React, { Component } from 'react';
import Image from '../../common/Image';
import { Link } from 'react-router-dom';
import './NotFound.css';
 
class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }
    render() {
        return (
            <div className='not-found'>
                <Image size={[2000, 2000]} imageUrl={`../../img/404.png`} />
                <Link to={"/web"} >
                    <div className='return-home'>Volver al inicio</div>
                </Link>
            </div>
        );
    }
}
 
export default NotFound;