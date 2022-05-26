import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="md:flex md:justify-center w-full ">
      <div className="flex  justify-between py-2 px-4 text-lg md:w-[400px] ">
        <div style={active}>
          <Link to="/">All</Link>
        </div>
        <div className="cursor-pointer">Movies</div>
        <div className="cursor-pointer">Tv shows</div>
        <div>Search</div>
        {console.log(showSearch)}
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;

const active = {
  color: "#595bf0",
  fontWeight: "bold",
};
