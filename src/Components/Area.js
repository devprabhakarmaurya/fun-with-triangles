import React, { useState } from "react";

export default function Area() {
  const [base,setBase] =useState();
  const [height,setHeight]= useState();
  const [outputMessage, setOutputMessage] = useState();
  const calculateArea=()=>{
    let area = 1/2 *(parseFloat(base)*parseFloat(height));
    setOutputMessage(`Area = ${area} cm square`)
  }

  return(
    <>
    <h1>Area of Triangle</h1>
    <h3>Area of Triangle = 1/2 x (base x height) </h3>
    <label className="label">Base(in cm):</label>
    <input className="input" value={base} onChange={(event)=>setBase(event.target.value)}/>
    <label className="label">Height(in cm):</label>
    <input className="input" value={height} onChange={(event)=>setHeight(event.target.value)}/>
    <button className="btn" onClick={calculateArea}>Calculate</button>
    {outputMessage && <h2 className="output-msg">{outputMessage}</h2>}

    </>
  );
}
