import React from "react";
import "../../css/nav/nav.css";
import Logo from "./logo";
import NavLinks from "./navLinks";
import ClientInfo from "./clientInfo";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="logoContainner">
        <Logo />
      </div>
      <NavLinks />
      <ClientInfo></ClientInfo>
    </div>
  );
};

export default Navigation;
