import React from 'react';
import Navigation from '../Components/Navigation';
import Recommended from '../pages/Recommended';
import MostRated from '../pages/MostRated'

function Home() {
  return (
    <>
        <Recommended />
        <MostRated />
    </>
  )
}

export default Home;