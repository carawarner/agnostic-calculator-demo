import React from "react";
import { CalculatorForm } from "../components/CalculatorForm";
import { CalculatorResult } from "../components/CalculatorResult";

export default class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      result: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log("Will mount");
  }

  componentDidMount() {
    console.log("Did mount");
  }

  componentWillRender() {
    console.log("Will render");
  }

  handleChange(e) {
    // There's only one field now but there may be more in the future
    let target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Return a random number until API is hooked up
    this.setState({
      result: Math.floor(Math.random() * Math.floor(1000)).toString()
    });
  }

  render() {
    console.log("Rendering...");
    return (
      <div>
        <CalculatorForm
          expression={this.state.expression}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <CalculatorResult result={this.state.result} />
      </div>
    );
  }
}
