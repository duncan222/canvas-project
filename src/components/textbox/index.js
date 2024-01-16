class TextBox {
  state = {
    tagged: false,
    message: "",
    input1: "",
    input2: "",
  };
  handleClick(e) {
    // access input values in the state
    console.log(this.state); // {tagged: true, input1: 'text', input2: 'text2'}
    this.setState({ tagged: true });
    e.preventDefault();
    console.log("The link was clicked.");
  }
  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };
  Text = () => {
    return (
      <div id="id">
        <p> hello </p>
        <input
          placeholder="user@email.com"
          type="text"
          onChange={(e) => this.handleInputChange(e, "input1")}
        ></input>
        <input
          placeholder="tag"
          type="text"
          onChange={(e) => this.handleInputChange(e, "input2")}
        ></input>
        <button onClick={(e) => this.handleClick(e)}>
          {this.state.tagged ? "Tagged" : "Tag "}
        </button>
        <p>{this.state.tagged ? "Clicked" : "Still"}</p>
      </div>
    );
  };
}

export default Text;
