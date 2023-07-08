import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import styles from "./Calculator.module.css";

// TODO:
// Add scientific notation for big numbers
// add size limit to calculator

const Calculator = () => {
  const [currentNum, SetCurrentNum] = useState("0");

  const numARef = useRef("");
  const numBRef = useRef("");
  const [onA, setOnA] = useState(true);
  const [op, SetOp] = useState("");
  const memStack = useRef([] as string[]);

  const parseButton = (buttonValue: string) => {
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

  const newOnClick = (buttonValue: string) => {
    const parsedInput = parseButton(buttonValue);
    if (parsedInput == 1) runEquals();
    else if (parsedInput == 2) emptyStack();
    else executeStack(buttonValue, parsedInput == 3);
  };

  const executeStack = (input: string, isOp: boolean) => {
    const peek = memStack.current[memStack.current.length - 1];
    if (!peek) {
      if (isOp) return;
      memStack.current.push(input);
      return;
    }
    if (isOp) {
      
    } else {
    
    }
  };

  const emptyStack = () => {
    memStack.current = [];
    setOnA(true);
    SetOp("");
    SetCurrentNum("0");
  };

  const clearMem = () => {
    numARef.current = "";
    numBRef.current = "";
    setOnA(true);
    SetOp("");
    SetCurrentNum("0");
  };

  const runEquals = () => {
    if (op === "") {
      console.debug("nothing to execute, skipping = logic");
    } else {
      const a = numARef.current ? parseFloat(numARef.current) : 0.0;
      const b = numBRef.current ? parseFloat(numBRef.current) : 0.0;
      let newNum = 0.0;

      switch (op.charCodeAt(0)) {
        case 43:
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

      numARef.current = parseFloat(newNum.toFixed(6)).toString();
      SetCurrentNum(numARef.current);
    }
  };

  const runOp = (newOp: string) => {
    numBRef.current = "";
    setOnA(false);
    SetOp(newOp);
  };

  const updateNum = (numToAppend: string) => {
    if (onA) {
      if (numARef.current.indexOf(".") > 0 && numToAppend === ".") return;
      numARef.current = numARef.current + numToAppend;
      SetCurrentNum(numARef.current);
    } else {
      if (numBRef.current.indexOf(".") > 0 && numToAppend === ".") return;
      numBRef.current = numBRef.current + numToAppend;
      SetCurrentNum(numBRef.current);
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
