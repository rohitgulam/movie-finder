import React from "react";

const Navigation = () => {
  return (
    <div className="md:flex md:justify-center ">
      <div className="flex  justify-between py-2 px-4 text-lg md:w-[400px] ">
        <div style={active} className="cursor-pointer">
          All
        </div>
        <div className="cursor-pointer">Movies</div>
        <div className="cursor-pointer">Tv shows</div>
        <div className="cursor-pointer">Search</div>
      </div>
    </div>
  );
};

export default Navigation;

const active = {
  color: "#595bf0",
  fontWeight: "bold",
};
