import Head from "next/head";
import Image from "next/image";
import PostCard from "../components/PostCard";
// import styles from "../styles/Home.module.css";

export default function Home() {
  let x = [1, 2, 3];
  return (
    <>
      <h1>Shiva Reddy io</h1>
      {x.map((post) => (
        <PostCard key={post} />
      ))}
    </>
  );
}
