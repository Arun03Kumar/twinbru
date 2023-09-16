import React from "react";
import logo from "/partners/logo.svg";
import logo1 from "/partners/logo1.svg";
import logo2 from "/partners/logo2.svg";
import logo3 from "/partners/logo3.svg";
import logo4 from "/partners/logo4.svg";
import logo5 from "/partners/logo5.svg";

const Partner = () => {
  const logoArr = [logo, logo1, logo2, logo3, logo4, logo5];
  return (
    <div className="partnerLogoContainer">
      {logoArr.map((item, i) => (
        <div className="partnerLogo">
          <img src={item} />
        </div> 
      ))}
    </div>
  );
};

export default Partner;
