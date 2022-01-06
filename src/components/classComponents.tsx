/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom";
interface Props {}

type State = {
  statement: string;
};

export class ClassComponents extends React.Component<any, State> {
  constructor(props: Props) {
    super(props);
    this.state = { statement: "Class" };
  }

  // this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.
  componentWillMount() {
    console.log("componentWillMount() has been executed");
  }

  //this function is invoked after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time
  componentDidMount() {
    console.log("componentDidMount() has been executed");
  }

  changeState() {
    this.setState({ statement: " components" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.statement}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Click!</button>
        </h2>
      </div>
    );
  }

  //Before rendering an already mounted component, when new props or state are being received.
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  //this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after  updating the State or Props.
  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }
  //Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updating the State or Props.
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  //   componentWillUnmount() {
  //     console.log("componentWillUnMount() has been executed");
  //   }
}

ReactDOM.render(<ClassComponents />, document.getElementById("root"));
