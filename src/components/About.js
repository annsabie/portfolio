import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div class = "container" id="about">
    <div class = "row">
      <div class = "col-md-4">
        <img id= "ann" src="./images/ann.jpeg" alt="Ann"></img>
      </div>
      <div class = "col-md-8">
        <h1 class = "display-4">Hi, I'm Ann</h1>
        <p class = "lead">
            This is where I will write about my skills learned in this bootcamp. Highlighting what I want potential employers to focus on.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula rutrum ante vel finibus. Mauris pulvinar ultricies odio, ac congue tortor pellentesque ac. Pellentesque congue est eget elit porta posuere. Aenean ultrices dui et tortor blandit porttitor.</p>
      </div>
    </div>
  </div>
  );
}

export default About;
