import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import "../styles/home.module.css";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* ------ content for each page ------ */}
        {children}
        <footer>
          <p className="text-center text-[#bbb] my-28 mx-auto">
            copyright 2021 Web Warrior
          </p>
        </footer>
      </div>
    </div>
  );
}
