import React from "react";
import { useFetchTopAnime } from "../../hooks/fetchTopAnime";
import { PreLoadAnime } from "./preLoad";

const TopAnimeContainner = () => {
  const { loading, topAnime } = useFetchTopAnime(9);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Top Anime</div>

      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime />
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
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TopAnimeContainner;
