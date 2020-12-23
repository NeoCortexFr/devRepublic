import React from 'react';
import { Link } from 'react-router-dom';

import './accueil.scss';

const Accueil = () => (
  <div className="accueil">
    <h2 className="accueil_title">Welcome !</h2>
    <article className="accueil_content">
      <em>Pourquoi le web ?</em>
      <p>
        Et surtout, Pourquoi le dév front....
        Très simple ! J'ai suivi une formation 3dsmax au CGI Training d'Hornu.
        Et le visuel compte plus à mes yeux que les databases.
        Bien sûr, c'est nécessaire, mais ce côté artistique à renforcé
        mon envie de me tourner vers le Front.
        Et on ajoute l'intéractivité, et me voilà du côté <em className="span">obscur</em> front-end
        du développement web.
      </p>
      <p>
        J'ai commencé il y a plusieurs années maintenant.
        Comme à peu près tout le monde, j'ai suivi les tutos du site du zéro (dédicace à Zozor),
        devenu maintenant <a href="https://openclassrooms.com/fr/">OpenClassRooms</a>, qui
        reste encore aujourd'hui, après 20 ans, <em className="la">LA</em> référence pour toutes celles et ceux qui souhaite
        découvrir la programmation (mais pas que...).
      </p>
      <p>
        Puis sont arrivés des rencontres, des projets, et je me suis replonger dans le code.
        Html5, css3, un peu de JavaScript.
        Tout ça en me demandant si cette passion remise au goût du jour ne pourrait pas devenir
        mon nouveau métier.
      </p>
      <p>
        Alors je me promène sur Google, je regarde de loin, de près. Et pour une fois, je m'attarde
        sur la pub personnalisée. Ca parle financement, transition pro, loi de 2019 sur la
        reconversion, CPF... Bref, un vrai parcours du combattant !
      </p>
      <p>
        Mais il faut trouver l'école, le bootcamp, un mentor...
        Et Je tombe sur un ovni, où, dès les premières lignes lues, on se sent comme à la maison.
        Comme si j'parlais à un pote. La même longueur d'onde, les mêmes principes, et une formation
        fullstack. Je veux bien entendu parler d'<a href="oclock.io">O'Clock</a>.
        Avec son format full remote en 2020, c'est apréciable.
      </p>
      <p>
        Et après un peu plus de 5 mois de formation, les bases sont là. Plus qu'à monter en
        compétences, et décrocher un jour, un job!
        Je sais que pour les juniors, en ce moment, c'est compliqué.
        Mais j'ai des projets plein la tête, alors je vais continuer d'apprendre tous les jours.
      </p>
      <p>
        La suite des aventures se passe sur le <Link to="/blog">blog</Link>.
      </p>
    </article>
  </div>
);
export default Accueil;
