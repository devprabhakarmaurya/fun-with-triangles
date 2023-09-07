import React, { useState } from "react";

export default function Quiz() {
  let quizForm = document.querySelector('.quizForm');
  const correctAnswers=['90','Right Angle'];
  const [outputMessage, setOutputMessage] = useState();

  const calculateScore=()=>{
    let score=0;
    let index=0;
    const data = new FormData(quizForm);
    for(let value of data.values()){
      if(value === correctAnswers[index]){
        score += 1;
      }
      index +=1;
    }
    console.log(score);
    

  }
  return( 
  <div>
    <form className="quizForm">
      <h1>Quiz on Triangles</h1>
      <div >
      <label className="label"><strong>Question: </strong>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°? </label>
      <br/>
      <input type="radio" name="ques1" value="45°"/>45°
      <input type="radio" name="ques1" value="90°"/>90°
      <input type="radio" name="ques1" value="60°"/>60°
      </div>
      <div>
      <label className="label"><strong>Question: </strong>If a triangle has an angle of 90 degrees, what is it called?</label>
      <br/>
      <input type="radio" name="ques2" value="Obtuse Angle"/>Obtuse Angle
      <input type="radio" name="ques2" value="Acute Angle"/>Acute Angle
      <input type="radio" name="ques2" value="Right Angle"/>Right Angle
      </div>
      <div>
      <button className="btn" type="submit" onClick={calculateScore}>Check</button>
      </div>
      {outputMessage && <h2 className="output-msg">{outputMessage}</h2>}
    </form>


  </div>
    
  );  
}
