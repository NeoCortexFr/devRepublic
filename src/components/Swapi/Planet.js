/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './planet.scss';

const Planet = (
  {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    population,
    terrain,
  },
) => (
  <div className="article">
    <p>
      Nom de la planète: {name} <br />
      Période de rotation: {rotation_period} h.<br />
      Période orbitale: {orbital_period} jours.<br />
      Diamètre de la planète: {diameter} kms.<br />
      Climat sur la planète: {climate} <br />
      Gravité sur la planète: {gravity} <br />
      Population: {population} Habitants <br />
      Type de surface de la planète: {terrain}.
    </p>
  </div>
);

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
};

export default Planet;
