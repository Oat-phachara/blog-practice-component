import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="bg-blue header">
      <Logo />
      <Navbar />
    </div>
  );
}

export default Header;
