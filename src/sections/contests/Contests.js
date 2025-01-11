import React, { Component } from 'react';
 
class Contests extends Component {
    render() {
        return (
            <>
                <h1 className="section-title">Concursos</h1>
                <p>Participa en alguno de los concursos activos.</p>
                <p>Funcionamiento:</p>
                <ol>
                    <li>Ve a alguna de las viñetas que tienen un concurso y lee la descripción de la viñeta para saber como obtener la respuesta correcta.</li>
                    <li>Si crees que tienes la respuesta correcta, escríbeme un comentario con tu respuesta en el post de la viñeta en cualquiera de mis redes sociales.</li>
                </ol>
                <p>El premio es un dibujo hecho por mí, en mi estilo habitual, de lo que quieras, siempre y cuando sea algo publicable en redes sociales, ya que lo voy a publicar cuando lo termine. Puede ser una caricatura, tu personaje original, tu mascota u otra cosa que se te ocurra siempre y cuando sea solo un elemento; por ejemplo, si quieres que dibuje tus mascotas y tienes un perro, un gato y un pez, elige cual de ellas quieres que dibuje. Si quieres que dibuje varias cosas, tienes que ganar varios concursos.</p>
                <p>El ganador del concurso será la primera persona que me dé la respuesta correcta, indiferentemente de la red social donde lo haga. Si tienes la respuesta correcta pero alguien se te adelanta, mala suerte. Si ves que alguien ha puesto la respuesta correcta en Telegram, por ejemplo, y la pones tú después en otra red, como Instagram, por ejemplo, el ganador en este caso va a ser el que lo ha puesto en Telegram.</p>
                {/*<h2 className="section-title">Concursos activos</h2>*/}
            </>
        );
    }
}
 
export default Contests;