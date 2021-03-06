import React from 'react';

import './css.scss';

const Css = () => (
  <div className="css">
    <div className="css_content">
      <h2 className="css_content-title">Exemple de CSS</h2>
      <p className="lienCss">
        Plein d'exemple CSS sur le site de <a href="https://believemy.com/">Louis-Nicolas</a> alias BELIEVEMY.
      </p>
      <section className="css_content_exemple01">
        <div className="text-effect">
          <div className="neon" data-text="Developer'Squad">Developer'Squad</div>
          <div className="gradient" />
          <div className="spotlight" />
        </div>
        <a href="https://codepen.io/NeoCortexFr/pen/JjKQBeG" className="codePen">Voir le code sur Codepen.io</a>

      </section>
    </div>
  </div>
);

export default Css;
