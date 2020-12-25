import React from 'react';
import { Link, Route } from 'react-router-dom';

import Swapi from 'src/components/Swapi';

import './blog.scss';

const Blog = () => (
  <div className="blog">
    <h2 className="blog_h2">Blog</h2>
    <h3 className="blog_h3">Welcome sur le blog de Dev'Republic</h3>
    <div className="section">
      <nav className="blog_nav">
        <ul>
          <li className="blog_li"><Link to="/blog/swapi">Swapi</Link></li>
          <li className="blog_li">Titre 2</li>
        </ul>
      </nav>
      <article className="blog_content">
        <Route path="/blog/swapi">
          <Swapi />
        </Route>
      </article>
    </div>
  </div>
);
export default Blog;
