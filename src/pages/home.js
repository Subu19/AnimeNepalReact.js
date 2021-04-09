import React from "react";
import NewsContainner from "../components/home";
import TrendingSlide from "../components/home/trending";

function Home() {
  return (
    <div className="main">
      <TrendingSlide></TrendingSlide>
      <NewsContainner></NewsContainner>
    </div>
  );
}

export default Home;
