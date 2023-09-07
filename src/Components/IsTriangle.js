import React, { useState } from "react";

export default function IsTriangle() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [outputMessage, setOutputMessage] = useState();

  function isTriangle() {
    let sumOfAngles = calculationSumOfAngles(first, second, third);
    if (sumOfAngles === 180.0) {
      setOutputMessage("Triangle will be POSSIBLE");
    } else {
      setOutputMessage("Trinagle will NOT POSSIBLE");
    }
  }
  function calculationSumOfAngles(first, second, third) {
    let sum = parseFloat(first) + parseFloat(second) + parseFloat(third);
    return sum;
  }

  function onCheckClickHandler() {
    isTriangle();
    // console.log(first, second, third);
  }
  return (
    <>
      <h1>Is Triangle ?</h1>
      <label className="label">First Angle: </label>
      <input
        className="input"
        value={first}
        onChange={(event) => setFirst(event.target.value)}
      />
      <label className="label">Second Angle: </label>
      <input
        className="input"
        value={second}
        onChange={(event) => setSecond(event.target.value)}
      />
      <label className="label">Third Angle: </label>
      <input
        className="input"
        value={third}
        onChange={(event) => setThird(event.target.value)}
      />
      <button
        className="btn"
        
        onClick={onCheckClickHandler}
      >
        Check
      </button>
      {outputMessage && <h2 className="output-msg">{outputMessage}</h2>}
    </>
  );
}
