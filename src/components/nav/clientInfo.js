import React from "react";
import testProfile from "../../assets/image/subuPfp.png";
const ClientInfo = () => {
  return (
    <div className="clientInfo">
      <div className="clientPfp">
        <img src={testProfile} alt="" />
      </div>
      <div className="clientName">Subu</div>
    </div>
  );
};

export default ClientInfo;
