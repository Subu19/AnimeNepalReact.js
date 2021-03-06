import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BrowseSearch from "../components/browse";
import TrendingContainner from "../components/browse/trending";
import UpcomingAnimeContainner from "../components/browse/upComingAnime";
import TopAnimeContainner from "../components/browse/topAnime";
import "../css/browse/mobile.css";

function Browse(props) {
  const [currentUrl, setCurrentUrl] = useState("");

  const { list } = useParams();
  if (list === "trending") {
    return (
      <div className="main">
        <BrowseSearch
          setCurrentUrl={setCurrentUrl}
          currentUrl={currentUrl}
        ></BrowseSearch>
        <TrendingContainner items={100} seeMore={false}></TrendingContainner>
      </div>
    );
  }
  if (list === "upcoming") {
    return (
      <div className="main">
        <BrowseSearch
          setCurrentUrl={setCurrentUrl}
          currentUrl={currentUrl}
        ></BrowseSearch>
        <UpcomingAnimeContainner
          items={100}
          seeMore={false}
        ></UpcomingAnimeContainner>
      </div>
    );
  }
  if (list === "topAnime") {
    return (
      <div className="main">
        <BrowseSearch
          setCurrentUrl={setCurrentUrl}
          currentUrl={currentUrl}
        ></BrowseSearch>
        <TopAnimeContainner items={100} seeMore={false}></TopAnimeContainner>
      </div>
    );
  }

  return (
    <div className="main">
      <BrowseSearch
        setCurrentUrl={setCurrentUrl}
        currentUrl={currentUrl}
      ></BrowseSearch>
      <TrendingContainner items={9} seeMore={true}></TrendingContainner>
      <UpcomingAnimeContainner
        items={9}
        seeMore={true}
      ></UpcomingAnimeContainner>
      <TopAnimeContainner items={9} seeMore={true}></TopAnimeContainner>
    </div>
  );
}

export default Browse;
