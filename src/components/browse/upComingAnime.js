import React from "react";
import { useFetchUpComing } from "../../hooks/fetchUpcomingAnime";
import { PreLoadAnime } from "./preLoad";
import { Link } from "react-router-dom";
import addSvg from "../../assets/svg/add.svg";
import { clearScrollHistory } from "../ChearScrollHistory";

const UpcomingAnimeContainner = ({ items, seeMore }) => {
  const { loading, upcomingAnime } = useFetchUpComing(items);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Upcoming Anime</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime items={items} />
        ) : (
          upcomingAnime.map((anime) => {
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
          to="/browse/upcoming"
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

export default UpcomingAnimeContainner;
