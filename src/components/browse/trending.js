import React, { useEffect } from "react";
import { useFetchTrending } from "../../hooks/fetchTrending";
import { PreLoadAnime } from "./preLoad";
import addSvg from "../../assets/svg/add.svg";
const TrendingContainner = () => {
  const { loading, trending } = useFetchTrending(9);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Trending Today</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime />
        ) : (
          (console.log("fetching"),
          trending.map((anime, i) => (
            <div className="animeBox" key={anime.id}>
              <img
                className="animeImage"
                src={anime.coverImage.medium}
                alt=""
              ></img>
              <div className="animeTitle">
                {anime.title.english || anime.title.romaji}
              </div>
              <img className="addAnimeButton" src={addSvg} alt=""></img>
            </div>
          )))
        )}
      </div>
    </div>
  );
};

export default TrendingContainner;
