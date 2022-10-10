import React from "react";
import styles from "./NavBar.module.css";
// import '../styles/globals.css'

function NavBar() {
  return (
      <div className="nav-container">
        <div className="nav-sub-container">

          <nav >
          <a href="#" className="text-2xl">Shiva Reddy</a>
          <ul id="primary-navigation" className="primary-navigation flex">

            <li>
              <a className="uppercase letter-spacing-2" href="#">
                Blog
              </a>
            </li>

            <li>
              <a className="uppercase letter-spacing-2" href="#">
                Projects
              </a>
            </li>

            <li>
              <a className="uppercase letter-spacing-2" href="#">
                Projects
              </a>
            </li>

            <li>
              <a className="uppercase letter-spacing-2" href="#">
                Fun-facts
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default NavBar;
