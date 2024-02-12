import React from "react";
import Card from "./Card";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <Search></Search>
      </div>
      <div>
        <ThemeIcon></ThemeIcon>
      </div>
    </>
  );
};

export default Header;
