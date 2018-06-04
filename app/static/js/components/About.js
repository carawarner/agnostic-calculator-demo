import React from "react";

export const About = () => (
  <div className="text-is-centered">
    <h1 className="title">Type-Agnostic Calculator</h1>

    <p className="description">
      This is a{" "}
      <a className="link" href="https://github.com/carawarner/calculator-demo">
        demo
      </a>{" "}
      of the{" "}
      <a className="link" href="https://github.com/carawarner/calculator">
        agnostic calculator
      </a>{" "}
      library, which evaluates expressions involving non-standard (ie. not base
      10) numbers.
    </p>

    <p className="description">
      <b>Enter an expression</b> in the field below. Use <b>Roman Numerals</b>{" "}
      and any of the standard operators: +, -, *, /, ^, %. Parens indicate
      priority.
    </p>
  </div>
);
