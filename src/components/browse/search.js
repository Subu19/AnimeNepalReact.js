import { Link, useHistory, useLocation } from "react-router-dom";
import { useFetchAnimeList } from "../../hooks/fetchAnimeList";
import { PreLoadAnime } from "./preLoad";
import addSvg from "../../assets/svg/add.svg";
import { useEffect, useState } from "react";
import { showAnimeDetail } from "./hoverEffect";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SearchContainner = (props) => {
  const { currentUrl } = props;
  const [params, setParams] = useState({});
  let query = useQuery();
  const [cLoading, setCLoading] = useState(true);
  useEffect(() => {
    setParams({});
    if (query.get("name")) {
      setParams((params) => {
        const search = query.get("name");
        return { ...params, search: search };
      });
    }
    if (query.get("status")) {
      setParams((params) => {
        const status = query.get("status");
        return { ...params, status: status };
      });
    }
    if (query.get("genre")) {
      setParams((params) => {
        const genre = query.get("genre");
        return { ...params, genre: genre };
      });
    }
    if (query.get("season")) {
      setParams((params) => {
        const season = query.get("season");
        return { ...params, season: season };
      });
    }
    if (query.get("maxEp")) {
      setParams((params) => {
        const maxEp = query.get("maxEp");
        return { ...params, maxEp: maxEp };
      });
    }
    if (query.get("minEp")) {
      setParams((params) => {
        const minEp = query.get("minEp");
        return { ...params, minEp: minEp };
      });
    }
    if (query.get("adult")) {
      setParams((params) => {
        const adult = query.get("adult");
        return { ...params, adult: adult };
      });
    }
    if (query.get("sort")) {
      setParams((params) => {
        const sort = query.get("sort");
        return { ...params, sort: sort };
      });
    }
    if (query.get("format")) {
      setParams((params) => {
        const format = query.get("format");
        return { ...params, format: format };
      });
    }
    if (query.get("num")) {
      setParams((params) => {
        const num = query.get("num");
        return { ...params, num };
      });
    } else {
      setParams((params) => {
        const num = 100;
        return { ...params, num };
      });
    }
    setCLoading(true);
  }, [currentUrl]);
  useEffect(() => {
    console.log(params);
  }, [params]);
  const { loading, list } = useFetchAnimeList(params);
  useEffect(() => {
    if (list.length > 2) {
      setCLoading(false);
      console.log(" changing");
    }
  }, [list]);
  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">
        Anime Search {params.search ? "for " + params.search : ""}
      </div>
      <div className="browseAnimeList">
        {cLoading ? (
          <PreLoadAnime items={20} />
        ) : (
          list.map((anime, i) => {
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
                  <div className="hoverFormat">{anime.format}</div>
                  <div className="hoverGenres">
                    {anime.genres
                      ? anime.genres.map((genre, i) => {
                          return (
                            <div
                              key={i + "hoverGenre" + anime.id}
                              className="hoverGenre"
                            >
                              {genre}
                            </div>
                          );
                        })
                      : "=_="}
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
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchContainner;
