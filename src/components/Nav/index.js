import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <div className="nav">
    <button type="button"><Link to="/">Accueil</Link></button>
    <button type="button"><Link to="realisations">Réalisations Web</Link></button>
    <button type="button"><Link to="css">CSS</Link></button>
    <button type="button"><Link to="/tutos">Tutos</Link></button>
    <button type="button"><Link to="autres">Autres Tech</Link></button>
    <button type="button"><Link to="cv-bien-merci">Mon cv</Link></button>
    <button type="button"><Link to="blog">Blog</Link></button>
  </div>
);

export default Nav;
