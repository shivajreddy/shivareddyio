import React from 'react';

function Hero() {
  return (
      <div className="hero">

        <div id="hero-bg">
          <div id="hero-about">
            <h1 className="text-3xl">Hey, I'm Shiva!</h1>
            <p className="hero-description text-lg">Welcome to my digital garden. 🌱
              <br/>
              I'm a software developer who creates open-source projects and writes about code,
              design, and life. I like accordions, outer space, board games, and stand-up comedy.
              <br/>
              Check out <a href="/projects">my projects</a> and <a href="/blog">articles I've written</a> on subjects like game design, security, front end development, or learn <a href="/me">more about me</a>
            </p>
          </div >

        </div>
        <svg id="hero-wave" preserveAspectRatio="none" width="100vw" height="74" viewBox="0 0 1440 74"
             className="Hero__Swoops-sc-13y35jq-4 laHbQG">
          <path
              d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
        <img id="hero-img" src="/images/me.png" />
      </div>
  );
}

export default Hero;