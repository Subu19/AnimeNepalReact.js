import React from "react";
import { Link } from "react-router-dom";

import NewsIcon from "../../assets/svg/newspaper.svg";
import BrowseIcon from "../../assets/svg/trending.svg";
import FeedIcon from "../../assets/svg/social-media.svg";
import ChatIcon from "../../assets/svg/chat.svg";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <Link to="/" className="navLink">
        <img src={NewsIcon}></img>
        <span>Home</span>
      </Link>

      <Link to="/browse" className="navLink">
        <img src={BrowseIcon}></img>
        <span>Browse</span>
      </Link>

      <Link to="/feed" className="navLink">
        <img src={FeedIcon}></img>
        <span>Feed</span>
      </Link>

      <Link to="chat" className="navLink">
        <img src={ChatIcon}></img>
        <span>Chat</span>
      </Link>
    </div>
  );
};

export default NavLinks;
