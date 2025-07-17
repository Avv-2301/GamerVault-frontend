import React, { lazy, Suspense } from "react";
import "./App.css";
const Navbar = lazy(() => import("./components/common/Navbar"));
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";
import AgeVerification from "./components/common/AgeVerification.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import CheckoutPage from "./pages/Checkout.jsx";
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./components/common/Footer"));
const AllGames = lazy(() => import("./pages/AllGames"));
const GameDetails = lazy(() => import("./pages/GameDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Profile = lazy(() => import("./pages/UserProfile.jsx"));
const Library = lazy(() => import("./pages/Library.jsx"));


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>

      <div className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<AllGames />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route
              path="/cart/add/:id"
              element={<div>Cart Page (to be implemented)</div>}
            />
            <Route path="/age-verify" element={<AgeVerification />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/library" element={<Library />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
