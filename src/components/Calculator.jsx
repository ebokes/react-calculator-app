import React, { useState } from "react";
import {
  Wrapper,
  Keypad,
  Screen,
  Previous,
  Current,
  Button,
  Container,
  CalcWrapper,
} from "./calculatorStyle";
import RSwitch from "./Switch";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");

  // function to display text on screen when a user clicks
  const appendValueHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  //   function to delete text
  const deleteDigitHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  //   clear screen
  const clearScreenHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevious("");
  };

  //   choose required operator
  const chooseOperationHandler = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(e.target.getAttribute("data"));
  };

  //   equal to function
  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };

  //   result evaluation
  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <CalcWrapper>
      <Wrapper>
        <Container>
          <RSwitch />
          <Screen>
            <Previous>
              {previous} {operations}
            </Previous>
            <Current>
              {current === "" && previous === "" ? "0" : current}
            </Current>
          </Screen>
          <Keypad>
            <Button clear onClick={clearScreenHandler}>
              AC
            </Button>
            <Button onClick={deleteDigitHandler} del>
              ⇐
            </Button>
            <Button data={"÷"} onClick={chooseOperationHandler} operation>
              ÷
            </Button>
            <Button data={"x"} operation onClick={chooseOperationHandler}>
              x
            </Button>
            <Button data={7} onClick={appendValueHandler}>
              7
            </Button>
            <Button data={8} onClick={appendValueHandler}>
              8
            </Button>
            <Button data={9} onClick={appendValueHandler}>
              9
            </Button>
            <Button data={"-"} operation onClick={chooseOperationHandler}>
              -
            </Button>
            <Button data={4} onClick={appendValueHandler}>
              4
            </Button>
            <Button data={5} onClick={appendValueHandler}>
              5
            </Button>
            <Button data={6} onClick={appendValueHandler}>
              6
            </Button>
            <Button data={"+"} operation onClick={chooseOperationHandler}>
              +
            </Button>
            <Button data={1} onClick={appendValueHandler}>
              1
            </Button>
            <Button data={2} onClick={appendValueHandler}>
              2
            </Button>
            <Button data={3} onClick={appendValueHandler}>
              3
            </Button>
            <Button equals onClick={equalHandler}>
              =
            </Button>
            <Button data={"."} onClick={appendValueHandler} decimal>
              .
            </Button>
            <Button data={0} onClick={appendValueHandler}>
              0
            </Button>

            <Button data={"00"} onClick={appendValueHandler}>
              00
            </Button>
          </Keypad>
        </Container>
      </Wrapper>
    </CalcWrapper>
  );
};

export default Calculator;
