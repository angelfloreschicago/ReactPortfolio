import React from "react";
import "./style.css";

function Navbar() {
  return (
      <>
      <header id="#top">
        <h1>Angel's Portfolio</h1>
        <nav>
            <ul>
                <li><a class="nav-deco" href="/projects">Projects</a></li>
                <li><a class="nav-deco" href="/resume">Resume</a></li>
                <li><a class="nav-deco" href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  </>
  );
}

export default Navbar;
