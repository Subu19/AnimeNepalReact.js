import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Browse from "../pages/browse";
import Search from "../pages/search";
import Feed from "../pages/feed";
import Chat from "../pages/chat";
import Error from "../pages/error";
import Navigation from "../components/nav/nav";

function Path() {
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
            <Browse />
          </Route>
          <Route exact path="/browse/search">
            <Search />
          </Route>
          <Route exact path="/browse/:list">
            <Browse />
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
