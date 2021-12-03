import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer">
    <h4>
      507.369.4700
    </h4>
    <Link to="mailto:annsabie1@gmail.com">
      <FaEnvelope size={42}  />
    </Link>
    <Link to="https://github.com/annsabie">
      <FaGithub size={42} />
    </Link>
    <Link to="https://www.linkedin.com/in/annsabie/">
      <FaLinkedinIn size={42} />
    </Link>

  </footer>
  );
}

export default Footer;