import React from "react";
import "../styles/navbar.css";

const NavBar = props => {
  const { onAlert } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div className="navbar-btn">
          <button onClick={onAlert} type="button" className="btn btn-default">
            ARJ
          </button>
        </div>
        <h5 className="navbar-brand">
          Site under construction, check back later!
        </h5>
      </div>
    </nav>
  );
};

export default NavBar;
