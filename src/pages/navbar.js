import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
      <>
      <header>
        <h1><Link href="/" style={{color: "black"}}>Angel's Portfolio</Link></h1>
        <nav>
            <ul>
                <li><Link class="nav-deco" to="/">Home</Link></li>
                <li><Link class="nav-deco" to="/projects">Projects</Link></li>
                <li><Link class="nav-deco" to="/resume">Resume</Link></li>
                <li><Link class="nav-deco" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  </>
  );
}

export default Navbar;
