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

function MainPrincipalEnglish() {
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
        setStatus('Message sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(result.message || 'Error sending the message');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending the message');
    }
  };

  return (
    <main>
      <div className="contenedor-principal">
        <div>
          <h2 className="title">About Me</h2>
          <p className="text">
            I’m David, trained in a higher education qualification of web application development, with a passion for designing, creating, and programming complete web applications, from frontend to backend.
          </p>
          <p className="text">
            The main tools I use are JavaScript, React, Laravel, and PHP, as well as other resources like Git, Docker, AWS, or Firebase; I use all of these along a great attention to detail when handling markup and styling languages.
          </p>
          <p className="text">
            I’m currently working with <a href="https://dormisfera.com/" target="_blank" rel="noopener noreferrer" className="dormisfera-link">Dormisfera</a>, independently developing a custom and scalable landing page. I have a professional level of English and I consider myself organized, responsible, and attentive, and I’m drawn to artistic expression and its theoretical and stylistic foundations (color, balance, expression, variety, etc.).
          </p>
          <p className="text">
            My professional goal is to expand my portfolio while helping other companies achieve their goals, setting increasingly ambitious goals. It’s worth noting that my personal GitHub contains all the content from my degree, and if you want to learn more about my experience, below you can see detailed information about projects I’ve completed.
          </p>
          <p className="text">
            Feel free to contact me for any questions or proposals.
          </p>
        </div>

        <div id="form-div">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <p>Doubts, inquiries, or offers? This is the place:</p>

            <div className="field">
              <label htmlFor="name">Name or Company</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit">Send →</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>

      <hr className="footer-line"/>

      {/* Project 1 */}
      <div className="contenedor-principal">
        <div className="proyecto">
          <h2 className="title">
            <a href="https://github.com/Kaladin000/Keep-Games-Alive#user-content-keep-games-alive---david-garc%C3%ADa-valero" target="_blank" rel="noopener noreferrer">
              Keep Games Alive
            </a>
          </h2>
          <p className="text">
            I created this web application to store the video games a person experiences in a chronological, organized way, structured by months and years.
          </p>
          <p className="text">
            Developed in React with JavaScript, hosted on Firebase, storing data in Firestore; it uses a massive game database, the IGDB (Internet Game Database) API.
          </p>
          <p className="text">
            It allows login and registration for individual accounts, as well as creating, reading, updating, and deleting games linked to each account.
          </p>
          <p className="text">
            <a href="https://github.com/Kaladin000/Keep-Games-Alive#user-content-keep-games-alive---david-garc%C3%ADa-valero" target="_blank" rel="noopener noreferrer">
              More information
            </a>
          </p>
          <p className="text"><a href="https://keep-games-alive.web.app/" target="_blank" rel="noopener noreferrer">Website</a></p>
        </div>
        <div className="imagenes">
          <AgrandarImagen src={p1img1} className="img" alt="image 1, project 1"/>
          <AgrandarImagen src={p1img2} className="img" alt="image 2, project 1"/>
          <AgrandarImagen src={p1img3} className="img" alt="image 3, project 1"/>
          <AgrandarImagen src={p1img4} className="img" alt="image 4, project 1"/>
          <AgrandarImagen src={p1img5} className="img" alt="image 5, project 1"/>
        </div>
      </div>

      <hr className="footer-line"/>

      {/* Project 2 */}
      <div className="contenedor-principal">
        <div className="proyecto">
          <h2 className="title">
            <a href="https://github.com/Kaladin000/videojuegosLaravel#user-content-sistema-web-de-gesti%C3%B3n-de-videojuegos-laravel" target="_blank" rel="noopener noreferrer">
              Laravel Video Games API
            </a>
          </h2>
          <p className="text">
            This backend is an API that can handle requests, very similar to the previous project. Instead of storing by user, here the CRUD operates globally on a single API.
          </p>
          <p className="text">
            It follows a modular architecture with controllers, factories, and seeders, using real values (video game companies) in CSV format.
          </p>
          <p className="text">
            I use Requests to assign API access permissions, and it supports user authentication (via Bearer Tokens). The entire project uses PostgreSQL for data storage and manipulation.
          </p>
          <p className="text">
            <a href="https://github.com/Kaladin000/videojuegosLaravel#user-content-sistema-web-de-gesti%C3%B3n-de-videojuegos-laravel" target="_blank" rel="noopener noreferrer">
              More information
            </a>
          </p>
        </div>
        <div className="imagenes">
          <AgrandarImagen src={p2img4} className="img" alt="image 1, project 2"/>
          <AgrandarImagen src={p2img2} className="img" alt="image 2, project 2"/>
          <AgrandarImagen src={p2img3} className="img" alt="image 3, project 2"/>
          <AgrandarImagen src={p2img1} className="img" alt="image 4, project 2"/>
          <AgrandarImagen src={p2img5} className="img" alt="image 5, project 2"/>
          <AgrandarImagen src={p2img6} className="img" alt="image 6, project 2"/>
        </div>
      </div>
    </main>
  );
}

export default MainPrincipalEnglish;