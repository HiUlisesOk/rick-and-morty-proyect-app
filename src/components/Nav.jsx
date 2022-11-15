import React from "react";
import SearchBar from "./SearchBar";
import styles from "./css/Nav.module.css";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = (props) => {
  const [homeIcon, setHomeIcon] = useState("icon-menu");
  const [movilNav, setMovilNav] = useState(styles.closedNav);
  const [display, setDisplay] = useState(styles.hideMe);
  const handleClick = (e) => {
    if (homeIcon === "icon-menu") {
      setHomeIcon("icon-close");
      setMovilNav(styles.openNav);
      setDisplay(styles.showMe);
    } else {
      setHomeIcon("icon-menu");
      setMovilNav(styles.closedNav);
      setDisplay(styles.hideMe);
    }
  };
  return (
    <>
      <div className={`${styles.NavBar} ${movilNav}`}>
        <div className={styles.menuList}>
          <div>
            <Link to="/home">
              <div className={styles.Logo}></div>
            </Link>
            <span onClick={handleClick} className={`${homeIcon}`}></span>
          </div>
          <div className={`${display}`}>
            <SearchBar onSearch={props.onSearch} />
          </div>
          <div className={`${display}`}>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className={`${display}`}>
            <NavLink to="/favorites">Favoritos</NavLink>
          </div>

          <div className={`${display}`}>
            <Link onClick={props.randomCharacter}>Random</Link>
          </div>
          <div className={`${display}`}>
            <NavLink to="/About">About</NavLink>
          </div>
          <div className={`${display}`}>
            <NavLink to="/Pagination">Pages</NavLink>
          </div>
          <div className={`${display} ${styles.username}`}>
            <span>{props.username}</span>
          </div>
          <div className={`${display}`}>
            <button
              className={`${styles.myButton} ${styles.logout}`}
              onClick={props.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
