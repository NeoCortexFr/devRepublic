import React from 'react';
import { Link, Route } from 'react-router-dom';

import Ubuntu from 'src/components/Ubuntu';
import Vscode from 'src/components/Vscode';

import './tech.scss';

const Tech = () => (
  <div className="tech">
    <h2 className="tech_h2">Ressources</h2>
    <h3 className="tech_h3">Welcome sur les ressources de Dev'Republic</h3>
    <div className="section">
      <nav className="tech_nav">
        <ul>
          <li className="tech_li"><Link to="/tech/ubuntu">Ubuntu</Link></li>
          <li className="tech_li"><Link to="/tech/vscode">VsCode</Link></li>
        </ul>
      </nav>
      <article className="tech_content">
        <Route path="/tech/ubuntu">
          <Ubuntu />
        </Route>
        <Route path="/tech/vscode">
          <Vscode />
        </Route>
      </article>
    </div>
  </div>
);
export default Tech;
