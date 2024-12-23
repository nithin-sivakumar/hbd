import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Greeting from "./pages/Greeting";
import Cake from "./pages/Cake";
import Eat from "./pages/Eat";
import Gift from "./pages/Gift";
import MainGift from "./pages/MainGift";
import Star from "./pages/Star";
import DigitalPortrait from "./pages/Photo";
import InteractiveLoveLetter from "./pages/Letter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/greetings" element={<Greeting />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/eat" element={<Eat />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/main-gift" element={<MainGift />} />
      <Route path="/star" element={<Star />} />
      <Route path="/photo" element={<DigitalPortrait />} />
      <Route path="/letter" element={<InteractiveLoveLetter />} />
    </Routes>
  );
};

export default App;
