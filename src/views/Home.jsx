import React from "react";
import Navigation from "../Components/Navigation";
import Recommended from "../pages/Recommended";
import MostRated from "../pages/MostRated";
import SearchBar from "../Components/SearchBar";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";

function Home() {
  return (
    <>
      <Recommended />
      <MostRated />
      <Popular />
      <Upcoming />
    </>
  );
}

export default Home;
