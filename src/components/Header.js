import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SportSee</p>
      </div>
      <Link to="/"> Accueil</Link>
      <Link to="#"> Profil</Link>
      <Link to="#"> Réglage</Link>
      <Link to="#"> Communauté</Link>
    </div>
  );
};
export default Nav;
