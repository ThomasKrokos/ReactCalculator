import React, { useState } from "react";
import { flushSync } from "react-dom";
import styles from "./Calculator.module.css";

// TODO:
// Use ASCII values to parse what type of button is pressed
// Use Stack to store currentNum, operator and inputNum
// Name these numbers better
// Write function that computes the stack and updates value of current number
// Need to call this function when = is pressed and when second operator is pressed
// Error handling for pressing multiple operators in a row?
// Making the inputField able to be typed in
// NEED A WAY TO CHECK FOR MULTIPLE . IN NUM

const Calculator = () => {
  const [currentNum, SetCurrentNum] = useState("0");



// numA and numB will be stored as strings except when executing operation
  const [numA, SetNumA] = useState("0");
  const [numB, SetNumB] = useState("0");
  const [op, SetOp] = useState("");



  const buttonValues = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "0",
    ".",
    "=",
    "X",
  ];

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.inputfield}>{currentNum}</p>
      </div>
      <div className={styles.buttoncontainer}>
        {buttonValues.map((item) => {
          return (
            <div className={styles.button} onClick={() => SetCurrentNum(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
