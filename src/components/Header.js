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
      <div className="img">
      <img src="gen/default-monochrome-black.svg" height={80} width={200} alt="ygfytfytt"/>
      </div>
      {/* <h1>image</h1> */}
      
      <nav className="nav">
        <Link
          className={home ? "navActive" : "navHome"}
          to={pathname === "/" ? "/" : "/"}
          onClick={() => {
            if (pathname === "/") {
            } else alternate();
          }}
        >
          Home
        </Link>
        |{" "}
        <Link
          className={survey ? "navActive" : "navSurvey"}
          to={pathname === "/" ? "/" : "/survey"}
        >
          Survey
        </Link>
      </nav>
    </div>
  );
};

export default Header;
