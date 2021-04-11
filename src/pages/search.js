import React from "react";
import BrowseSearch from "../components/browse";
import "../css/browse/mobile.css";
import SearchContainner from "../components/browse/search";

function Search() {
  return (
    <div className="main">
      <BrowseSearch></BrowseSearch>
      <SearchContainner></SearchContainner>
    </div>
  );
}

export default Search;
