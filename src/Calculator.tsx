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
  let numA = "";
  let numB = "";
  const [onA, setOnA] = useState(true);
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
    console.log("A is: " + numA)
    console.log("B is: " + numB)
    console.log("Current is: " + currentNum)

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
    numA = "";
    numB = "";
    setOnA(true);
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

  const runOp = (newOp: string) => {
    // if op !="" and numB !=""
    // do numA op numB and then save that to numA
    // set op to new op
    // clear numB
    // set currentNum to numB
    // ERROR CHECKING FOR BACK TO BACK OPERATOR TO BE FIGURED OUT LATER
    if (op === "") {
      setOnA(false);
      SetCurrentNum("0");
      SetOp(newOp);
    } else {
      const a = numA ? parseInt(numA) : 0;
      const b = numB ? parseInt(numB) : 0;
      let newNum = 0;

      switch (op.charCodeAt(0)) {
        case 43:
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          newNum = a + b;
          break;

        case 45:
          newNum = a - b;
          break;

        case 47:
          newNum = a / b;
          break;

        case 88:
          newNum = a * b;
          break;
      }

      numA = newNum.toString();
      SetOp(newOp);
      console.log("Setting current number to " + numA);
      SetCurrentNum(numA);
    }
  };

  const updateNum = (numToAppend: string) => {
    // updates current number in scope
    // ERROR CHECKING FOR MULTIPLE . TO BE FIGURED OUT LATER
    if (onA) {
      numA = numA + numToAppend
      console.log("Setting current number to " + numA);
      SetCurrentNum(numA);
    } else {
      numB = numB + numToAppend
      console.log("Setting current number to " + numB);
      SetCurrentNum(numB);
    }
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
