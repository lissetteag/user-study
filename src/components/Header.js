import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/header.css";

const Header = ({ name }) => {
  const { state, dispatch } = useAppContext();
  let home = state.homeActive;
  let survey = state.surveyActive;

  const alternate = () => {
    dispatch({ type: "navigate" });
  };

  const pathname = window.location.pathname;

  return (
    <div className="header">
      <h1>Survey something...</h1>
      <nav className="nav">
        <Link
          className={home ? "navActive" : "navHome"}
          to="/"
          onClick={() => {
            if (pathname !== "/") alternate();
          }}
        >
          Home
        </Link>
        |{" "}
        <Link
          className={survey ? "navActive" : "navSurvey"}
          to="survey"
          onClick={() => {
            if (pathname !== "/survey") alternate();
          }}
        >
          Survey
        </Link>
      </nav>
    </div>
  );
};

export default Header;
