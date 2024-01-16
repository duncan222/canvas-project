import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import ucLogo from "../../images/logo.png";
import profile from "../../images/Seth.png";
import courses from "../../images/book.png";
import cal from "../../images/cal.png";
import files from "../../images/files.png";
import help from "../../images/help.png";
import home from "../../images/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

// // 👇️ import css file

// const Sidebar = () => (
export default function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
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
          <button
            className="courseBut"
            onClick={handleClick}
            activeclassname="active"
            exact="True"
          >
            <img src={courses} className="sidePhoto3" alt="logo" />
          </button>
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
      <div
        className="coursePOPUP1"
        style={{ display: isShown ? "block" : "none" }}
      >
        <h1> Course Pages </h1>
        <Link className="Courses" to="/ui-design">
          <body className="c1">User Interface Design</body>
        </Link>
        <Link className="Courses" to="/python-programming">
          <body className="c1">Python Programming</body>
        </Link>
        <Link className="Courses" to="/underwater-basket-weaving">
          <body className="c1">Underwater Basket Weaving</body>
        </Link>
      </div>
    </div>
  );
}

// export default Sidebar;
