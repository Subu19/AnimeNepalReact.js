import { Link, useLocation } from "react-router-dom";
import { useFetchAnimeList } from "../../hooks/fetchAnimeList";
import { PreLoadAnime } from "./preLoad";
import addSvg from "../../assets/svg/add.svg";
import { useEffect, useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const SearchContainner = () => {
  const [params, setParams] = useState({});
  let query = useQuery();
  useEffect(() => {
    if (query.get("name")) {
      setParams((params) => {
        const search = query.get("name");
        return { ...params, search: search };
      });
    }
    if (query.get("status")) {
      setParams((params) => {
        const genre = query.get("status");
        return { ...params, status: genre };
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
  }, []);

  const { loading, list } = useFetchAnimeList(params);

  return (
    <div className="browseAnimeContainner">
      <div className="browseAnimeTitle">Top Anime Search</div>
      <div className="browseAnimeList">
        {loading ? (
          <PreLoadAnime items={20} />
        ) : (
          list.map((anime, i) => {
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

export default SearchContainner;