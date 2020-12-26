import React from 'react';

import './cv.scss';

const Cv = () => (
  <div className="cv">
    <h2 className="cv_title">Je crois que c'est ici que je parle de moi</h2>
    <h3 className="cv_title-moi">Je m'appelle Sébastien Latouche.</h3>
    <p className="cv_content">
      Je sors d'une formation de développeur web au sein de l'école <a href="https://oclock.io/">O'Clock</a>.
      J'ai commencé cette reconversion à l'age de 38 ans.
    </p>
    <p className="cv_content">
      Avant ça, je me suis cherché professionnellement. J'ai testé quelques boulot, qui font
      de moi le professionnel que je suis aujourd'hui.
    </p>
    <ul className="cv_liste">
      <li>Démonteur de pièces automobile, dans une casse auto.</li>
      <li>Conseiller de vente de pièces technique et prestations, dans l'automobile.</li>
      <li>Opérateur de service rapide dans l'automobile.</li>
      <li>Chauffeur Livreur.</li>
      <li>Câbleur électricien.</li>
      <li>Dépanneur électronique.</li>
      <li>Agent de maintenance électrique et pneumatique.</li>
    </ul>
    <p className="cv_content">
      Je vous l'accorde, il y a un peu de tout. Avec le code, pas grand chose à voir.
      Mais, et ça fait parti des recherches actuelles, des soft-skills intéressants.
    </p>
  </div>
);
export default Cv;
