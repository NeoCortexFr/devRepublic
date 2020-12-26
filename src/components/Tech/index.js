import React from 'react';
import { Link, Route } from 'react-router-dom';

import Ubuntu from 'src/components/Ubuntu';

import './tech.scss';

const Tech = () => (
  <div className="tech">
    <h2 className="tech_h2">Technology</h2>
    <h3 className="tech_h3">Welcome sur les ressources de Dev'Republic</h3>
    <div className="section">
      <nav className="tech_nav">
        <ul>
          <li className="tech_li"><Link to="/tech/ubuntu">Ubuntu</Link></li>
          <li className="tech_li">Titre 2</li>
        </ul>
      </nav>
      <article className="tech_content">
        <Route path="/tech/ubuntu">
          <Ubuntu />
        </Route>
      </article>
    </div>
  </div>
);
export default Tech;
