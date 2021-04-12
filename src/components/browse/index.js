import React, { useEffect, useState } from "react";
import "../../css/browse/browse.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import "../../css/browse/animeContainner.css";
import { SmallLoading } from "../loading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const BrowseSearch = (props) => {
  let currentQuery = useQuery();
  const { setCurrentUrl, setCLoading } = props;
  const [query, setQuery] = useState({});
  const history = useHistory();
  const [searchUrl, setSearchUrl] = useState("");
  useEffect(() => {
    let params = new URLSearchParams();
    query.name ? params.append("name", query.name) : params.delete("season");
    query.season ? params.set("season", query.season) : params.delete("season");
    query.status ? params.set("status", query.status) : params.delete("status");
    query.format ? params.set("format", query.format) : params.delete("format");
    query.genre ? params.set("genre", query.genre) : params.delete("genre");
    query.adult ? params.set("adult", query.adult) : params.delete("adult");
    query.minEp ? params.set("minEp", query.minEp) : params.delete("minEp");
    query.maxEp ? params.set("maxEp", query.maxEp) : params.delete("maxEp");
    query.sort ? params.set("sort", query.sort) : params.delete("sort");
    if (Object.keys(query).length > 0) {
      setSearchUrl("/browse/search?" + params.toString());
      console.log(searchUrl);
    }
  }, [query, history]);

  const preventSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="searchContainner"
      action="/browse/search"
      method="GET"
      onSubmit={(e) => preventSubmit(e)}
    >
      <div className="browseSearch">
        <input
          className="searchBar"
          type="text"
          placeholder="Search Anime"
          name="name"
          onChange={(e) =>
            setQuery((query) => {
              return { ...query, name: e.target.value };
            })
          }
        />
        <div className="searchOptions">
          <div className="searchOption">
            <h3>Season</h3>
            <select
              name="season"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, season: e.target.value };
                })
              }
            >
              <option value="none">None</option>
              <option value="WINTER">Winter</option>
              <option value="SPRING">Spring</option>
              <option value="SUMMER">Summer</option>
              <option value="FALL">Fall</option>
            </select>
          </div>
          <div className="searchOption">
            <h3>Status</h3>
            <select
              name="status"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, status: e.target.value };
                })
              }
            >
              <option value="none">None</option>
              <option value="RELEASING">Airing</option>
              <option value="FINISHED">Finished</option>
              <option value="NOT_YET_RELEASED">UpComing</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="HIATUS">HIATUS</option>
            </select>
          </div>
          <div className="searchOption">
            <h3>Format</h3>
            <select
              name="format"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, format: e.target.value };
                })
              }
            >
              <option value="none">None</option>
              <option value="TV">Tv</option>
              <option value="TV_SHORT">Tv Short</option>
              <option value="MOVIE">Movie</option>
              <option value="SPECIAL">Special</option>
              <option value="OVA">OVA</option>
            </select>
          </div>
          <div className="searchOption">
            <h3>Genre</h3>
            <select
              name="genre"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, genre: e.target.value };
                })
              }
            >
              <option value="none">None</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Supernatural">Magic</option>
              <option value="Drama">Drama</option>
              <option value="Adventure">Adventure</option>
              <option value="Slice of Life">Slice of Life</option>
              <option value="Psychological">Psychological</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Thriller">Thriller</option>
              <option value="Horror">Horror</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sports">Sports</option>
              <option value="Mystery">Mystery</option>
              <option value="Ecchi">Ecchi</option>
            </select>
          </div>
          <div className="searchOption">
            <h3>Adult</h3>
            <select
              name="adult"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, adult: e.target.value };
                })
              }
            >
              <option value="none">All</option>
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
          <div className="searchOption">
            <input
              name="minEp"
              type="number"
              placeholder="Min Ep"
              className="epInput"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, minEp: e.target.value };
                })
              }
            ></input>
          </div>
          <div className="searchOption">
            <input
              name="maxEp"
              type="number"
              placeholder="Max Ep"
              className="epInput"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, maxEp: e.target.value };
                })
              }
            ></input>
          </div>
          <div className="searchOption">
            <h3>Sort</h3>
            <select
              name="sort"
              onChange={(e) =>
                setQuery((query) => {
                  return { ...query, sort: e.target.value };
                })
              }
            >
              <option value="none">None</option>
              <option value="POPULARITY_DESC">Populatiry</option>
              <option value="TRENDING_DESC">Trending</option>
              <option value="FAVOURITES_DESC">Favourate</option>
            </select>
          </div>
        </div>
        <Link
          to={searchUrl}
          onClick={() => {
            setCurrentUrl(searchUrl);
            setCLoading(true);
          }}
          className="searchBtn"
        >
          Search
        </Link>
      </div>
    </form>
  );
};

export default BrowseSearch;
