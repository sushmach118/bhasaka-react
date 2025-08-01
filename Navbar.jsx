   import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {['Home', 'About', 'Projects', 'Contact'].map((sec) => (
          <li key={sec}>
            <a href={`#${sec.toLowerCase()}`}>{sec}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
