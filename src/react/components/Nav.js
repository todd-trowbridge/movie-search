import React from "react";
import { Link } from "react-router-dom";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

function Nav() {
  return (
    <div>
      <br />
      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeTwoToneIcon color="primary" fontSize="large" />
      </Link>
      <Link to="/favorites" style={{ textDecoration: "none" }}>
        <FavoriteTwoToneIcon color="primary" fontSize="large" />
      </Link>
      <br />
      <br />
    </div>
  );
}

export default Nav;
