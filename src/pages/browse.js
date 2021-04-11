import React from "react";
import BrowseSearch from "../components/browse";
import TrendingContainner from "../components/browse/trending";
import UpcomingAnimeContainner from "../components/browse/upComingAnime";
import TopAnimeContainner from "../components/browse/topAnime";
import "../css/browse/mobile.css";

function Browse() {
  return (
    <div className="main">
      <BrowseSearch></BrowseSearch>
      <TrendingContainner></TrendingContainner>
      <UpcomingAnimeContainner></UpcomingAnimeContainner>
      <TopAnimeContainner></TopAnimeContainner>
    </div>
  );
}

export default Browse;
