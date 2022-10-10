import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/PostCard";
import {useEffect} from 'react'
// import styles from "../styles/Home.module.css";

export default function Home() {

  let x = [1, 2, 3];
  return (
    <>
      <div className="hero">
        <div id="hero-bg"></div>
        <svg id="hero-wave" preserveAspectRatio="none" width="100vw" height="74" viewBox="0 0 1440 74"
             className="Hero__Swoops-sc-13y35jq-4 laHbQG">
          <path
              d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
        <img id="hero-img" src="/images/me.png" />
      </div>

      <main>

        {x.map((post) => (
            <PostCard key={post} />
        ))}
        {x.map((post) => (
            <PostCard key={post} />
        ))}
        {x.map((post) => (
            <PostCard key={post} />
        ))}
        {x.map((post) => (
            <PostCard key={post} />
        ))}
        {x.map((post) => (
            <PostCard key={post} />
        ))}
        {x.map((post) => (
            <PostCard key={post} />
        ))}

      </main>

    </>
  );
}
