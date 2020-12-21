import React from 'react';
import Typical from 'react-typical';

import Keyboard from '../Keyboard';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header_title">The Dev<strong className="header_title-detail"> ' </strong>Republic</h1>
    <section>
      <Keyboard />
    </section>
    <section className="message">
      <Typical
        steps={['Bienvenue sur mon site...', 1000, 'Séb, Développeur Front-end -- HTML5 CSS3 JavaScript ReactJs --', 1000]}
        loop={Infinity}
        wrapper="p"
      />
    </section>
  </div>

);

export default Header;
