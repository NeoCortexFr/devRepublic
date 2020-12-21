// == Import npm
import React from 'react';

// == Import local
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
