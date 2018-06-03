import React from "react";
import PropTypes from "prop-types";

export const CalculatorForm = props => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      placeholder="Enter a mathematical expression using Roman Numerals"
      id="expression"
      name="expression"
      onChange={props.onChange}
    />
    <label htmlFor="expression">Expression</label>
  </form>
);
CalculatorForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
