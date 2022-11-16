import { Link, NavLink } from "react-router-dom";
import edit from "../../images/edit.png";
import back from "../../images/back.png";
import GoalList from "../ToDoList";
import { useState } from "react";
import "./thedex.scss";

export default function SideGoalsMain() {
  const [isShown, setIsShown] = useState(false);
  const [isB1, setB1] = useState(false);
  const [isB2, setB2] = useState(false);
  const [isB3, setB3] = useState(false);
  const [isColor, setColor] = useState(0);
  const [isColor2, setColor2] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleB1 = (event) => {
    let percent = 0;
    percent = isColor + 30;
    if (percent == 90) {
      percent = 100;
      setColor2(true);
    }
    setColor(percent);
    setB1((current) => !current);
  };
  const handleB2 = (event) => {
    let percent = 0;
    percent = isColor + 30;
    if (percent == 90) {
      percent = 100;
      setColor2(true);
    }
    setColor(percent);
    setB2((current) => !current);
  };
  const handleB3 = (event) => {
    let percent = 0;
    percent = isColor + 30;
    if (percent == 90) {
      percent = 100;
      setColor2(true);
    }
    setColor(percent);
    setB3((current) => !current);
  };

  return (
    <div className="container">
      <div className="nav-goal">
        <div className="goalstitle">
          <h1>
            Goals <br />
            ________
            <br />
            <button
              style={{ display: isB1 ? "none" : "block" }}
              className="goal1"
              onClick={handleB1}
            >
              {" "}
              <body> Study For Exam </body>
              <div className="circle" />
            </button>
            <button
              style={{ display: isB2 ? "none" : "block" }}
              className="goal2"
              onClick={handleB2}
            >
              {" "}
              <body>
                {" "}
                Edit Work On <br /> Project 2
              </body>
              <div className="circle2" />
            </button>
            <button
              style={{ display: isB3 ? "none" : "block" }}
              className="goal3"
              onClick={handleB3}
            >
              {" "}
              <body>
                {" "}
                Edit Project 2 <br /> Documentation{" "}
              </body>
              <div className="circle3" />
            </button>
          </h1>
          <div
            className="goalCircle1"
            style={{ backgroundColor: isColor2 ? "green" : "white" }}
          >
            <br />
            11/18
          </div>
          <div className="progress1">
            {" "}
            <div className="bar1" style={{ height: `${isColor}%` }}></div>
          </div>
          <div>
            <button className="edbutt" onClick={handleClick}>
              <img src={edit} className="editBut" />
            </button>
          </div>
        </div>
        <nav></nav>
      </div>
      <div
        className="randoCOntainer1"
        style={{ display: isShown ? "block" : "none" }}
      >
        <img src={back} className="screenblur1" />
        <div className="addPOPUP1">
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
