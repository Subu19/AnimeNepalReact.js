import React, { useState } from "react";
import { useFetchTopAnime } from "../../hooks/fetchTopAnime";
import { PreLoadAnime } from "./preLoad";
import addSvg from "../../assets/svg/add.svg";
import { Link } from "react-router-dom";
import { clearScrollHistory } from "../ChearScrollHistory";
const TopAnimeContainner = ({ items, seeMore }) => {
  const { loading, topAnime } = useFetchTopAnime(items);
  // const [showSeeMore, setShowSeeMore]= useState(seeMore);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Top Anime</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime items={items} />
        ) : (
          topAnime.map((anime, i) => {
            return (
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
            );
          })
        )}
      </div>
      {seeMore ? (
        <Link
          to="/browse/topAnime"
          className="seeMore"
          onClick={clearScrollHistory}
        >
          see more...
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopAnimeContainner;
