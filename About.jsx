 import React from 'react';
import './About.css';

export default function About() {
  const aboutme = {
    Name: "Sushma Chagani",
    Graduation: "(B.Tech)Kallam Haranadha Reddy Institute of Technology",
    YearOfPassout: "2025",
    TechnicalSkills: "Java",
    WebDevelopment: "HTML, CSS, JavaScript"
  };

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-card">
        <p><strong>Name:</strong> {aboutme.Name}</p>
        <p><strong>Graduation:</strong> {aboutme.Graduation}</p>
        <p><strong>Year of Passout:</strong> {aboutme.YearOfPassout}</p>
        <p><strong>Technical Skills:</strong> {aboutme.TechnicalSkills}</p>
        <p><strong>Web Development:</strong> {aboutme.WebDevelopment}</p>
      </div>
    </section>
  );
}
