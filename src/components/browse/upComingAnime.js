import React from "react";
import { useFetchUpComing } from "../../hooks/fetchUpcomingAnime";
import { PreLoadAnime } from "./preLoad";
import { Link } from "react-router-dom";
import addSvg from "../../assets/svg/add.svg";
import { clearScrollHistory } from "../ChearScrollHistory";
import { showAnimeDetail } from "./hoverEffect";

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
              <div
                className="animeBox"
                key={anime.id}
                onMouseEnter={(e) => showAnimeDetail(e)}
              >
                <img
                  className="animeImage"
                  src={anime.coverImage.medium}
                  alt=""
                ></img>
                <div className="animeTitle">
                  {anime.title.english || anime.title.romaji}
                </div>
                <img className="addAnimeButton" src={addSvg} alt=""></img>
                <div className="animeDetailPopUp">
                  <div className="hoverGenres">
                    {anime.genres.map((genre) => {
                      return (
                        <div
                          key={"hoverGenre" + anime.id}
                          className="hoverGenre"
                        >
                          {genre}
                        </div>
                      );
                    })}
                  </div>
                  <hr
                    style={{
                      backgroundColor: "gray",
                      opacity: "0.5",
                      width: "40px",
                    }}
                  ></hr>
                  <div className="hoverEpisode">
                    {anime.episodes || "0"} ep expected
                  </div>
                </div>
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
