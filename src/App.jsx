import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import AllGames from "./pages/AllGames";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-games" element={<AllGames />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
