import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import ucLogo from "../../images/logo.png";
import profile from "../../images/profile.png";
import courses from "../../images/book.png";
import cal from "../../images/cal.png";
import files from "../../images/files.png";
import help from "../../images/help.png";
import home from "../../images/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={ucLogo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <img src={home} className="sidePhoto3" alt="" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="profile-link"
        to="/profile"
      >
        <img src={profile} className="sidePhoto4" alt="" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="courses-link"
        to="/courses"
      >
        <img src={courses} className="sidePhoto3" alt="logo" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="cal-link"
        to="/cal"
      >
        <img src={cal} className="sidePhoto3" alt="logo" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="files-link"
        to="/files"
      >
        <img src={files} className="sidePhoto3" alt="logo" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="help-link"
        to="/help"
      >
        <img src={help} className="sidePhoto3" alt="logo" />
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
