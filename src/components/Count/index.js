import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './count.scss';

const Count = () => {
  // eslint-disable-next-line prefer-const
  let [count, setCount] = useState(0);
  return (
    <div className="count">
      <h2 className="count_title">Le compteur de click</h2>
      <p className="count_content">
        Vous avez cliquez {count} fois.
      </p>
      <p className="count_buttons">
        <button type="button" className="count_button" onClick={() => setCount(count + 1)}>CLiquez ici !</button>
        {/* eslint-disable-next-line no-return-assign */}
        <button type="button" className="count_button" onClick={() => setCount(count = 0)}>Réinitialiser...</button>
      </p>
      <p className="count_state">
        Ici, j'utilise le hook "useState" pour définir l'état initial du compteur,
        que j'initialise à 0.
        Sur le bouton de comptage, j'utilise une fonction fléchée sur le "onClick",
        où j'ajoute "+ 1".
        Sur le bouton "Réinitialiser...", je donne une valeur de 0 à count.
      </p>
      <p className="count_state">
        Vous pouvez aller voir le code dans la partie <Link to="/tutos/compteur">Tutos</Link>
      </p>

    </div>
  );
};

export default Count;
