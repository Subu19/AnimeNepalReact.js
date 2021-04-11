import React, { useEffect, useState } from "react";
import "../../css/browse/browse.css";

import "../../css/browse/animeContainner.css";
const BrowseSearch = () => {
  const [searchUrl, setSearchUrl] = useState("");
  // /browse/search?name=none&season=none&status=none&format=none&genre=none&adult=none&minEp=none&maxEp=none&adult=none&sort=none
  const addInSearch = (e) => {
    console.log(e);
  };
  return (
    <form className="searchContainner" action="/browse/search" method="GET">
      <div className="browseSearch">
        <input
          className="searchBar"
          type="text"
          placeholder="Search Anime"
          name="name"
        />
        <div className="searchOptions">
          <div className="searchOption">
            <h3>Season</h3>
            <select name="season">
              <option value="none">None</option>
              <option value="WINTER">Winter</option>
              <option value="SPRING">Spring</option>
              <option value="SUMMER">Summer</option>
              <option value="FALL">Fall</option>
            </select>
          </div>
          <div className="searchOption">
            <h3>Status</h3>
            <select name="status">
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
            <select name="format">
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
            <select name="genre">
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
            <select name="adult">
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
            ></input>
          </div>
          <div className="searchOption">
            <input
              name="maxEp"
              type="number"
              placeholder="Max Ep"
              className="epInput"
            ></input>
          </div>
          <div className="searchOption">
            <h3>Sort</h3>
            <select name="adult">
              <option value="none">None</option>
              <option value="POPULARITY_DESC">Populatiry</option>
              <option value="TRENDING_DESC">Trending</option>
              <option value="FAVOURITES_DESC">Favourate</option>
            </select>
          </div>
        </div>
      </div>
      <button className="searchBtn" type="submit">
        Search
      </button>
    </form>
  );
};

export default BrowseSearch;
