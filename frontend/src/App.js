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
      <div>
        <h1 class="night">David, desarrollador web full stack</h1>

          <ul className="lenguajes" id="lenguajes-1">
            <li>
              <img src={js96} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={react96} alt="Icono React"/>
            </li>
            <li>
              <img src={php96} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={laravel96} alt="Icono React"/>
            </li>
            <li>
              <img src={html96} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={css96} alt="Icono React"/>
            </li>
          </ul>

          <ul className="lenguajes" id="lenguajes-2">
            <li>
              <img src={github96_lang} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={git96} alt="Icono React"/>
            </li>
            <li>
              <img src={sql96} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={docker96} alt="Icono React"/>
            </li>
            <li>
              <img src={aws96} alt="Icono Javascript"/>
            </li>
            <li>
              <img src={firebase96} alt="Icono React"/>
            </li>
          </ul>


        <img src={imgPerfil} className="img-perfil" alt="imagen perfil" />
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
        <h1>Buenas tardes</h1>
      </main>
    </div>
  );
}

export default App;