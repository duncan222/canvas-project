import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import edit from "../../../images/edit.png";
import back from "../../../images/back.png";
import { useState } from "react";
import ass1 from "../../../documents/assignment_01.pdf";
import ass2 from "../../../documents/assignment_02.pdf";
import ass3 from "../../../documents/assignment_03.pdf";
import ass4 from "../../../documents/assignment_04.pdf";
import ass5 from "../../../documents/assignment_05.pdf";
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
  const handleClick4 = (event) => {
    setIsShown4((current) => !current);
  };
  const handleClick5 = (event) => {
    setIsShown5((current) => !current);
  };

  const [isAlertVisable, setIsAlertVisable] = useState(false);
  const [isAlert2Visable, setIsAlert2Visable] = useState(false);
  const [iscolor1, setcolor1] = useState(0);
  const [iscolor2, setcolor2] = useState(false);

  const handleButtonClick2 = () => {
    percent = iscolor1 + 20;
    if (percent === 100) {
      setcolor2(true);
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
              Assignment 1: <body> 3% </body> <img src={easy} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut2" onClick={handleClick2}>
              Assignment 2:<body> 3% </body>
              <img src={hard} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut3" onClick={handleClick3}>
              Assignment 3:<body> 1% </body>
              <img src={easy} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut4" onClick={handleClick4}>
              Assignment 4:<body> 7% </body>
              <img src={med} className="pos" />
            </button>
          </div>
          <div>
            <button className="edbut5" onClick={handleClick5}>
              Assignment 5:<body> 1% </body>
              <img src={hard} className="pos" />
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
          <iframe className="viewPoint" src={ass1} />
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
          <iframe className="viewPoint" src={ass2} />
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
          <iframe className="viewPoint" src={ass3} />
        </div>
      </div>

      <div style={{ display: isShown4 ? "block" : "none" }}>
        <img src={back} className="screenblur" />
        <div className="addPOPUP">
          <button className="exitb" onClick={handleClick4}>
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
          <iframe className="viewPoint" src={ass4} />
        </div>
      </div>

      <div style={{ display: isShown5 ? "block" : "none" }}>
        <img src={back} className="screenblur" />
        <div className="addPOPUP">
          <button className="exitb" onClick={handleClick5}>
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
          <iframe className="viewPoint" src={ass5} />
        </div>
      </div>
    </div>
  );
}

//export default SideGoals;
