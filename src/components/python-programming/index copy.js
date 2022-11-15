import { Link } from "react-router-dom";
import "./index.scss";
import course1 from "../../images/course1.png";
import course2 from "../../images/course2.png";
import course3 from "../../images/course33.png";
import files from "../../images/files2.png";
import anounce from "../../images/anouncment.png";
import assign from "../../images/assignment.png";
import grades from "../../images/grades.png";
import SideGoals from "../SideGoals";
import "../SideGoals/index.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <SideGoals />
      <div className="course-zone">
        <h1>
          {" "}
          Courses <br />{" "}
          __________________________________________________________
        </h1>
        <br />
        <div className="theCourses">
          <Link className="Course1" to="/ui-design">
            <img src={course1} alt="" />
          </Link>
          <Link className="Course1-Anounce" to="/ui-design/anouncements">
            <img className="courseOptions" src={anounce} alt="" />
          </Link>
          <Link className="Course1-Assign" to="/ui-design/assignments">
            <img className="courseOptions" src={assign} alt="" />
          </Link>
          <Link className="Course1-Grades" to="/ui-design/grades">
            <img className="courseOptions" src={grades} alt="" />
          </Link>
          <Link className="Course1-Files" to="/ui-design/files">
            <img className="courseOptions" src={files} alt="" />
          </Link>

          <br />
          <Link className="Course2" to="/python-programming">
            <img src={course2} alt="" />
          </Link>
          <Link
            className="Course2-Anounce"
            to="/python-programming/anouncements"
          >
            <img className="courseOptions" src={anounce} alt="" />
          </Link>
          <Link className="Course2-Assign" to="/python-programming/assignments">
            <img className="courseOptions" src={assign} alt="" />
          </Link>
          <Link className="Course2-Grades" to="/python-programming/grades">
            <img className="courseOptions" src={grades} alt="" />
          </Link>
          <Link className="Course2-Files" to="/python-programming/files">
            <img className="courseOptions" src={files} alt="" />
          </Link>
          <br />
          <Link className="Course3" to="/underwater-basket-weaving">
            <img src={course3} alt="" />
          </Link>
          <Link
            className="Course3-Anounce"
            to="/underwater-basket-weaving/anouncements"
          >
            <img className="courseOptions" src={anounce} alt="" />
          </Link>
          <Link
            className="Course3-Assign"
            to="/underwater-basket-weaving/assignments"
          >
            <img className="courseOptions" src={assign} alt="" />
          </Link>
          <Link
            className="Course3-Grades"
            to="/underwater-basket-weaving/grades"
          >
            <img className="courseOptions" src={grades} alt="" />
          </Link>
          <Link className="Course3-Files" to="/underwater-basket-weaving/files">
            <img className="courseOptions" src={files} alt="" />
          </Link>
        </div>
      </div>
      <div className="Anouncement-Zone">
        <h2>
          New Anouncements <br />{" "}
          __________________________________________________________
        </h2>
        <br />
        <button id="button"> UI Design: Project 2 </button>
        <button id="button"> Bubble Sort Assignment </button>
        <button id="button"> Basket Prototypes Due </button>
      </div>
    </div>
  );
};

export default Home;
