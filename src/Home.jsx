import React from 'react'
import SearchBar from "./Components/SearchBar";
import SecondBar from "./Components/SecondBar";
import Slider from "./Components/Slider";

import Container from "./Components/Container";
import Showcases from "./Components/Showcases";


const Home = () => {
  return (
    <div>
        <SearchBar />
        <SecondBar />
        <Slider />
        <Showcases />
        <Container />
    </div>
  )
}

export default Home