import React from 'react';
import '../styles/About.css';
import Ann from "./images/ann2.png";

function About() {
  return (
    <div class = "container" id="about">
    <div class = "row">
      <div class = "col-md-4">
        <img class="img-fluid" id= "ann" src={Ann} alt="Ann"></img>
      </div>
      <div class = "col-md-8">
        <h1 class = "display-3">Hi, I'm Ann</h1>
        <h2 class="display-5">Full Stack Software Developer</h2>
        <p class = "lead">
            A recent graduate of the University of Minnesota's Full Stack Web Development Bootcamp.
          </p>
          <p>I have newly developed skills in JavaScript, CSS, Node, React, and responsive web design. Below are some examples of collaborations I've worked on during my time as a student.</p>
      </div>
    </div>
  </div>
  );
}

export default About;
