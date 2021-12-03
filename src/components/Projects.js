import React from 'react';
import '../styles/Projects.css';
import BookReview from "./images/bookreview.png";
import CatMemory from "./images/catmemory.png";
import Scheduler from "./images/scheduler.png"
import Santa from "./images/santa.png"

function Projects() {
  return (
    <main id="main">
      <section class="project1">
          <a href="https://dear-santa-project.herokuapp.com/"> 
          <img src={Santa} alt="santa"></img></a>
      </section>
      <section class="project2">
          <a href="https://annsabie.github.io/group-project-1-cat-memory/">
          <img src={CatMemory} alt="catmemory"></img></a>
      </section>
      <section class="project3">
          <a href="https://sabiebookreview.herokuapp.com/">
          <img src={BookReview} alt="bookreview"></img></a>
      </section>
      <section class="project4">
        <a href="https://annsabie.github.io/scheduler/"> 
        <img src={Scheduler} alt="schedule"></img></a>
      </section>
    </main>
  );
}

export default Projects;