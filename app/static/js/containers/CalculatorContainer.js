import React from "react";
import axios from "axios";
import { About } from "../components/About";
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

  handleChange(e) {
    // There's only one field now but there may be more in the future
    let target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const jsonData = {
      expression: this.state.expression
    };

    try {
      const response = await axios.post("/api/evaluate", jsonData);
      this.setState({
        result: response.data.result
      });
    } catch (error) {
      //Do something
    }
  }

  render() {
    return (
      <div className="text-is-centered">
        <About />
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
