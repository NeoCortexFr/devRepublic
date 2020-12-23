import React from 'react';

import './blog.scss';

const Blog = () => (
  <div className="blog">
    <h2 className="blog_h2">Blog</h2>
    <h3 className="blog_h3">Welcome sur le blog de Dev'Republic</h3>
    <div className="section">
      <article className="blog_content">
        <p>
          Vous pouvez retrouver les articles via la navigation de gauche.
        </p>
      </article>
      <nav className="blog_nav">
        <ul>
          <li>Titre 1</li>
        </ul>
      </nav>
    </div>
  </div>
);
export default Blog;
