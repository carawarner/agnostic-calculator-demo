import React from "react";
import { shallow } from "enzyme";
import CalculatorContainer from "../CalculatorContainer";

it("Renders without crashing", () => {
  shallow(<CalculatorContainer />);
});
