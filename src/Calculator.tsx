import React, { useState } from "react";
import Button from "./Button";
import { flushSync } from "react-dom";
import styles from "./Calculator.module.css"

const Calculator = () => {

  const [currentNum, SetCurrentNum] = useState("0")

  const buttonValues = [
    "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "0", ".", "=", "X",
  ];

  return (
    <div className={styles.container}>
      <div > 
        <p className={styles.inputfield}>{currentNum}</p>
      </div>
      <div className={styles.buttoncontainer}>
      {buttonValues.map((item) => {
         return <div className={styles.button} onClick={() => SetCurrentNum(item)}>{item}</div>
      })}
      </div>

    </div>
  );
};

export default Calculator;
