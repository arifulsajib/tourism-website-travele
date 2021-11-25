import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Intro from "../Intro/Intro";
import Tours from "../Tours/Tours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <Tours></Tours>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
