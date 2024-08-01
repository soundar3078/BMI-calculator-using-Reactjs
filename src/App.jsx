import {useState} from "react";

import "./App.css"

function App() {

  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");
  const[bmi,setbmi] = useState(null);
  const[bmiStatus,setbmiStatus] = useState("");
  const[errorMessage,seterrorMessage] = useState("error");
  
  const calculateBmi = () =>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight){
      const heightinmetres=height/100;
      const bmiValue=weight/(heightinmetres * heightinmetres);
      setbmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setbmiStatus("Underweight");
      }else if(bmiValue>=18.5 && bmiValue<24.90){
        setbmiStatus("Normal");
      }else if(bmiValue>=24.90 && bmiValue<30){
        setbmiStatus("Overweight");
      }else{
        setbmiStatus("Obese");
      }seterrorMessage("");
  }else{
    setbmi(null);
    setbmiStatus("");
    seterrorMessage("Please enter valid vlaues for weight and height");
  }
};

const clearAll = () => {
  setHeight("");
  setWeight("");
  setbmi(null);
  setbmiStatus("");
}

    return(
    
    <div>
      <div className="bmi-calculator">
        <div className="box">
          <div className="data">
            <h1>BMI Calculator</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="input-container">
              <label htmlFor="height">Height(cm):</label>
              <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
            </div>
          <div className="input-container">
          <label htmlFor="weight">weight(cm):</label>
          <input type="text" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)}/>
        </div> 
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button onClick={clearAll}>clear</button>
        {bmi != null &&(
        <div className="result">
          <p>Your BMI is:{bmi}</p>
          <p>Status:{bmiStatus}</p>
          </div>
        )} 
        </div>
      </div> 
    </div>
  </div>
  );
}

export default App
