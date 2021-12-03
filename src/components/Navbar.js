import React from 'react';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <span class="display-6" id="name">Ann Sabie</span>
           <Link to="/footer">Contact</Link>
    </div>
  </nav>
  );
}

export default Navbar;
