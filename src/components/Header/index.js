import React from 'react';

import html from 'src/assets/img/html.png';
import css from 'src/assets/img/css.png';
import js from 'src/assets/img/js.png';
import react from 'src/assets/img/react.png';

import Keyboard from '../Keyboard';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header_title">The Dev<strong className="header_title-detail"> ' </strong>Republic</h1>
    <section>
      <Keyboard />
    </section>
    <div className="insert_img">
      <img src={html} alt="logo HTML" />
      <img src={css} alt="logo CSS" />
      <img src={js} alt="logo JS" />
      <img src={react} alt="logo Reactjs" />
    </div>
  </div>

);

export default Header;
