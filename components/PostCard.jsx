import React from "react";
import styles from "./postcard.module.css";
import useLocalStorage from "../utilities/hooks/useLocalStorage";

function PostCard() {
  const [k, v] = useLocalStorage("theme");
  return (
    <div className={`${styles.post_card}`}>
      <p>Date:some date</p>
      <h2>Card Title: </h2>
      <div>
        <p>tags here</p>
      </div>
    </div>
  );
}

export default PostCard;
