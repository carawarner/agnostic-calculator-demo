import "babel-polyfill";
import React from "react";
import CalculatorContainer from "./CalculatorContainer";

export default class App extends React.Component {
  render() {
    return <CalculatorContainer />;
  }
}
