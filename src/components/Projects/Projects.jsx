 import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'ConvoConnect App',
    description: 'ConvoConnect is a lightweight, browser‑based video conferencing platform that supports real‑time group video calls, screen sharing, in‑call chat, and session recording.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgtmaRAaMYGL3yZ0tnAZsw5hvrlxmyy6vvw&s'
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid-small">
        {projects.map((p, i) => (
          <div key={i} className="project-card-small">
            <img src={p.image} alt={p.title} className="card-img-small" />
            <div className="card-info-small">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
