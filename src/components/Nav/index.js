import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <div className="nav">
    <nav className="nav_list">
      <button type="button"><Link to="/">Accueil</Link></button>
      <button type="button"><Link to="/css">CSS</Link></button>
      <button type="button"><Link to="/tutos">Tutos</Link></button>
      <button type="button"><Link to="/web-tech">Autres Tech</Link></button>
      <button type="button"><Link to="/cv-bien-oui-merci">Mon cv</Link></button>
      <button type="button"><Link to="/blog">Blog</Link></button>
      <button type="button"><Link to="/mes-realisations-web">Web</Link></button>
    </nav>
  </div>
);

export default Nav;
