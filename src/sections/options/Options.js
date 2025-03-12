import React, { Component } from 'react';
import Loading from '../../common/Loading';
import './Options.css';
 
class Options extends Component {

    constructor(props){
        super(props);
        this.state = {
            xLoad: false,
            xButton: JSON.parse(window.localStorage.getItem("xButton")) || false
        }
    }

    render() {
        return (
            <div className="options">
                <h1 className="section-title">Opciones</h1>
                <p>Buscar en &nbsp;
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
                        <span
                            className='options-btn'
                            onClick={() => {
                                window.localStorage.setItem("xButton", !this.state.xButton);
                                this.setState({xButton: !this.state.xButton});
                            }}
                        >
                            {
                                !this.state.xButton && <>Activar</>
                            }
                            {
                                this.state.xButton && <>Desactivar</>
                            }
                        </span>
                </p>
            </div>
        );
    }
}
 
export default Options;