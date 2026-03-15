import React from 'react';
import { useState } from 'react';
import AgrandarImagen from './AgrandarImagen';

import p1img1 from '../imgs/proyecto1/1.png';
import p1img2 from '../imgs/proyecto1/2.png';
import p1img3 from '../imgs/proyecto1/3.png';
import p1img4 from '../imgs/proyecto1/4.png';
import p1img5 from '../imgs/proyecto1/5.png';

import p2img1 from '../imgs/proyecto2/1.png';
import p2img2 from '../imgs/proyecto2/2.png';
import p2img3 from '../imgs/proyecto2/3.png';
import p2img4 from '../imgs/proyecto2/4.png';
import p2img5 from '../imgs/proyecto2/5.png';
import p2img6 from '../imgs/proyecto2/6.png';

function MainPrincipalCastellano() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };

    try {
      const response = await fetch('https://backend-web-portfolio-main-1guw23.free.laravel.cloud/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Mensaje enviado correctamente');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(result.message || 'Error enviando el mensaje');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error enviando el mensaje');
    }
  };

  return (
    <main>
      <div className="contenedor-principal"> 
        <div> 
          <h2 className="title">Sobre mí</h2> 
          <p className="text">Soy David, formado en el ciclo superior de desarrollo de aplicaciones web con pasión en el diseño, creación y programación de éstas de manera completa, desde el frontend hasta el backend.</p> 
          <p className="text">Las herramientas que principalmente uso son JavaScript, React, Laravel y PHP, así como otros recursos véase Git, Docker, AWS o Firebase; utilizo todas estas, junto a una gran atención al detalle a la hora de manipular los lenguajes de marcado y estilo.</p> <p className="text">Ahora mismo estoy trabajando con Dormisfera, realizando de manera autónoma una landing page personalizada y escalable. Tengo un nivel de Inglés profesional, me considero una persona organizada, responsable y atenta, así como me siento atraído hacia la expresión artística y sus fundamentos teóricos estilísticos (color, balance, expresión, variedad, etcétera).</p> 
          <p className="text">Mi objetivo profesional es aumentar portfolio a la vez que ayudo a otras empresas a ver sus objetivos logrados, para así tener metas cada vez más ambiciosas. Considero importante señalar que en mi GitHub personal guardo todo el contenido realizado en el grado y, si quieres conocer más de mi experiencia, abajo puedes ver los proyectos que he realizado detalladamente.</p> <p className="text">Siéntete libre de ponerte en contacto conmigo para cualquier posible pregunta o propuesta.</p> 
        </div>

        <div id="form-div">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1>Contacto</h1>
            <p>¿Dudas, consultas u ofertas?, este es el lugar: </p>

            <div className="field">
              <label htmlFor="name">Nombre o razón social</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Introduce tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Introduce tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Tu mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit">Enviar →</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>

      <hr className="footer-line"/>

      {/* Proyecto 1 */}
      <div className="contenedor-principal">
        <div className="proyecto">
          <h2 className="title"><a href="https://github.com/Kaladin000/Keep-Games-Alive#user-content-keep-games-alive---david-garc%C3%ADa-valero" target="_blank" rel="noopener noreferrer">Keep Games Alive</a></h2>
          <p className="text">Hice esta aplicación web con el objetivo de almacenar los videojuegos que una persona experimentase, y tuviese un orden cronológico, ordenado, estructurado en meses y años.</p>
          <p className="text">Desarrollada en React con JavaScript, hosteada con Firebase y guardando los datos en Firestore; utiliza una base de datos inmensa de juegos, la API de IGDB (Internet Game Database).</p>
          <p className="text">Permite inicio de sesión y registro para cuentas individuales, así como la creación, lectura, actualización y borrado de videojuegos enlazados a cada una de ellas.</p>
          <p className="text"><a href="https://github.com/Kaladin000/Keep-Games-Alive#user-content-keep-games-alive---david-garc%C3%ADa-valero" target="_blank" rel="noopener noreferrer">Más información</a></p>
          <p className="text"><a href="https://keep-games-alive.web.app/" target="_blank" rel="noopener noreferrer">Sitio web</a></p>
        </div>
        <div className="imagenes">
          <AgrandarImagen src={p1img1} className="img" alt="imagen 1, proyecto 1"/>
          <AgrandarImagen src={p1img2} className="img" alt="imagen 2, proyecto 1"/>
          <AgrandarImagen src={p1img3} className="img" alt="imagen 3, proyecto 1"/>
          <AgrandarImagen src={p1img4} className="img" alt="imagen 4, proyecto 1"/>
          <AgrandarImagen src={p1img5} className="img" alt="imagen 5, proyecto 1"/>
        </div>
      </div>

      <hr className="footer-line"/>

      {/* Proyecto 2 */}
      <div className="contenedor-principal">
        <div className="proyecto">
          <h2 className="title"><a href="https://github.com/Kaladin000/videojuegosLaravel#user-content-sistema-web-de-gesti%C3%B3n-de-videojuegos-laravel" target="_blank" rel="noopener noreferrer">API Videojuegos Laravel</a></h2>
          <p className="text">
            Este backend es una API a la cual se le pueden hacer peticiones, muy parecido al anterior proyecto. En vez de guardar por usuario, aquí hago el CRUD globalmente en una única API.</p>
          <p className="text">Sigue la arquitectura de módulos y controladores, factorías y seeders y usa valores reales (empresas de videojuegos) en formato csv.</p>
          <p className="text">Utilizo Requests para asignar permisos de uso de la api y soporta autenticación de usuarios (mediante Bearer Tokens). Todo este proyecto utiliza Postgre para el almacenamiento y manipulación de datos.</p>
          <p className="text"><a href="https://github.com/Kaladin000/videojuegosLaravel#user-content-sistema-web-de-gesti%C3%B3n-de-videojuegos-laravel" target="_blank" rel="noopener noreferrer">Más información</a></p>
        </div>
        <div className="imagenes">
          <AgrandarImagen src={p2img4} className="img" alt="imagen 1, proyecto 2"/>
          <AgrandarImagen src={p2img2} className="img" alt="imagen 2, proyecto 2"/>
          <AgrandarImagen src={p2img3} className="img" alt="imagen 3, proyecto 2"/>
          <AgrandarImagen src={p2img1} className="img" alt="imagen 4, proyecto 2"/>
          <AgrandarImagen src={p2img5} className="img" alt="imagen 5, proyecto 2"/>
          <AgrandarImagen src={p2img6} className="img" alt="imagen 6, proyecto 2"/>
        </div>
      </div>
    </main>
  );
}

export default MainPrincipalCastellano;