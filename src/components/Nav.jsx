import React from "react";
import "remixicon/fonts/remixicon.css";

const Nav = () => {
  const navigation = [
    "Platforms",
    "Partnerships",
    "Use cases",
    "About",
    "News",
    "Contact",
  ];

  return (
    <nav>
      <div className="leftNav">
        <div className="logo">
          <div className="innerC"></div>
        </div>
        <p>twinbru</p>
      </div>
      <div className="centerNav">
        {navigation.map((item, i) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="rightNav">
        <i class="ri-menu-4-line"></i>
      </div>
    </nav>
  );
};

export default Nav;
