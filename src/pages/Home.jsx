import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import("../components/Home/Hero"));
const SaleBanner = lazy(() => import("../components/Home/SaleBanner"));
const FeaturedGames = lazy(() => import("../components/Home/FeaturedGames"));
const GamingNews = lazy(() => import("../components/Home/GamingNews"));
const Testimonials = lazy(() => import("../components/Home/Testimonials"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <SaleBanner />
        <FeaturedGames />
        <GamingNews />
        <Testimonials />
      </Suspense>
    </>
  );
};

export default Home;
