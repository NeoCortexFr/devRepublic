import React from 'react';
import { Link, Route } from 'react-router-dom';

import Flexbox from 'src/components/Flexbox';

import './tutos.scss';

const Tutos = () => (
  <div className="tutos">
    <h2 className="tutos_h2">Tutoriaux</h2>
    <h3 className="tutos_h3">Welcome sur les tutos de Dev'Republic</h3>
    <div className="section">
      <nav className="tutos_nav">
        <ul>
          <li className="tutos_li"><Link to="/tutos/flexbox">FlexBox</Link></li>
          <li className="tutos_li"><Link to="/tutos/compteur">Compteur</Link></li>
        </ul>
      </nav>
      <article className="tutos_content">
        <Route path="/tutos/flexbox">
          <Flexbox />
        </Route>
      </article>
    </div>
  </div>
);
export default Tutos;
