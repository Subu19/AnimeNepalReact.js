import React, { useState } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import NewsIcon from "../../assets/svg/newspaper.svg";
import BrowseIcon from "../../assets/svg/trending.svg";
import FeedIcon from "../../assets/svg/social-media.svg";
import ChatIcon from "../../assets/svg/chat.svg";
import MenuIcon from "../../assets/svg/menuIcon.svg";

const NavLinks = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    // anime({
    //   targets: ".navMenuContainner",
    //   height: 200,
    //   duration: 200,
    // });
    if (!menu) {
      anime({
        targets: ".navMenuContainner",
        height: 200,
        duration: 200,
        easing: "linear",
      });
      setMenu(true);
    } else {
      anime({
        targets: ".navMenuContainner",
        height: 0,
        duration: 200,
        easing: "linear",
      });
      setMenu(false);
    }
  };
  return (
    <div className="navLinks">
      <Link to="/" className="navLink">
        <img src={NewsIcon} alt=""></img>
        <span>Home</span>
      </Link>

      <Link to="/browse" className="navLink">
        <img src={BrowseIcon} alt=""></img>
        <span>Browse</span>
      </Link>

      <Link to="/feed" className="navLink">
        <img src={FeedIcon} alt=""></img>
        <span>Feed</span>
      </Link>

      <Link to="chat" className="navLink">
        <img src={ChatIcon} alt=""></img>
        <span>Chat</span>
      </Link>

      <div className="menuIcon" onClick={toggleMenu}>
        <img src={MenuIcon} className="navIcon" />
      </div>
      <div className="navMenuContainner">
        <Link to="/" className="menuLink" onClick={toggleMenu}>
          <img src={NewsIcon} alt=""></img>
          <div className="menuLinkName">Home</div>
        </Link>

        <Link to="/browse" className="menuLink" onClick={toggleMenu}>
          <img src={BrowseIcon} alt=""></img>
          <div className="menuLinkName">Browse</div>
        </Link>

        <Link to="/feed" className="menuLink" onClick={toggleMenu}>
          <img src={FeedIcon} alt=""></img>
          <div className="menuLinkName">Feed</div>
        </Link>

        <Link to="/chat" className="menuLink" onClick={toggleMenu}>
          <img src={ChatIcon} alt=""></img>
          <div className="menuLinkName">Chat</div>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
