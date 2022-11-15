import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import edit from "../../images/edit.png";
import back from "../../images/back.png";
import GoalList from "../ToDoList";
import { useState } from "react";

export default function SideGoals() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="container">
      <div className="nav-goal">
        <div className="goalstitle">
          <h1>
            Goals <br />
            ________
            <br />
          </h1>
          <div className="goalCircle">
            <br />
            11/18
          </div>
          <div className="progress"></div>
          <div>
            <button className="edbut" onClick={handleClick}>
              <img src={edit} className="editBut" />
            </button>
          </div>
        </div>
        <nav></nav>
      </div>
      <div
        className="randoCOntainer"
        style={{ display: isShown ? "block" : "none" }}
      >
        <img src={back} className="screenblur" />
        <div className="addPOPUP">
          <button className="exitb" onClick={handleClick}>
            {" "}
            X{" "}
          </button>
          <GoalList />
        </div>
      </div>
    </div>
  );
}

//export default SideGoals;
