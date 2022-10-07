import React from "react";
import styles from "./postcard.module.css";

function PostCard() {
  return (
    <div className={`text-3xl ${styles.postcard}`}>
      <p>Date:some date</p>
      <h2>Card Title: </h2>
      <div>
        <p>tags here</p>
      </div>
    </div>
  );
}

export default PostCard;
