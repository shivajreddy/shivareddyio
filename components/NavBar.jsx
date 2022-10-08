import React from "react";
import styles from "./"

function NavBar() {
  return (
    <frosted-glass-container stretch="true">
      <div id="app">
        <frosted-glass overlay-color="#ffffff52" className="nav-container"
        >
          <i className="material-icons left-menu"></i>
          <ul className="nav-content">
            <li>Home</li>
            <li>Our Story</li>
            <li>Services</li>
            <li>Work</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
          <button className="nav-cta">Call Us</button>
        </frosted-glass>
        <div className="hero-container">
          <frosted-glass
            overlay-color="#ffffff52"
            blur-amount="1.6rem"
            className="hero-value-add"
          >
            <h1>Frosted Glass</h1>
            <div className="hero-details">
              next level street art gastropub flannel keytar sartorial
              sustainable ennui Brooklyn kitsch artisan typewriter
            </div>
            <button className="hero-cta">Order now</button>
          </frosted-glass>
        </div>
        <div className="extra-container">
          <div className="extra-content">
            <h2>Artisan craft beer</h2>
            <p>
              Odd Future raw denim tattooed Godard Truffaut organic tote bag
              Carles messenger bag flexitarian twee PBR&B blog
            </p>
            <button className="nav-cta">schedule a demo</button>
          </div>
        </div>
        <div className="extra-container-1"></div>
        <div className="extra-container extra-container-2">
          <div className="extra-content">
            <h2>Kale flannel blog</h2>
            <p>
              {" "}
              pack readymade Tonx fixie lomo plaid meggings brunch next level
              authentic organic paleo
            </p>
            <ul className="icon-list">
              <li>
                <i className="material-icons">ic_flight_takeoff</i>
              </li>
              <li>
                <i className="material-icons">ic_language</i>
              </li>
              <li>
                <i className="material-icons">ic_card_travel</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <ul>
            <li>artisan</li>
            <li>travel</li>
            <li>curated</li>
          </ul>
        </div>
      </div>
    </frosted-glass-container>
  );

export default NavBar;
