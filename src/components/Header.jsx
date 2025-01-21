import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="border-b border-gray-300 flex justify-between items-center px-8 h-16">
      <Link to={"/"}>
        <p className="font-bold text-2xl">DISCANI</p>
      </Link>
    </header>
  );
};

export default Header;
