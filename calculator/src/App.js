import {useState} from 'react'
import {Display} from './components/display/Display';
import { Buttons } from './components/buttonComponents/Buttons';

import './App.css';


const App=() =>{
  // declare local variable for display text
  const [displayText, setDisplayText] = useState("");
  const [history, setHistory] = useState("")
  const [calculatorOn, setCalculatorOn] = useState("")
  const [total, setTotal] = useState(0);
  
//  receive value 
  const handleOnButtononClick=buttonValue=>{
    if(total){
      setTotal(null);
    }
  //  total and return
    if(buttonValue==="=")
    {
      const ttl=eval(displayText);


      // make total prank
      let extra =Math.ceil(Math.random()*10)
      if(ttl<=3){
        extra=0;
      }
      setTotal(ttl +extra);
      setHistory(displayText);
      setDisplayText("");
      return;
    }
    
    if(buttonValue === "OFF"){
      
      return setCalculatorOn(false);
    }


    // backspace on C click
    if(buttonValue === "C")
    {
    const backspace=displayText.slice(0,-1);
    return setDisplayText(backspace);
    }
    
    // Clear total
    if(buttonValue === "Ac"){
  
    return setDisplayText("");
    }
    // concate all the input value
    setDisplayText(displayText+buttonValue);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color:"blue"}}>Prank calculator</h1>
      <div className="container">
      
      <div className="calculator">
        <div style={{ textAlign: "right", margin:"10px"}}>
          {total && history}
        </div>
      <Display txtDisp={displayText} txtTotal={total}/>
     {calculatorOn ? (<Buttons buttonClick={handleOnButtononClick}/>) : <button className="btnOn" onClick={()=> setCalculatorOn(true)}>On</button>}
      </div>
      </div>
      
    </div>
  );
}

export default App;
