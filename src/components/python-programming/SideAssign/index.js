import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import edit from "../../../images/edit.png";
import back from "../../../images/back.png";
import { useState } from "react";
import PYHW1 from "../../../documents/PYHW1.pdf";
import PYHW2 from "../../../documents/PYHW2.pdf";
import PYBONUS from "../../../documents/PYBONUS.pdf";

import easy from "../../../images/easy.png";
import med from "../../../images/med.png";
import hard from "../../../images/hard.png";

export default function AssUI() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);

  let percent = 0;
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
  };
  const handleClick3 = (event) => {
    setIsShown3((current) => !current);
  };

  const [isAlertVisable, setIsAlertVisable] = useState(false);
  const [isAlert2Visable, setIsAlert2Visable] = useState(false);
  const [iscolor1, setcolor1] = useState(0);
  const [iscolor2, setcolor2] = useState(false);

  const handleButtonClick2 = () => {
    percent = iscolor1 + 30;
    if (percent === 90) {
      setcolor2(true);
      percent = 100;
    }
    setcolor1(percent);
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
            style={{ backgroundColor: iscolor2 ? "green" : "white" }}
          >
            <br />
            11/18
          </div>
          <div className="progress">
            <div className="bar" style={{ height: `${iscolor1}%` }}></div>
          </div>
          <div>
            <button className="edbut" onClick={handleClick}>
              Homework 1<body> 6% </body> <img src={med} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut2" onClick={handleClick2}>
              Homework 2:<body> 6% </body>
              <img src={hard} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut3" onClick={handleClick3}>
              Bonus Assingment:<body> 0% </body>
              <img src={easy} className="pos" />
            </button>
          </div>
        </div>
        <nav></nav>
      </div>
      <div style={{ display: isShown ? "block" : "none" }}>
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
          <iframe className="viewPoint" src={PYHW1} />
        </div>
      </div>

      <div style={{ display: isShown2 ? "block" : "none" }}>
        <img src={back} className="screenblur" />
        <div className="addPOPUP">
          <button className="exitb" onClick={handleClick2}>
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
          <iframe className="viewPoint" src={PYHW2} />
        </div>
      </div>

      <div style={{ display: isShown3 ? "block" : "none" }}>
        <img src={back} className="screenblur" />
        <div className="addPOPUP">
          <button className="exitb" onClick={handleClick3}>
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
          <iframe className="viewPoint" src={PYBONUS} />
        </div>
      </div>
    </div>
  );
}
