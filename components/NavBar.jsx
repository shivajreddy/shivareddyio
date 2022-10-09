import React from "react";
import styles from "./NavBar.module.css";
// import '../styles/globals.css'

function NavBar() {
  return (
    <div className="pm">

      <div>
        <img src="/images/logo.svg" width={150} />
      </div>

      <nav>
        <ul id="primary-navigation" className="primary-navigation flex">

          <li>
            <a href="#">
              <span aria-hidden={false}>00</span>
              Logo
            </a>
          </li>

          <li>
            <a href="#">
              <span>Blog</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>Projects</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>Connect</span>
            </a>
          </li>

        </ul>
      </nav>

    </div>
  );
}

export default NavBar;
