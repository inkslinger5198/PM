import React from "react";
import "./revCal.css";
import Calculator from "../../components/calculator/Calculator";
const RevCal = () => {
  return (
    <div className="revcal-block section__padding">
      <div className="revcal-content">
        <h1>Calculate Your Revenue With Us</h1>
        <h3>Our partners get 10-35 qualified meetings per month with us.</h3>
        <p>
          Enter your average deal size and winning rate, then match it with our
          average monthly meeting figures.
          <br />
          Fancy a broader view? Try calculating with annual
          figures😉
        </p>
      </div>

      <div className="revcal-calculator">
        <Calculator />
      </div>
    </div>
  );
};

export default RevCal;
