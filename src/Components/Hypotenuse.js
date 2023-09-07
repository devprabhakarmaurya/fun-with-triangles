import React, { useState } from "react";

export default function Hypotenuse() {
   const [base,setBase] =useState();
  const [height,setHeight]= useState();
  const [outputMessage, setOutputMessage] = useState();
  const calculateHypo=()=>{
    let hypotenuse = ((parseFloat(base)** 2)+(parseFloat(height)**2));
    setOutputMessage(`Hypotenuse = ${Math.sqrt(hypotenuse).toPrecision(5) } cm`)
  }

  return(
    <>
    <h1>Hypotenuse of Triangle</h1>
    <h3>Hypotenuse <sup>2</sup> = Base <sup>2</sup> + Perpendicular <sup>2</sup> </h3>
    <label className="label">Base(in cm):</label>
    <input className="input" value={base} onChange={(event)=>setBase(event.target.value)}/>
    <label className="label">Perpendicular(in cm):</label>
    <input className="input" value={height} onChange={(event)=>setHeight(event.target.value)}/>
    <button className="btn" onClick={calculateHypo}>Calculate</button>
    {outputMessage && <h2 className="output-msg">{outputMessage}</h2>}
  </>
  );

}
