import "./index.scss";
import React from "react";
import folderImg from "../../images/files.png";
import arrow from "../../images/arrow-down.png";
import { useState } from "react";
import back from "../../images/back.png";
import ass1 from "../../documents/assignment_01.pdf";
import ass2 from "../../documents/assignment_02.pdf";
import ass3 from "../../documents/assignment_03.pdf";
import ass4 from "../../documents/assignment_04.pdf";
import ass5 from "../../documents/assignment_05.pdf";
import UIsyll from "../../documents/UISyll.pdf";
import UIg from "../../documents/Grading.pdf";
import UIC1 from "../../documents/UIclass1.pdf";
import UIC2 from "../../documents/UIclass2.pdf";
import UIC3 from "../../documents/UIclass3.pdf";
import UIC4 from "../../documents/UIclass4.pdf";
import UIC5 from "../../documents/UIclass5.pdf";
import UIT1 from "../../documents/UItort1.pdf";
import UIT2 from "../../documents/UItort2.pdf";
import UIP1 from "../../documents/UIproject1.pdf";

import UIPp1 from "../../documents/UIP1.pdf";
import UIP2 from "../../documents/UIP2.pdf";
import UIP3 from "../../documents/UIP3.pdf";
import UIP4 from "../../documents/UIP4.pdf";
import UIP5 from "../../documents/UIP5.pdf";

import PYHW1 from "../../documents/PYHW1.pdf";
import PYHW2 from "../../documents/PYHW2.pdf";
import PYHW3 from "../../documents/PYBONUS.pdf";

import easy from "../../images/easy.png";
import med from "../../images/med.png";
import hard from "../../images/hard.png";

class App extends React.Component {
  displayFolders() {}

  displayFiles() {}

  displayFile() {}

  displayAssignment() {}

  submitAssignment() {}

  state = {
    isShown: "none",
    isShown2: "none",
    isShown3: "none",
    isShown4: "none",
    isShown5: "none",
    UISyll: "none",
    UIgrade: "none",
    UIclass1: "none",
    UIclass2: "none",
    UItort1: "none",
    UIclass3: "none",
    UIproject1: "none",
    UIclass4: "none",
    UItort2: "none",
    UIclass5: "none",
    UIPpp1: "none",
    UIPp2: "none",
    UIPp3: "none",
    UIPp4: "none",
    UIPp5: "none",
    PY1: "none",
    PY2: "none",
    PY3: "none",
    UWBHW: "none",
    UWBSyl: "none",
    PYSyl: "none",

    isAlert2Viasble: false,
    isAlertViasble: false,
  };

  render() {
    return (
      <div className="files-page">
        <h1 className="header">
          <u className="ul">
            Files__________________________________________________________
          </u>
          <button className="addButton">Add Folder</button>
        </h1>

        <div id="ui" className="folderCont">
          <div id="uiclass" className="classFolder">
            <img src={folderImg}></img>User Interface Design
            <button className="arrow" onclick={this.displayFolders("ui")}>
              <img src={arrow}></img>
            </button>
          </div>
          <div
            id="uiinfo"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Course Info
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UISyll: "block" })}
          >
            Syllabus
          </button>
          {/* /*syllbus  */}
          <div className="shownQ" style={{ display: `${this.state.UISyll}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UISyll: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIsyll} />
            </div>
          </div>

          <button
            className="fileExtend"
            onClick={() => this.setState({ UIgrade: "block" })}
          >
            Grading
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIgrade}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIgrade: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIg} />
            </div>
          </div>
          <div
            id="uiassign"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Assignments
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown: "block" })}
          >
            Assignment 1
          </button>
          <div className="shownQ" style={{ display: `${this.state.isShown}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ isShown: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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

          {/* //assignment two */}
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown2: "block" })}
          >
            Assignment 2
          </button>
          <div className="shownQ" style={{ display: `${this.state.isShown2}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ isShown2: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          {/* //assignment 3 */}
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown3: "block" })}
          >
            Assignment 3
          </button>
          <div className="shownQ" style={{ display: `${this.state.isShown3}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ isShown3: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          {/* //assignment 4 */}
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown4: "block" })}
          >
            Assignment 4
          </button>
          <div className="shownQ" style={{ display: `${this.state.isShown4}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ isShown4: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          {/* // assignment 5 */}
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown5: "block" })}
          >
            Assignment 5
          </button>
          <div className="shownQ" style={{ display: `${this.state.isShown5}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ isShown5: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="subBut"
                onClick={() =>
                  this.setState({
                    isAlert2Viasble: !this.state.isAlert2Viasble,
                  })
                }
              >
                Submit Assignment
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          {/* break */}
          <div
            id="uipage"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Pages
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass1: "block" })}
          >
            In-class 1
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIclass1}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIclass1: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIC1} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass2: "block" })}
          >
            In-class 2
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIclass2}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIclass2: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIC2} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UItort1: "block" })}
          >
            Tutorial 1
          </button>
          <div className="shownQ" style={{ display: `${this.state.UItort1}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UItort1: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIT1} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass3: "block" })}
          >
            In-class 3
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIclass3}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIclass3: "none" })}
              >
                {" "}
                X{" "}
              </button>

              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIC3} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIproject1: "block" })}
          >
            Project 1
          </button>
          <div
            className="shownQ"
            style={{ display: `${this.state.UIproject1}` }}
          >
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIproject1: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIP1} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass4: "block" })}
          >
            In-class 4
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIclass4}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIclass4: "none" })}
              >
                {" "}
                X{" "}
              </button>

              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIC4} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UItort2: "block" })}
          >
            Tutorial 2
          </button>
          <div className="shownQ" style={{ display: `${this.state.UItort2}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UItort2: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIT2} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass5: "block" })}
          >
            In-class 5
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIclass5}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIclass5: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIC5} />
            </div>
          </div>
          <div
            id="uipres"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Presentations
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIPpp1: "block" })}
          >
            Intro
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIPpp1}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIPpp1: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIPp1} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIPp2: "block" })}
          >
            Usability
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIPp2}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIPp2: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIP2} />
            </div>
          </div>

          <button
            className="fileExtend"
            onClick={() => this.setState({ UIPp3: "block" })}
          >
            Norman Principals Discoverability
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIPp3}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIPp3: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIP3} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIPp4: "block" })}
          >
            The user P1
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIPp4}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIPp4: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIP4} />
            </div>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIPp5: "block" })}
          >
            The user P2
          </button>
          <div className="shownQ" style={{ display: `${this.state.UIPp5}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UIPp5: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={UIP5} />
            </div>
          </div>
        </div>
        <br />

        <div id="python" className="folderCont">
          <div id="pythonclass" className="classFolder">
            <img src={folderImg}></img>Python Programming
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <div
            id="pythoninfo"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Course Info
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ PYSyl: "block" })}
          >
            Syllabus
          </button>
          <div className="shownQ" style={{ display: `${this.state.PYSyl}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ PYSyl: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
                src="https://cdn.slidesharecdn.com/ss_thumbnails/pythoncoursesyllabus-181006131348-thumbnail-4.jpg?cb=1661856212"
              />
            </div>
          </div>
          <div
            id="pythonassign"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Assignments
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ PY1: "block" })}
          >
            Homework 1
          </button>
          <div className="shownQ" style={{ display: `${this.state.PY1}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ PY1: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          <button
            className="fileExtend"
            onClick={() => this.setState({ PY2: "block" })}
          >
            Homework 2
          </button>
          <div className="shownQ" style={{ display: `${this.state.PY2}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ PY2: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          <button
            className="fileExtend"
            onClick={() => this.setState({ PY3: "block" })}
          >
            Coding Extra Credit
          </button>
          <div className="shownQ" style={{ display: `${this.state.PY3}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ PY3: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
                <div className="alert-container2">
                  {" "}
                  <div className="alert-innner2">
                    {" "}
                    Assigment Submitted at 8:05PM!{" "}
                  </div>
                </div>
              )}
              <iframe className="viewPoint" src={PYHW3} />
            </div>
          </div>
          <div
            id="pythonpage"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Pages (None of These Exist)
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button className="fileExtend">Intro to Python</button>
          <button className="fileExtend">Conditionals / Loops</button>
          <button className="fileExtend">Functions</button>
          <button className="fileExtend">Data Structures</button>
          <div
            id="pythonpres"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Presentations
          </div>
        </div>
        <br />

        <div id="ubw" className="folderCont">
          <div id="ubwclass" className="classFolder">
            <img src={folderImg}></img>Underwater Basket Weaving
            <button className="arrow" onclick={this.displayFolders("ubw")}>
              <img src={arrow}></img>
            </button>
          </div>
          <div
            id="ubwinfo"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Course Info
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UWBSyl: "block" })}
          >
            Syllabus
          </button>
          <div className="shownQ" style={{ display: `${this.state.UWBSyl}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UWBSyl: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
                src="https://image3.slideserve.com/6889008/underwater-basket-weaving-101-syllabus-l.jpg"
              />
            </div>
          </div>
          <div
            id="ubwassign"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Assignments
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UWBHW: "block" })}
          >
            Weave-A-Basket Homework
          </button>
          <div className="shownQ" style={{ display: `${this.state.UWBHW}` }}>
            <div className="addPOPUP">
              <button
                className="exitb"
                onClick={() => this.setState({ UWBHW: "none" })}
              >
                {" "}
                X{" "}
              </button>
              <button
                className="downBut"
                onClick={() =>
                  this.setState({
                    isAlertViasble: !this.state.isAlertViasble,
                  })
                }
              >
                {" "}
                Download{" "}
              </button>
              {this.state.isAlertViasble && (
                <div className="alert-container">
                  {" "}
                  <div className="alert-innner"> Downloaded! </div>
                </div>
              )}
              {this.state.isAlert2Viasble && (
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
          <div
            id="ubwpage"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Pages (none of these exist)
            <button className="arrow">
              <img src={arrow}></img>
            </button>
          </div>
          <button className="fileExtend">Basket Materials</button>
          <button className="fileExtend">Weaving Techniques</button>
          <button className="fileExtend">How to Breathe Underwater</button>
          <div
            id="ubwpres"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Presentations
          </div>
        </div>
        <br />

        <div id="p1" className="folderCont">
          <div id="pf1" className="personalFolder">
            <img src={folderImg}></img>Study 4 UI Exam
            <button className="arrow" onclick={this.displayFolders("pf1")}>
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass4: "block" })}
          >
            In-Class 4
          </button>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UIclass5: "block" })}
          >
            In-Class 5
          </button>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UItort2: "block" })}
          >
            Tutorial 2
          </button>
        </div>
        <br />

        <div id="p2" className="folderCont">
          <div id="pf2" className="personalFolder">
            <img src={folderImg}></img>Upcoming Assignments
            <button className="arrow" onclick={this.displayFolders("pf2")}>
              <img src={arrow}></img>
            </button>
          </div>
          <button
            className="fileExtend"
            onClick={() => this.setState({ isShown5: "block" })}
          >
            UI Assignment 5
          </button>
          <button
            className="fileExtend"
            onClick={() => this.setState({ PY2: "block" })}
          >
            Python Homework 2
          </button>
          <button
            className="fileExtend"
            onClick={() => this.setState({ UWBHW: "block" })}
          >
            Weave-A-Basket Homework
          </button>
        </div>
      </div>
    );
  }
}

export default App;
