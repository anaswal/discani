import React from "react";
import { Link } from "react-router";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="text-white border-b border-gray-300 flex items-center px-32 h-16 gap-4 justify-between bg-[#874f41]">
      <div>
        <Link to={"/"}>
          <p className="font-bold text-2xl text-white">DISCANI</p>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Input />
        <Link to={"/"}>
          <p className="text-muted-foreground">Categories</p>
        </Link>
        <Link to={"/"}>
          <p className="text-muted-foreground">Trending</p>
        </Link>
        <Link to={"/"}>
          <p className="text-muted-foreground">About</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
