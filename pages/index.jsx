import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/PostCard";
import {useEffect} from 'react'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'
import Footer from '../components/Footer'

export default function Home() {

  let x = [1, 2, 3];
  return (
    <>
      <Hero/>
      <LatestPosts/>


      <main>

        {x.map((post) => (
            <PostCard key={post} />
        ))}
      </main>

      {/*<Footer/>*/}
    </>
  );
}
