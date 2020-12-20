import React from 'react';
import Typical from 'react-typical';

// import html from 'src/assets/img/html.png';
// import css from 'src/assets/img/css.png';
// import js from 'src/assets/img/js.png';
// import react from 'src/assets/img/react.png';

import Keyboard from '../Keyboard';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header_title">The Dev<strong className="header_title-detail"> ' </strong>Republic</h1>
    <section>
      <Keyboard />
    </section>
    <div className="message">
      <Typical
        steps={['Bienvenue sur mon site...', 1000, 'Séb, Développeur Front-end -- HTML5 CSS3 JavaScript ReactJs --', 1000]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  </div>

);

export default Header;

/*
<img src={html} alt="logo HTML" />
<img src={css} alt="logo CSS" />
<img src={js} alt="logo JS" />
<img src={react} alt="logo Reactjs" />
*/
