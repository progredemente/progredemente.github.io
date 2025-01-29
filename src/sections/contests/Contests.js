import React, { Component } from 'react';
import list from '../../list.json';
import ThumbnailContainer from '../../common/ThumbnailContainer';
 
class Contests extends Component {
    render() {
        const contests = Object.keys(list).filter(k => list[k].contest).map(k => {
            let post = list[k];
            let date = new Date(post.date);
            return {
                id: k,
                name: post.name,
                date: date,
                contest: post.contest
            };
        }).reduce((a, v) => {
            if(v.contest === true){
                a.active.push(v);
            }
            else {
                a.ended.push(v);
            }
            return a;
        }, {active: [], ended: []});
        contests.active.sort((a, b) => {
            return b.date - a.date
        });
        contests.ended.sort((a, b) => {
            return b.date - a.date
        });
        console.log(contests);
        return (
            <>
                <h1 className="section-title">Concursos</h1>
                <p>¡Participa en los concursos!</p>
                <p>De vez en cuando iré sacando concursos en algunas de mis viñetas. Serán cosas que haya que adivinar.</p>
                <p>¿Cómo participar? Es simple:</p>
                <ol>
                    <li>Ve a alguna de las viñetas concurso y lee la descripción para saber como obtener la respuesta correcta.</li>
                    <li>Si crees que tienes la respuesta correcta, escríbeme un comentario con tu respuesta en el post de la viñeta en cualquiera de mis redes sociales.</li>
                </ol>
                <p>El premio es un dibujo hecho por mí en mi estilo habitual de lo que quieras, siempre y cuando sea algo publicable en redes sociales, ya que lo voy a publicar cuando lo termine. Puede ser una caricatura, tu personaje original, tu mascota u otra cosa que se te ocurra siempre y cuando sea solo un elemento; por ejemplo, si quieres que dibuje tus mascotas y tienes un perro, un gato y un pez, elige cual de ellas quieres que dibuje. Si quieres que dibuje varias cosas, tienes que ganar varios concursos.</p>
                <p>El ganador del concurso será la primera persona que me dé la respuesta correcta, indiferentemente de la red social donde lo haga. Si tienes la respuesta correcta pero alguien se te adelanta, mala suerte. Si ves que alguien ha puesto la respuesta correcta en Telegram, por ejemplo, y la pones tú después en otra red, como Instagram, por ejemplo, el ganador en este caso va a ser el que lo ha puesto en Telegram.</p>
                <h2 className="section-title">Concursos activos</h2>
                {
                    contests.active.length > 0 &&
                    <>
                        <p>Estos son los concursos en los que todavía puedes participar y ganar un premio.</p>
                        <ThumbnailContainer posts={contests.active}/>
                    </>
                }
                {
                    contests.active.length == 0 &&
                    <p>No hay concursos activos por el momento, pero no te preocupes, pronto habrá más.</p>
                }
                <h2 className="section-title">Concursos terminados</h2>
                <p>Estos son los concursos ya terminados, por si quieres echarles un ojo para saber cómo son.</p>
                <ThumbnailContainer posts={contests.ended}/>
            </>
        );
    }
}
 
export default Contests;