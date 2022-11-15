import "./index.scss";
import React from "react";
import folderImg from "../../images/files.png";
import arrow from "../../images/arrow-down.png";

class App extends React.Component {
  displayFolders() {
    // adjust phase
    // visiblity phase
    // flip arrow
  }

  displayFiles() {
    // adjust phase
    // visibility phase
    // flip arrows
  }

  displayFile() {}

  displayAssignment() {}

  submitAssignment() {}

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
          <button className="fileExtend">Syllabus</button>
          <button className="fileExtend">Grading</button>
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
          <button className="fileExtend">Assignment 1</button>
          <button className="fileExtend">Assignment 2</button>
          <button className="fileExtend">Assignment 3</button>
          <button className="fileExtend">Assignment 4</button>
          <button className="fileExtend">Assignment 5</button>
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
          <button className="fileExtend">In-class 1</button>
          <button className="fileExtend">In-class 2</button>
          <button className="fileExtend">Tutorial 1</button>
          <button className="fileExtend">In-class 3</button>
          <button className="fileExtend">Project 1</button>
          <button className="fileExtend">In-class 4</button>
          <button className="fileExtend">Tutorial 2</button>
          <button className="fileExtend">In-class 5</button>
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
          <button className="fileExtend">Intro</button>
          <button className="fileExtend">Usability</button>
          <button className="fileExtend">
            Norman Principals Discoverability
          </button>
          <button className="fileExtend">The user P1</button>
          <button className="fileExtend">The user P2</button>
          <button className="fileExtend">The user P3</button>
          <button className="fileExtend">Sketching P1</button>
          <button className="fileExtend">Sketching P2</button>
          <button className="fileExtend">Web P1</button>
          <button className="fileExtend">HTML CSS</button>
          <button className="fileExtend">CSS</button>
          <button className="fileExtend">Javascript P1</button>
          <button className="fileExtend">Javascript P2</button>
          <button className="fileExtend">Javascript P3</button>
        </div>
        <br />

        <div id="python" className="folderCont">
          <div id="pythonclass" className="classFolder">
            <img src={folderImg}></img>Python Programming
            <button className="arrow" onclick={this.displayFolders("python")}>
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
          <button className="fileExtend">Syllabus</button>
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
          <button className="fileExtend">Homework 1</button>
          <button className="fileExtend">Homework 2</button>
          <button className="fileExtend">Coding Extra Credit</button>
          <div
            id="pythonpage"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Pages
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
          <button className="fileExtend">Syllabus</button>
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
          <button className="fileExtend">Weave-A-Basket Homework</button>
          <div
            id="ubwpage"
            className="folderExtend"
            onclick={this.displayFiles()}
          >
            Pages
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
          <button className="fileExtend">In-Class 4</button>
          <button className="fileExtend">In-Class 5</button>
          <button className="fileExtend">Tutorial 2</button>
          <button className="fileExtend">HTML CSS</button>
          <button className="fileExtend">CSS</button>
          <button className="fileExtend">Javascript P1</button>
          <button className="fileExtend">Javascript P2</button>
          <button className="fileExtend">Javascript P3</button>
        </div>
        <br />

        <div id="p2" className="folderCont">
          <div id="pf2" className="personalFolder">
            <img src={folderImg}></img>Upcoming Assignments
            <button className="arrow" onclick={this.displayFolders("pf2")}>
              <img src={arrow}></img>
            </button>
          </div>
          <button className="fileExtend">UI Assignment 5</button>
          <button className="fileExtend">Python Homework 2</button>
          <button className="fileExtend">Weave-A-Basket Homework</button>
        </div>
      </div>
    );
  }
}

export default App;
