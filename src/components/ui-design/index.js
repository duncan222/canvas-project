import back from "../../images/back.png";
import syl from "../../documents/UISyll.pdf";
import { Link } from "react-router-dom";
import AssUI from "./SideAssign";
import { useState } from "react";

const UIdesign = () => {
  const [isSyl, setisSyl] = useState(false);
  const handleClick8 = (event) => {
    setisSyl((current) => !current);
  };
  return (
    <div className="container home-page">
      <div className="course-zone">
        <h1>
          {" "}
          User Interface Design <br />{" "}
          __________________________________________________________
        </h1>
        <br />
        <h2>
          Instructor: Jillian Aurisano <br /> Class Hours: MWF from 1:25PM to
          2:30PM. <br />
          <br />
          <br />
          <h1>
            {" "}
            Course Description <br />{" "}
            __________________________________________________________{" "}
          </h1>
          <br />{" "}
          <h2>
            In this class we are going to explore user interface design- a
            <br />
            computer science discipline that considers how to make computers
            <br />
            and computational systems useful to people.
          </h2>
          <br /> <br />
          <br />
          <h1>
            New Anouncements <br />{" "}
            __________________________________________________________{" "}
          </h1>
          <div className="anounce">
            {" "}
            <h2> Project 2 deadline extended! </h2>{" "}
            <body className="anounce">
              {" "}
              The due date for the alternate canvas assignment has been pushed
              back to November 18th.{" "}
            </body>
          </div>
          <div className="anounce">
            {" "}
            <h2> Project 3 Update</h2>{" "}
            <body className="anounce">
              {" "}
              The third and final project is now posted and it live on canvas,
              it is due December 9th. <br />
              However, It is always better to start earlier than later. Cheers!"
              "
            </body>
          </div>
        </h2>
      </div>

      <AssUI />
    </div>
  );
};

export default UIdesign;
