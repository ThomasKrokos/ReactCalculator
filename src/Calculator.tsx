import React, { useState } from "react";
import { flushSync } from "react-dom";
import styles from "./Calculator.module.css";

// TODO:
// Use ASCII values to parse what type of button is pressed
// Write function that computes the stack and updates value of current number
// Need to call this function when = is pressed and when second operator is pressed
// Error handling for pressing multiple operators in a row?
// Making the inputField able to be typed in  -- lategame
// Add scientific notation for big numbers
// write documentation in readme
// add size limit to calculator

// ERRORS TO CHECK
// NEED A WAY TO CHECK FOR MULTIPLE . IN NUM
// NEED A WAY TO CHECK FOR BACK TO BACK OPERATOR PRESSES
const Calculator = () => {
  // currentNum is the number that is currently viewable on the calculator screen
  const [currentNum, SetCurrentNum] = useState("0");

  // numA and numB will be stored as strings except when executing operation
  const [numA, SetNumA] = useState("0");
  const [numB, SetNumB] = useState("0");
  const [op, SetOp] = useState("");

  // should potentially consider exporting these functions to another file?
  const parseButton = (buttonValue: string) => {
    // This function will parse what button is clicked through ascii value of char
    // return boolean to represent if button was num or operator
    // true if op false if num
    const asciiCode = buttonValue.charCodeAt(0);
    if (asciiCode == 61) return 1;
    else if (asciiCode == 67) return 2;
    if (
      asciiCode == 43 ||
      asciiCode == 45 ||
      asciiCode == 47 ||
      asciiCode == 88
    )
      return 3;
    else return 4;
  };


  const onClick = (buttonValue: string) => {
    switch (parseButton(buttonValue)) {
      case 1: // parseButton returns 1 if buttonValue is '='
        runEquals(); // execute = logic
        break;
      case 2: // parseButton returns 2 if buttonValue is 'C'
        clearMem(); // resets calculator memory
        break;

      case 3: // parseButton returns 3 if buttonValue is an operater: ['+', '-', '/' '*']
        runOp(buttonValue); // execute operator logic
        break;

      default: // should only reach default if button was a number or '.'
        updateNum(buttonValue); // appends character to currentNum in scope
    }
  };

  const clearMem = () => {
    // sets numA, numB, and op to initial values
    // probable will set a clear button to this function in the future
    SetNumA("");
    SetNumB("");
    SetOp("");
    SetCurrentNum("0");
  };

  const runEquals = () => {
    // if op === "" run no operation and just return
    // if op != "" && numB != "":
    // set numA = numA op numB and keep numB the same
    // set currentNum to numA
    // ERROR CHECKING FOR BACK TO BACK OPERATOR OPERATOR TO BE FIGURED OUT LATER
  };

  const runOp = (op: string) => {
    // if op !="" and numB !=""
    // do numA op numB and then save that to numA
    // set op to new op
    // clear numB
    // set currentNum to numB
    // ERROR CHECKING FOR BACK TO BACK OPERATOR TO BE FIGURED OUT LATER
  };

  const updateNum = (numToAppend: string) => {
    // updates current number in scope
    // ERROR CHECKING FOR MULTIPLE . TO BE FIGURED OUT LATER
    SetCurrentNum((currentNum)=> currentNum+numToAppend)
  };

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
      <div className={styles.header}>
        <p className={styles.inputfield}>{currentNum}</p>
      </div>
      <div className={styles.button} onClick={() => onClick("C")}>
        Clear Calculator
      </div>
      <div className={styles.buttoncontainer}>
        {buttonValues.map((item) => {
          return (
            <div className={styles.button} onClick={() => onClick(item)}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
