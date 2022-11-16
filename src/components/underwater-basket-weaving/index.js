import "./index.scss";
import AssUnder from "../underwater-basket-weaving/SideAssign";
import "../underwater-basket-weaving/SideAssign/index.scss";
const UWB = () => {
  return (
    <div>
      <div className="container home-page">
        <div className="course-zone">
          <h1>
            {" "}
            Underwater Basket Weaving <br />{" "}
            __________________________________________________________
          </h1>
          <br />
          <h2>
            Instructor: Duncan Collins <br />
            Class Times: MTWTF from 6:00AM to 2:00 PM <br />
            Office Hours: DO NOT EXSIST, QUIT ASKING FOR OFFICE HOURS <br />
            <br />
            <h1>
              {" "}
              Course Description <br />{" "}
              __________________________________________________________{" "}
            </h1>
            <br />{" "}
            <h2>
              {" "}
              This course is not one for the weak, it is not one for the frail.
              Through centurys the world <br /> has been blessed by the devine
              teachings of basket weaving (specifically under water) <br /> by
              those who like weaving baskets.. Underwater. I am not really sure
              what I am talking <br /> about. At this point I am rambiling on
              about this course description. Be ready to succeed. <br />{" "}
              Whatever, click the below button to see the syllbus.{" "}
            </h2>
            <button className="syl">Syllabus</button>
            <br /> <br />
            <br />
            <h1>
              New Anouncements <br />{" "}
              __________________________________________________________{" "}
            </h1>
            <div className="anounce">
              {" "}
              <h2> New Assignment Posted! </h2>{" "}
              <body className="anounce">
                {" "}
                The assignment " How to breathe under water" has just been
                posted to canvas. It will be due on November 29th. <br />{" "}
                -Cheers, Duncan{" "}
              </body>
            </div>
            <div className="anounce">
              {" "}
              <h2> Exam 1 has been pushed back</h2>{" "}
              <body className="anounce">
                {" "}
                Due to a recent illness that I had from spending too much time
                under water. Well, actually I had to get my stomach <br />{" "}
                pumped after trying to breathe under water. Anyway, anyhow,
                anywhere, I am not able to make it in order to proctor <br />{" "}
                your exam. Therefore, it has been rescheduled for November 18th.
                - Cheers, Duncan{" "}
              </body>
            </div>
          </h2>
        </div>
      </div>
      <AssUnder />
    </div>
  );
};
export default UWB;
