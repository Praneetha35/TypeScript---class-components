import React, { useState, useEffect } from "react";

//componentDidMount and componentDidUpdate
type State = {
  count: number;
};
interface Props {}
export class MountAndUpdate extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  state: State = {
    count: 0,
  };

  //This function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click - componentDidMount and componentDidUpdate
        </button>
      </div>
    );
  }
}

export function MountAndUpdateEq() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, []);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click - UseEffect</button>
    </div>
  );
}

export class WillUnmount extends React.Component {
  componentWillUnmount() {
    console.log(
      "componentWillUnmount() -Executes right before component is removed from the DOM."
    );
  }

  render() {
    return <h1>componentWillUnmount - executed</h1>;
  }
}

export const WillUnmountEq = () => {
  useEffect(() => {
    return () => {
      console.log(
        "componentWillUnmount()-Executes right before component is removed from the DOM - UseEffect"
      );
    };
  }, []);

  return <h1>Examples</h1>;
};
