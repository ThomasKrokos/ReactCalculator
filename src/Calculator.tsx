import React from "react";
import Button from "./Button";
import { flushSync } from "react-dom";

const Calculator = () => {
  //want to try to move these styles out to a css file
  const container = {
    border: "1px solid",
    borderRadius: "15%",
    padding: "5%",
    width: "30%",
    height: "40%",
    margin: "0 auto"
  };
  const buttonContainer = {
    display: "flex",
    flexWrap: "wrap"

  }
  const button = {
    border: "1px solid",
    borderRadius: "15%",
    padding: "25px",
    margin: "10px"
  };

  const inputField = {
    border: "1px solid",
    padding: "10px",


  }

  const buttonValues = [
    "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "0", ".", "=", "X",
  ];

  return (
    <div style={container}>
      <div style={inputField}>
        <p > Text Here</p>
      </div>
      <div style={buttonContainer}>
      {buttonValues.map((item) => {
         return <div style={button}>{item}</div>
      })}
      </div>

    </div>
  );
};

export default Calculator;
