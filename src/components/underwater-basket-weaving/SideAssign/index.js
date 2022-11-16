import { Link, NavLink } from "react-router-dom";
import "../../underwater-basket-weaving/SideAssign/index.scss";
import edit from "../../../images/edit.png";
import back from "../../../images/back.png";
import { useState } from "react";

export default function AssUnder() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const [isAlertVisable, setIsAlertVisable] = useState(false);
  const [isAlert2Visable, setIsAlert2Visable] = useState(false);
  const [iscolor1, setcolor1] = useState(false);

  const handleButtonClick2 = () => {
    setcolor1(true);
    setIsAlert2Visable(true);
  };

  const handleButtonClick = () => {
    setIsAlertVisable(true);
  };

  setTimeout(() => {
    setIsAlertVisable(false);
  }, 7000);
  setTimeout(() => {
    setIsAlert2Visable(false);
  }, 7000);

  return (
    <div className="container">
      <div className="nav-goal">
        <div className="goalstitle">
          <h1>
            Assignments <br />
            ________
            <br />
          </h1>
          <div
            className="goalCircle"
            style={{ backgroundColor: iscolor1 ? "green" : "white" }}
          >
            <br />
            11/18
          </div>
          <div
            style={{ backgroundColor: iscolor1 ? "green" : "white" }}
            className="progress"
          ></div>
          <div>
            <button className="edbut" onClick={handleClick}>
              Assignment 1: <body>How To Weave A Basket</body>
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
          <button className="subBut" onClick={handleButtonClick2}>
            Submit Assignment
          </button>
          <button className="downBut" onClick={handleButtonClick}>
            {" "}
            Download{" "}
          </button>
          {isAlertVisable && (
            <div className="alert-container">
              {" "}
              <div className="alert-innner"> Downloaded! </div>
            </div>
          )}
          {isAlert2Visable && (
            <div className="alert-container2">
              {" "}
              <div className="alert-innner2">
                {" "}
                Assigment Submitted at 8:05PM!{" "}
              </div>
            </div>
          )}
          <iframe
            className="viewPoint"
            src="https://i.pinimg.com/736x/ad/b7/4a/adb74a1b1c8375317d6d8c4ae963fda7--hand-weaving-basket-weaving.jpg"
          />
        </div>
      </div>
    </div>
  );
}

//export default SideGoals;
