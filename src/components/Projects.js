import React from 'react';
import '../styles/Projects.css';
import BookReview from "./images/bookreview.png";
import CatMemory from "./images/catmemory.png";
import PasswordGenerator from "./images/passwordgenerator.png";
import Scheduler from "./images/scheduler.png"

function Projects() {
  return (
    <main id="main">
      <section class="project1">
          <a href="https://sabiebookreview.herokuapp.com/"> 
          <img src={BookReview} alt="bookreview"></img></a>
      </section>
      <section class="project2">
          <a href="https://bretpeters3n.github.io/group-project-1-quick-getaway/">
          <img src={CatMemory} alt="catmemory"></img></a>
      </section>
      <section class="project3">
          <a href="https://annsabie.github.io/passwordgenerator/">
          <img src={PasswordGenerator} alt="password"></img></a>
      </section>
      <section class="project4">
        <a href="https://annsabie.github.io/scheduler/"> 
        <img src={Scheduler} alt="schedule"></img></a>
      </section>
    </main>
  );
}

export default Projects;