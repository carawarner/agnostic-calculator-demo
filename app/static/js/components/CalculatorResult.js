import React from "react";
import PropTypes from "prop-types";

export const CalculatorResult = props => (
  <div>The result is: {props.result}</div>
);
CalculatorResult.propTypes = {
  result: PropTypes.string.isRequired
};
