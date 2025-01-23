import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="border-b border-gray-300 flex items-center px-32 h-16 gap-4">
      <Link to={"/"}>
        <p className="font-bold text-2xl">DISCANI</p>
      </Link>
      <Link to={"/"}>
        <p className="text-muted-foreground">Home</p>
      </Link>
    </header>
  );
};

export default Header;
