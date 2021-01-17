import React from 'react';

const Compteur = () => (
  <div className="compteur">
    <h2 className="compteur_title">Le compteur de Click en React</h2>
    <p className="compteur_content">
      Voici le code source:
    </p>
    <p className="compteur_content">
      <pre className="code">
        import React, &#123; useState &#125; from 'react';
      </pre>
      <pre className="code">
        const Count = () =&gt; &#123;
      </pre>
      <pre className="code">
        let [count, setCount] = useState(0);
      </pre>
      <pre className="code">
        return (
      </pre>
      <pre className="code">
        &#8249;div className="count"&gt;
      </pre>
      <pre className="code">
        &#8249;h2 className="count_title"&gt;Le compteur de click&#8249;/h2&gt;
      </pre>
      <pre className="code">
        &#8249;p className="count_content"&gt;
      </pre>
      <pre className="code">
        Vous avez cliquez &#123;count&#125; fois.
      </pre>
      <pre className="code">
        &#8249;/p&gt;
      </pre>
      <pre className="code">
        &#8249;p className="count_buttons"&gt;
      </pre>
      <pre className="code">
        &#8249;button
      </pre>
      <pre className="code">
        type="button"
      </pre>
      <pre className="code">
        className="count_button"
      </pre>
      <pre className="code">
        onClick=&#123;() =&gt; setCount(count + 1)
      </pre>
      <pre className="code">
        &#125;&gt;CLiquez ici !&#8249;/button&gt;
      </pre>
      <pre className="code">
        &#8249;button
      </pre>
      <pre className="code">
        type="button"
      </pre>
      <pre className="code">
        className="count_button"
      </pre>
      <pre className="code">
        onClick=&#123;() =&gt; setCount(count = 0)
      </pre>
      <pre className="code">
        &#125;&gt;Réinitialiser...&#8249;/button&gt;
      </pre>
      <pre className="code">
        &#8249;/p&gt;
      </pre>
      <pre className="code">
        &#125;;
      </pre>
      <pre className="code">
        export default Count;
      </pre>
    </p>
  </div>
);

export default Compteur;
