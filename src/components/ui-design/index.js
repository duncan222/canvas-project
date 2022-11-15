import { Link } from "react-router-dom";

const UIdesign = () => {
  return (
    <div className="container home-page">
      <div className="course-zone">
        <h1>
          {" "}
          User Interface Design <br />{" "}
          __________________________________________________________
        </h1>
        <br />
        <body>
          Instructor: Jillian Aurisano <br /> Class Hours: MWF from 1:25PM to
          2:30PM.{" "}
        </body>
        <Link className="Course1-Anounce" to="/ui-design/files">
          <body>Click Here For Syllabus</body>
        </Link>
      </div>
      <div className="Anouncement-Zone">
        <h2>
          New Anouncements <br />{" "}
          __________________________________________________________
        </h2>
        <br />
        <button id="button"> UI Project 2 extended 11/18/2022 </button>
      </div>
    </div>
  );
};

export default UIdesign;
