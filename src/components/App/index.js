// == Import npm
import React from 'react';

// == Import
// import reactLogo from './react-logo.svg';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="app_flex">
      <Nav />
      <Page />
    </div>
    <Footer />
  </div>
);

// == Export
export default App;
