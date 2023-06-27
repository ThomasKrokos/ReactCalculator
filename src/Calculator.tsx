import React from "react";
import Button from "./Button";

const Calculator = () => {
  //want to try to move these styles out to a css file
  const container = {
    border: "1px solid",
    borderRadius: "20%",
    padding: "5px",
    // display: "flex",
    // flexWrap: "wrap",
  };
  const button = {
    border: "1px solid",
    borderRadius: "15%",
    padding: "25px",
  };

  const buttonValues = [
    "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "0", ".", "=", "X",
  ];

  return (
    <div style={container}>
      <div>
      {buttonValues.map((item) => {
         return <div style={button}>{item}</div>
      })}
      </div>

    </div>
  );
};

export default Calculator;
