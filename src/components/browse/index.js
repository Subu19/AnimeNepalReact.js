import React, { useEffect } from "react";
import "../../css/browse/browse.css";
import "../../css/browse/animeContainner.css";
const BrowseSearch = () => {
  return (
    <div className="browseSearch">
      <input className="searchBar" type="text" placeholder="Search Anime" />
      <button className="searchBtn">Search</button>
    </div>
  );
};

export default BrowseSearch;
