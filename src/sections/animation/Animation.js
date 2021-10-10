import React, { Component } from 'react';
import './Animation.css';
import alertaAntifascista from '../../video/alerta_antifascista_animado.mp4'
 
class Animation extends Component {
    render() {
        return (
            <>
            <video controls>
                <source src={alertaAntifascista} type="video/mp4"/>
            </video>
            <p className="name">Alerta antifascista</p>
            <p className="date">2020/04/20</p>
            <p>He animado una de mis primeras viñetas. Me ha llevado casi una semana hacer 17 segundos de vídeo, no se si habrá merecido la pena. No creo que vuelva a hacer otra animación.</p>
            </>
        );
    }
}
 
export default Animation;