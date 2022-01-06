import React from "react";
import "./App.css";
import { ClassComponents } from "./components/classComponents";
import {
  MountAndUpdate,
  MountAndUpdateEq,
  WillUnmount,
  WillUnmountEq,
} from "./components/componentDidMount";
import { ShouldComponentUpdate } from "./components/shouldUpdate";

function App() {
  return (
    <div className="App">
      <MountAndUpdate />
      <MountAndUpdateEq />
      <WillUnmount />
      <WillUnmountEq />
      <ShouldComponentUpdate />
      <ClassComponents />
    </div>
  );
}

export default App;
