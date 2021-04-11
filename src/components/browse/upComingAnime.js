import React from "react";
import { useFetchUpComing } from "../../hooks/fetchUpcomingAnime";
import { PreLoadAnime } from "./preLoad";
import addSvg from "../../assets/svg/add.svg";

const UpcomingAnimeContainner = () => {
  const { loading, upcomingAnime } = useFetchUpComing(9);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Upcoming Anime</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime />
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
    </div>
  );
};

export default UpcomingAnimeContainner;
