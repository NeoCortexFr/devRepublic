// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Import local
import Header from 'src/components/Header';
// import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import Nav from 'src/components/Nav';
import Accueil from 'src/components/Accueil';
import Blog from 'src/components/Blog';
import Cv from 'src/components/Cv';
import Tech from 'src/components/Tech';
import Tutos from 'src/components/Tutos';
import Css from 'src/components/Css';
import Web from 'src/components/Web';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/"><Accueil /></Route>
        <Route path="/css"><Css /></Route>
        <Route path="/tutos"><Tutos /></Route>
        <Route path="/web-tech"><Tech /></Route>
        <Route path="/cv-bien-oui-merci"><Cv /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/mes-realisations-web" component={Web} />
      </Switch>
    </Router>
    <Footer />

  </div>
);

// == Export
export default App;
