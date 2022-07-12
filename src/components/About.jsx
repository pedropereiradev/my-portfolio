import React from 'react';
import portfolioImage from '../assets/portfolioImage.png';

function About() {
  return (
    <section>
      <section>
        <h1>Pedro Pereira</h1>
        <p>
          Hi there! I am a frontend developer and backend development student.
          Here is my portfolio page where you can learn about my journey
          as a full stack web developer.
        </p>
      </section>
      <section>
        <img src={portfolioImage} alt="Me" />
      </section>
    </section>
  );
}

export default About;
