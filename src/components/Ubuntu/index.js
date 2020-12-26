import React from 'react';

import './ubuntu.scss';

const Ubuntu = () => (
  <div className="ubuntu">
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
    <p className="ubuntu_content">
      Rendez vous donc sur le <a href="https://code.visualstudio.com/download">site de VsCode</a>.
      Téléchargez la version Linux, Debian Ubuntu pour ce cas précis.
      Ensuite, le Terminal.
      On se place dans le dossier Téléchargements (par défaut), et on lance la commande:<br />
      <code>sudo dpkg -i code_*.deb</code>
    </p>
    <p className="ubuntu_content">
      Si toutefois vous souhaitez un environnement libre, vous pouvez utiliser
      VsCodium, qui s'installe directement avec cette commande:<br />
      <code>sudo snap install codium</code>
    </p>
  </div>
);

export default Ubuntu;
