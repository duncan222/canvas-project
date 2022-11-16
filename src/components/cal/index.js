//Using the react-big-calendar library
//from the tutorial at https://medium.com/dataseries/add-a-calendar-to-a-react-app-with-react-big-calendar-7708794d89fc#:~:text=With%20the%20react-big-calendar%20library%2C%20we%20can%20add%20a,react-big-calendar%20Then%20we%20can%20use%20it%20by%20writing%3A

import "./index.scss";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SideGoalsMain from "../SideGoalsMain/thedex";

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(),
    end: new Date(),
    title: "Project 2: Implementation Deadline",
  },
];

const DnDCalendar = withDragAndDrop(Calendar);

class App extends React.Component {
  state = {
    events,
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <SideGoalsMain />
        <div className="Cal-Position">
          <div className="App">
            <DnDCalendar
              className="calSize"
              defaultDate={moment().toDate()}
              defaultView="month"
              events={this.state.events}
              localizer={localizer}
              onEventDrop={this.onEventDrop}
              onEventResize={this.onEventResize}
              resizable
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
