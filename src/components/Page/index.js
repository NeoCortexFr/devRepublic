import React from 'react';

import Nav from 'src/components/Nav';
import Para from 'src/components/Para';
import Accueil from 'src/components/Accueil';
import Blog from 'src/components/Blog';
import Cv from 'src/components/Cv';
import Tech from 'src/components/Tech';
import Tutos from 'src/components/Tutos';
import Css from 'src/components/Css';
import Web from 'src/components/Web';

import './page.scss';

const Page = () => (
  <div className="page">
    <Nav />
    <Para /><br />
    <Accueil /><br />
    <Blog /><br />
    <Css /><br />
    <Cv /><br />
    <Tech /><br />
    <Tutos /><br />
    <Web /><br />
  </div>
);

export default Page;
