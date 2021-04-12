import React, { useEffect, useState } from "react";
import BrowseSearch from "../components/browse";
import "../css/browse/mobile.css";
import SearchContainner from "../components/browse/search";

function Search(props) {
  const [currentUrl, setCurrentUrl] = useState("");
  const { containnerLoading, setContainnerLoading } = props;
  return (
    <div className="main">
      <BrowseSearch
        setCurrentUrl={setCurrentUrl}
        currentUrl={currentUrl}
        cLoading={containnerLoading}
        setCLoading={setContainnerLoading}
      ></BrowseSearch>
      <SearchContainner
        currentUrl={currentUrl}
        cLoading={containnerLoading}
        setCLoading={setContainnerLoading}
      ></SearchContainner>
    </div>
  );
}

export default Search;
