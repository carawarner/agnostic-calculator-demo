import "babel-polyfill";
import React from "react";
import CalculatorContainer from "./CalculatorContainer";
import "../../css/main.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container typography">
        <CalculatorContainer />
      </div>
    );
  }
}
