import "./index.scss";

const Help = () => {
  return (
    <div className="helpcontainer">
      {" "}
      <h3>Do you need help?</h3>
      <body className="b1">
        {" "}
        Please access our FAQ page to find answers to the recently asked
        questions about Canvas.{" "}
      </body>
      <button className="FAQ">FAQ</button>
      <body className="b1">
        <br />
        <br /> If you still have additional inqueries, please reach out to us at
        uccanvas@cincinnati.edu or submit a request below to be reviewed.{" "}
      </body>
    </div>
  );
};

export default Help;
