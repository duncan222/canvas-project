import back from "../../images/back.png";
import syl from "../../documents/UISyll.pdf";
import { Link } from "react-router-dom";
import AssUI from "./SideAssign";
import { useState } from "react";

const PY = () => {
  return (
    <div className="container home-page">
      <div className="course-zone">
        <h1>
          {" "}
          Python Programming <br />{" "}
          __________________________________________________________
        </h1>
        <br />
        <h2>
          Instructor: Perry Python <br /> Class Hours: MWF from 5:00PM to
          6:30PM. <br />
          <br />
          <br />
          <h1>
            {" "}
            Course Description <br />{" "}
            __________________________________________________________{" "}
          </h1>
          <br />{" "}
          <h2>
            In this course we are going to learn the ins and outs of the
            <br />
            python programming language, and how it is implemented in
            <br />
            the modern CS industry.
          </h2>
          <br /> <br />
          <br />
          <h1>
            New Anouncements <br />{" "}
            __________________________________________________________{" "}
          </h1>
          <div className="anounce">
            {" "}
            <h2> Python Lab 1 Posted </h2>{" "}
            <body className="anounce">
              {" "}
              The first python lab was posted last night. You are to build the
              towers <br /> of hanoi. More details are in the assignment
              section. -Perry{" "}
            </body>
          </div>
          <div className="anounce">
            {" "}
            <h2> No Class On Monday!</h2>{" "}
            <body className="anounce">
              {" "}
              I will not be attending class on monday due to my cousins wedding.{" "}
              <br />
              Class will resume as normal on the following wednesday. - Perry" "
            </body>
          </div>
        </h2>
      </div>

      <AssUI />
    </div>
  );
};

export default PY;
