import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });

  return <nav classame={`${sticky ? "sticky" : ""}`}></nav>;
};

export default Navbar;
