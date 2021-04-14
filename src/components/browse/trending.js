import React, { useEffect } from "react";
import { useFetchTrending } from "../../hooks/fetchTrending";
import { PreLoadAnime } from "./preLoad";
import { Link } from "react-router-dom";
import { clearScrollHistory } from "../ChearScrollHistory";
import addSvg from "../../assets/svg/add.svg";
import { showAnimeDetail } from "./hoverEffect";
const TrendingContainner = ({ items, seeMore }) => {
  const { loading, trending } = useFetchTrending(items);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Trending Today</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime items={items} />
        ) : (
          (console.log("fetching"),
          trending.map((anime, i) => (
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
                <div className="hoverFormat">{anime.format}</div>
                <div className="hoverGenres">
                  {anime.genres.map((genre, i) => {
                    return (
                      <div
                        key={i + "hoverGenre" + anime.id}
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
                {anime.format !== "MOVIE" ? (
                  <div className="hoverEpisode">
                    {anime.episodes != null
                      ? anime.episodes + " episodes"
                      : anime.nextAiringEpisode.episode + " airing" || ""}
                  </div>
                ) : (
                  ""
                )}
                <div className="hoverStatus">{anime.status || ""}</div>
              </div>
            </div>
          )))
        )}
      </div>
      {seeMore ? (
        <Link
          to="/browse/trending"
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

export default TrendingContainner;
