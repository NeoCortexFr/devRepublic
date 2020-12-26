/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import './ubuntu.scss';

const Ubuntu = () => (
  <div className="ubuntu">
    <article id="vscode">
      <h2 className="ubuntu_title">Les astuces Ubuntu de Dev'Republic</h2>
      <p className="ubuntu_content">
        Dans cette approche sur les astuces Ubuntu (et de Linux en général),
        beaucoup de choses vont se passer via le Terminal.
        J'utilise personnellement Ubuntu depuis la version 10.04, donc depuis
        la distribution sorti en avril 2010. Aujourd'hui, la distribution la
        plus récente et maintenue 5 ans (les versions LTS) est la 20.04.
      </p>
      <p className="ubuntu_content">
        Très utiles pour le développement, les outils "WorkStation" s'installe quasiment
        tous via le Terminal.
        Commençons par installer Visual Studio Code, l'IDE de Microsoft.
      </p>
      <h3 className="ubuntu_title">VsCode</h3>
      <p className="ubuntu_content">
        Rendez vous donc sur le <a href="https://code.visualstudio.com/download">site de VsCode</a>.
        Téléchargez la version Linux, Debian Ubuntu pour ce cas précis.
        Ensuite, le Terminal.
        On se place dans le dossier Téléchargements (par défaut)<br /><br />
        <code>cd Téléchargements</code><br /><br />
        et on lance la commande:<br /><br />
        <code>sudo dpkg -i code_*.deb</code><br />
      </p>
      <p className="ubuntu_content">
        Si toutefois vous souhaitez un environnement libre, vous pouvez utiliser
        VsCodium, qui s'installe directement avec cette commande:<br /><br />
        <code>sudo snap install codium</code>
      </p>
      <p className="ubuntu_content">
        Retrouvez les extensions et autres astuces sur les ressources dédiées à <Link to="/tech/vscode">VsCode</Link>
      </p>
    </article>
    <article id="apache">
      <h3 className="ubuntu_title">Apache</h3>
      <p className="ubuntu_content">
        Installons maintenant Apache, pour faire tourner un serveur en local.
        Ce qui permet de faire les tests avant la mise en production.
        Et autant prendre un environnement complet, LAMP, pour Linux Apache Mysql Php:<br /><br />
        <code>sudo apt install apache2 php libapache2-mod-php mysql-server php-mysql</code><br /><br />
        Mais si vous préférer MariaDB au lieu de MySql, installez:<br /><br />
        <code>sudo apt install apache2 php libapache2-mod-php mariadb-server php-mysql</code><br />
      </p>
      <p className="ubuntu_content">
        Pour une installation complète avec prises en charge CMS, Forums etc, ajoutez ceci:<br /><br />
        <code>sudo apt install php-curl php-gd php-intl php-json php-mbstring php-xml php-zip</code>
        <br /><br />
        La <a href="https://doc.ubuntu-fr.org/lamp#installation">doc d'Ubuntu</a> nous informe:
      </p>
      <ul className="ubuntu_content">
        <li> - Le paquet apache2 installe le serveur HTTP Apache 2 (c'est une dépendance de libapache2-mod-php).</li>
        <li> - Le paquet php méta-paquet permettant d'installer au moins un interpréteur PHP (aussi installé ici en dépendance de libapache2-mod-php).</li>
        <li> - Le paquet libapache2-mod-php module d'Apache (on peut aussi utiliser PHP en ligne de commande ou indépendamment en FastCGI, ce qui le rend plus performant mais plus compliqué à mettre en place)</li>
        <li> - Le paquet mysql-server installe le serveur de bases données MySQL.</li>
        <li> - Le paquet mariadb-server installe le serveur de base données MariaDB.</li>
        <li> - Le paquet php-mysql installe les module permettant d'utiliser MySQL ou MariaDB avec PHP.</li>
      </ul>
      <p className="ubuntu_content">
        Une fois installé, ouvrez un nouvel onglet et écrivez l'url:<br /><br />
        <code>localhost:8080</code>
      </p>
      <p className="ubuntu_content">
        Si tout se passe bien, vous devriez avoir un résumé, avec la mention en haut de page:<br />
        <strong>It Works!</strong>
      </p>
    </article>
    <article id="yarn">
      <h3 className="ubuntu_title">
        Yarn (alternative à npm)
      </h3>
      <p className="ubuntu_content">
        Installons maintenant un gestionnaire de paquets.
        Le plus connu étant NPM, je vous propose ici une alternative.<br />
        <strong>Yarn</strong>
      </p>
      <p className="ubuntu_content">
        Pour l'installer sur les distributions supérieures à la 16.04, utilisez:<br /><br />
        <code>curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
          echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        </code>
        <br />
        <br />
        Une fois le téléchargement effectué, lancez:
        <br />
        <br />
        <code>sudo apt update && sudo apt install yarn</code>
      </p>
      <p className="ubuntu_content">
        Ce qui vous permet d'utiliser la commande <code>yarn add</code> dans votre IDE.
        Mais je reviendrai dessus juste après.
      </p>
    </article>
  </div>
);

export default Ubuntu;
