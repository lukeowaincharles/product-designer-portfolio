import React from "react";
import HeaderData from "../../data/HeaderData.json";

function Header() {
  const HEADERDATA = HeaderData;

  return (
    <header className="header">
      <p className="h2 header__title text text--pink">
        {HEADERDATA[0].name}
        <span className="divider"></span>
        {HEADERDATA[0].subText}
      </p>
    </header>
  );
}

export default Header;
