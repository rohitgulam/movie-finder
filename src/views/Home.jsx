import React from "react";
import Navigation from "../Components/Navigation";
import Recommended from "../pages/Recommended";
import MostRated from "../pages/MostRated";
import SearchBar from "../Components/SearchBar";
import Popular from "../pages/Popular";

function Home() {
  return (
    <>
      <Recommended />
      <MostRated />
      <Popular />
    </>
  );
}

export default Home;
