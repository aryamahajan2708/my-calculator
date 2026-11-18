import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [screen, setScreen] = useState("");

  const press = (value) => {
    setScreen((prev) => prev + value);
  };

  const clearScreen = () => {
    setScreen("");
  };

  const del = () => {
    setScreen((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      if (screen === "") return;
      setScreen(eval(screen).toString());
    } catch {
      setScreen("Error");
    }
  };

  return (
    <div className="cal">
        <h2 style={{ color: "white", paddingBottom: "20px" }}>
            Simple Calculator
        </h2>
        <hr />

        <input type="text" placeholder="0" value={screen} readOnly id="screen" />
        <hr style={{marginBottom:'20px'}} />

        <div>
            <button className="btn1" onClick={clearScreen}>
            AC</button>
            <button className="btn1" onClick={del}>DEL</button>
            <button className="btn1" onClick={() => press("%")}>%</button>
            <button className="operator" onClick={() => press("/")}>/</button>
        </div>

        <div>
            <button className="btn" onClick={() => press("7")}>7</button>
            <button className="btn" onClick={() => press("8")}>8</button>
            <button className="btn" onClick={() => press("9")}>9</button>
            <button className="operator" onClick={() => press("*")}>*</button>
        </div>

        <div>
            <button className="btn" onClick={() => press("4")}>4</button>
            <button className="btn" onClick={() => press("5")}>5</button>
            <button className="btn" onClick={() => press("6")}>6</button>
            <button className="operator" onClick={() => press("-")}>-</button>
        </div>

        <div>
            <button className="btn" onClick={() => press("1")}>1</button>
            <button className="btn" onClick={() => press("2")}>2</button>
            <button className="btn" onClick={() => press("3")}>3</button>
            <button className="operator" onClick={() => press("+")}>+</button>
        </div>

        <div>
            <button className="btn" onClick={() => press("00")}>00</button>
            <button className="btn" onClick={() => press("0")}>0</button>
            <button className="btn" onClick={() => press(".")}>.</button>
            <button className="operator" onClick={calculate}>=</button>
        </div>
    </div>
  );
}

export default Calculator;