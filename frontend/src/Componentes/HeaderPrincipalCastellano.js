import { useEffect } from 'react';
import imgPerfil from '../imgs/imgPerfil.jpeg';
import react96 from '../imgs/lenguajes/react-96.png';
import github96_lang from '../imgs/lenguajes/github-96.png';
import html96 from '../imgs/lenguajes/html-96.png';
import css96 from '../imgs/lenguajes/css-96.png';
import php96 from '../imgs/lenguajes/php-96.png';
import js96 from '../imgs/lenguajes/js-96.png';
import laravel96 from '../imgs/lenguajes/laravel-96.png';
import git96 from '../imgs/lenguajes/git-96.png';
import docker96 from '../imgs/lenguajes/docker-96.png';
import aws96 from '../imgs/lenguajes/aws-96.png';
import firebase96 from '../imgs/lenguajes/firebase-96.png';
import sql96 from '../imgs/lenguajes/sql-96.png';

import github48 from '../imgs/github-48.png';
import github96 from '../imgs/github-96.png';
import linkedin48 from '../imgs/linkedin-48.png';
import linkedin96 from '../imgs/linkedin-96.png';
import email48 from '../imgs/email-48.png';
import email96 from '../imgs/mail-96.png';
import whatsapp48 from '../imgs/whatsapp-logo-48.png';
import whatsapp96 from '../imgs/whatsapp-96.png';

import anime from 'animejs';

function HeaderPrincipalCastellano({toggleLanguage}) {

    // AnimeJS animation
    useEffect(() => {
        const timer = setTimeout(() => {
            // Detect which version is visible (mobile or desktop)
            const elementBig = document.querySelector('.header-david-bigscreen');
            const elementMobile = document.querySelector('.header-david');
            const isMobile = window.getComputedStyle(elementMobile).visibility !== 'hidden';

            if (isMobile && elementMobile) {
                // Mobile animation only
                const text = elementMobile.textContent;
                elementMobile.innerHTML = text
                    .split('')
                    .map((char) => `<span style="opacity: 0;">${char}</span>`)
                    .join('');

                const timeline = anime.timeline({ defaults: { duration: 650, easing: 'easeInOutQuad' } });
                timeline
                    .add({
                        targets: '.header-david span',
                        opacity: [0, 1],
                        delay: anime.stagger(40),
                    }, 0)
                    .add({
                        targets: '#lenguajes-1, #lenguajes-2',
                        opacity: [0, 1],
                        duration: 10500,
                    }, 100);
            } else if (!isMobile && elementBig) {
                // Desktop animation only
                const text = elementBig.textContent;
                elementBig.innerHTML = text
                    .split('')
                    .map((char) => `<span style="opacity: 0;">${char}</span>`)
                    .join('');

                const timeline = anime.timeline({ defaults: { duration: 650, easing: 'easeInOutQuad' } });
                timeline
                    .add({
                        targets: '.header-david-bigscreen span',
                        opacity: [0, 1],
                        delay: anime.stagger(40),
                    }, 0)
                    .add({
                        targets: '#lenguajes-1, #lenguajes-2',
                        opacity: [0, 1],
                        duration: 10500,
                    }, 100);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, []);

  return (

    <>
        
        <div className="perfil">
            <div id="text-split">
                <h1 className="header-david-bigscreen">David, desarrollador web full stack</h1>
            </div>

            <ul className="lenguajes" id="lenguajes-1">
            <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src={js96} alt="Icono Javascript"/></a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><img src={react96} alt="Icono React"/></a></li>
            <li><a href="https://www.php.net/" target="_blank" rel="noopener noreferrer"><img src={php96} alt="Icono PHP"/></a></li>
            <li><a href="https://laravel.com/" target="_blank" rel="noopener noreferrer"><img src={laravel96} alt="Icono Laravel"/></a></li>
            <li><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><img src={html96} alt="Icono HTML"/></a></li>
            <li><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src={css96} alt="Icono CSS"/></a></li>
            </ul>

            <ul className="lenguajes" id="lenguajes-2">
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src={github96_lang} alt="Icono GitHub"/></a></li>
            <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src={git96} alt="Icono Git"/></a></li>
            <li><a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src={sql96} alt="Icono SQL"/></a></li>
            <li><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><img src={docker96} alt="Icono Docker"/></a></li>
            <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><img src={aws96} alt="Icono AWS"/></a></li>
            <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img src={firebase96} alt="Icono Firebase"/></a></li>
            </ul>

            <img src={imgPerfil} className="img-perfil" alt="imagen perfil" />
            <div id="text-split-mobile">
                <h1 className="header-david">David, desarrollador web full stack</h1>
            </div>
        </div>

        <header className="App-header">
            <div className="redes-div">
            <ul className="redes">
                <li><a href="https://github.com/davidgv-dev" target="_blank" rel="noopener noreferrer"><img src={github48} srcSet={`${github48} 48w, ${github96} 96w`} sizes="(min-width: 768px) 96px, 48px" className="img-redes" alt="Icono GitHub"/></a></li>
                <li><a href="https://www.linkedin.com/in/david-garc%C3%ADa-valero-64889520a/" target="_blank" rel="noopener noreferrer"><img src={linkedin48} srcSet={`${linkedin48} 48w, ${linkedin96} 96w`} sizes="(min-width: 768px) 96px, 48px" className="img-redes" alt="Icono LinkedIn"/></a></li>
                <li><a href="mailto:davidgarciavalero@gmail.com"><img src={email48} srcSet={`${email48} 48w, ${email96} 96w`} sizes="(min-width: 768px) 96px, 48px" className="img-redes" alt="Icono Email"/></a></li>
                <li><a href="https://wa.me/34688705410?text=Hola%20David,%20%20tengo%20la%20siguiente%20propuesta:" target="_blank" rel="noopener noreferrer"><img src={whatsapp48} srcSet={`${whatsapp48} 48w, ${whatsapp96} 96w`} sizes="(min-width: 768px) 96px, 48px" className="img-redes" alt="Icono WhatsApp"/></a></li>
            </ul>
            </div>
            <div>
                <button 
                    onClick={toggleLanguage} 
                    className="btn-language-toggle"
                    >
                    Spanish
                </button>
            </div>

        </header>

    </>
  );
}

export default HeaderPrincipalCastellano;