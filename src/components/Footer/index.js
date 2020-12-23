import React from 'react';

import './footer.scss';

const Footer = () => (
  <div className="footer">
    <ul className="footer_object">
      <li className="footer_object-title">
        <a href="#">Instagram</a>
      </li>
      <li className="footer_object-title">
        <a href="https://www.linkedin.com/in/sebastien-latouche-99a4b915b/">LinkedIn</a>
      </li>
      <li className="footer_object-title">
        <a href="https://github.com/NeoCortexFr?tab=repositories">GitHub</a>
      </li>
    </ul>
    <p className="footer_owner">
      &copy; 2021 by NeoCortexFr
    </p>
  </div>
);

export default Footer;
