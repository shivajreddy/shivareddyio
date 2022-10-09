import React from "react";
import styles from "./NavBar.module.css";
// import '../styles/globals.css'

function NavBar() {
  return (
    <div>

      <nav className="primary-header flex">
        <a href="#" className="text-2xl text-indigo-700 pr-40">Shiva Reddy</a>
        <ul id="primary-navigation" className="primary-navigation flex">


          <li>
            <a className="uppercase letter-spacing-2" href="#">
              <span aria-hidden="true">00</span>
              Blog
            </a>
          </li>

          <li>
            <a className="uppercase letter-spacing-2" href="#">
              <span aria-hidden="true">00</span>
              Projects
            </a>
          </li>

          <li>
            <a className="uppercase letter-spacing-2" href="#">
              <span aria-hidden="true">00</span>
              Fun-facts
            </a>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default NavBar;
