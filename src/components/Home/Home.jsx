import React from 'react';
import './Home.css';
import image from '../../assets/profilepic.jpg';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <img src={image} alt='profilepic'></img>
      <h1>Hello, I’m Sushma chagani</h1>
      <p>I'm currently working at Bhasaka Technologies in Hyderabad as an Associate Software Engineer.</p>
    </section>
  );
}
