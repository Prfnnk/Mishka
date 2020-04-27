import React from "react";
import cn from "classnames";

import "./styles/style.scss";

const Search = ({ setOpenMenu, openMenu }) => {
  return (
    <div className="search">
      <div className="search__img"></div>
      <div
        className={cn("search__mobile", { search__mobile_close: openMenu })}
        onClick={() => setOpenMenu(!openMenu)}
      ></div>
    </div>
  );
};
export default Search;
