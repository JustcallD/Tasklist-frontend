import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerClassName = `${styles.Container} ${
    menuOpen ? styles.grayBackground : ""
  }`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={containerClassName}>
      <div className={styles.logo}>
        <Link to={"/"}>Logo</Link>
        <div className={styles.navMenu} onClick={toggleMenu}>
          <FaBars className={styles.menuIcon} />
        </div>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.navLink}>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to={"/signup"}>SignUp</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to={"/tasks"}>tasks</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
