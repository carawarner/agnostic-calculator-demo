import React from "react";
import { shallow } from "enzyme";
import { CalculatorResult } from "../CalculatorResult";

it("renders without crashing", () => {
  shallow(<CalculatorResult result="X" />);
});
