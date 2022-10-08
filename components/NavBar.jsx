import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <p>hi</p>
      <p>hi</p>
      <div className="flex justify-center align-center close">
        <div
          className="close absolute top-3 left-3 flex w-80 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-green-400 opacity-90 to-amber-400 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 m-3 bg-"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
