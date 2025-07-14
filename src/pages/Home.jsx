import React from "react";
import Hero from "../components/Home/Hero";
import SaleBanner from "../components/Home/SaleBanner";
import FeaturedGames from "../components/Home/FeaturedGames";
import GamingNews from "../components/Home/GamingNews";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <SaleBanner />
      <FeaturedGames />
      <GamingNews />
      <Testimonials />
    </>
  );
};

export default Home;
