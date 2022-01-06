import React from "react";
import ReactDOM from "react-dom";

// shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received.This function can’t be used in the case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.
//In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

interface Props {}
type State = {
  color: string;
};
export class ShouldComponentUpdate extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { color: "red" };
  }
  state: State = {
    color: "red",
  };
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1>Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<ShouldComponentUpdate />, document.getElementById("root"));
