import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './swapi.scss';
import Planet from './Planet';

const Swapi = () => {
  const [planets, setPlanets] = useState([]);
  const [hasError, setError] = useState(false);

  const getPromise = axios.get('https://swapi.dev/api/planets/');

  useEffect(() => {
    getPromise
      .then((response) => {
        setPlanets(response.data.results);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setError(true);
      })
      .finally(() => {

      });
  }, []);
  return (
    <div className="swapi">
      <h2 className="swapi_title">A Star Wars Api</h2>
      <p className="swapi_p">
        Un exercice basé sur l'API Star Wars dispo <a href="https://swapi.dev/">ici</a>.
      </p>
      {hasError && <h2 className="error">Une erreur est survenue lors de la connexion à l'API</h2>}
      {!hasError && (
      <div className="swapi_content">
        {planets.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}
      </div>
      )}
    </div>
  );
};

export default Swapi;
