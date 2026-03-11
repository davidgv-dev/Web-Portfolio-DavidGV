import imgPerfil from './imgs/imgPerfil.jpeg';
import whatsapp48 from './imgs/whatsapp-logo-48.png';
import whatsapp96 from './imgs/whatsapp-96.png';
import email48 from './imgs/email-48.png';
import email96 from './imgs/mail-96.png';
import linkedin48 from './imgs/linkedin-48.png';
import linkedin96 from './imgs/linkedin-96.png';
import github48 from './imgs/github-48.png';
import github96 from './imgs/github-96.png';

import react96 from './imgs/lenguajes/react-96.png';
import github96_lang from './imgs/lenguajes/github-96.png';
import html96 from './imgs/lenguajes/html-96.png';
import css96 from './imgs/lenguajes/css-96.png';
import php96 from './imgs/lenguajes/php-96.png';
import js96 from './imgs/lenguajes/js-96.png';
import firebase96 from './imgs/lenguajes/firebase-96.png';
import aws96 from './imgs/lenguajes/aws-96.png';
import git96 from './imgs/lenguajes/git-96.png';
import docker96 from './imgs/lenguajes/docker-96.png';
import laravel96 from './imgs/lenguajes/laravel-96.png';
import sql96 from './imgs/lenguajes/sql-96.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="perfil">
        <h1 class="header-david-bigscreen">David, desarrollador web full stack</h1>
        

          <ul className="lenguajes" id="lenguajes-1">
            <li>
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <img src={js96} alt="Icono Javascript"/>
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img src={react96} alt="Icono React"/>
              </a>
            </li>
            <li>
              <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                <img src={php96} alt="Icono PHP"/>
              </a>
            </li>
            <li>
              <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
                <img src={laravel96} alt="Icono Laravel"/>
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <img src={html96} alt="Icono HTML"/>
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <img src={css96} alt="Icono CSS"/>
              </a>
            </li>
          </ul>

          <ul className="lenguajes" id="lenguajes-2">
            <li>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={github96_lang} alt="Icono GitHub"/>
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <img src={git96} alt="Icono Git"/>
              </a>
            </li>
            <li>
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                <img src={sql96} alt="Icono SQL"/>
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                <img src={docker96} alt="Icono Docker"/>
              </a>
            </li>
            <li>
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                <img src={aws96} alt="Icono AWS"/>
              </a>
            </li>
            <li>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={firebase96} alt="Icono Firebase"/>
              </a>
            </li>
          </ul>
          


        <img src={imgPerfil} className="img-perfil" alt="imagen perfil" />
        <h1 class="header-david">David, desarrollador web full stack</h1>
      </div>
      

      <header className="App-header">

        

        <div className="redes-div">
          <ul className="redes">

            <li>
              <a href="https://github.com/Kaladin000" target="_blank" rel="noopener noreferrer">
                <img 
                  src={github48}
                  srcSet={`${github48} 48w, ${github96} 96w`}
                  sizes="(min-width: 768px) 96px, 48px"
                  className="img-redes"
                  alt="Icono GitHub"
                />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/david-garc%C3%ADa-valero-64889520a/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={linkedin48}
                  srcSet={`${linkedin48} 48w, ${linkedin96} 96w`}
                  sizes="(min-width: 768px) 96px, 48px"
                  className="img-redes"
                  alt="Icono LinkedIn"
                />
              </a>
            </li>

            <li>
              <a href="mailto:davidgarciavalero@gmail.com">
                <img 
                  src={email48}
                  srcSet={`${email48} 48w, ${email96} 96w`}
                  sizes="(min-width: 768px) 96px, 48px"
                  className="img-redes"
                  alt="Icono Email"
                />
              </a>
            </li>

            <li>
              <a href="https://wa.me/34688705410?text=Hola%20David,%20%20tengo%20la%20siguiente%20propuesta:" target="_blank" rel="noopener noreferrer">
                <img 
                  src={whatsapp48}
                  srcSet={`${whatsapp48} 48w, ${whatsapp96} 96w`}
                  sizes="(min-width: 768px) 96px, 48px"
                  className="img-redes"
                  alt="Icono WhatsApp"
                />
              </a>
            </li>
            

          </ul>


          
        </div>

        

      </header>

      <main>
        <div id="contenedor-principal">
          <div>

            <h2 class="about-title">Sobre mí</h2>

            <p class="about-text">
              Soy David, formado en el ciclo superior de desarrollo
              de aplicaciones web con pasión en el diseño, creación
              y programación de éstas de manera completa, desde el 
              frontend hasta el backend.
            </p>

            <p class="about-text">
              Las herramientas que principalmente uso son JavaScript,
              React, Laravel y PHP, así como otros recursos véase 
              Git, Docker, AWS o Firebase; utilizo todas estas, junto
               a una gran atención al detalle a la hora de manipular 
               los lenguajes de marcado y estilo.
            </p>

            <p class="about-text">
              Ahora mismo estoy trabajando con Dormisfera, realizando
              de manera autónoma una landing page personalizada y escalable.
              Tengo un nivel de Inglés profesional, me considero una 
              persona organizada, responsable y atenta, así como me 
              siento atraído hacia la expresión artística y sus 
              fundamentos teóricos estilísticos (color, balance, expresión, 
              variedad, etcétera).
            </p>

            <p class="about-text">
              Mi objetivo profesional es aumentar portfolio a la vez
              que ayudo a otras empresas a ver sus objetivos logrados,
              para así tener metas cada vez más ambiciosas. 
              Considero importante señalar que en mi GitHub personal 
              guardo todo el contenido realizado en el grado y, si 
              quieres conocer más de mi experiencia, abajo puedes ver
              los proyectos que he realizado detalladamente.
            </p>

            <p class="about-text">
              Siéntete libre de ponerte en contacto conmigo para
              cualquier posible pregunta o propuesta.
            </p>

          </div>
          <div id="form-div">

            <form class="contact-form">
              <h1>Contacto</h1>
              <p>¿Dudas, consultas u ofertas?, este es el lugar: </p>

              <div class="field">

                <label for="name">Nombre o razón social</label>
                <input type="text" id="name" name="name" placeholder="Introduce tu nombre"></input>

              </div>

              <div class="field">

                <label for="email">Correo electrónico</label>
                <input type="email" id="email" name="email" placeholder="Introduce tu correo"></input>

              </div>

              <div class="field">

                <label for="message">Tu mensaje</label>
                <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí"></textarea>

              </div>

              <button type="submit">Enviar →</button>
            </form>

          </div>
        </div>

        <hr class="footer-line"></hr>


      </main>
    </div>
  );
}

export default App;