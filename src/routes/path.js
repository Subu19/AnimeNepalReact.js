import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Browse from "../pages/browse";
import Search from "../pages/search";
import Feed from "../pages/feed";
import Chat from "../pages/chat";
import Error from "../pages/error";
import Navigation from "../components/nav/nav";

function Path() {
  const [containnerLoading, setContainnerLoading] = useState(false);
  return (
    <>
      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Browse
              containnerLoading={containnerLoading}
              setContainnerLoading={setContainnerLoading}
            />
          </Route>
          <Route exact path="/browse/search">
            <Search
              containnerLoading={containnerLoading}
              setContainnerLoading={setContainnerLoading}
            />
          </Route>
          <Route exact path="/browse/:list">
            <Browse
              containnerLoading={containnerLoading}
              setContainnerLoading={setContainnerLoading}
            />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Path;
