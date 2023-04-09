  import { useState } from 'react';
  import './App.css';

  function App() {
 
    const [number,setNumber] = useState("0")
    const [display,setDisplay] = useState("0")
    const showNumber = (event)=> {
      const regex = /[+\-*/]/;
  let value = event.target.textContent;
const isOperator = regex.test(value);
const numRegex = /^\d*\.?\d*(?:\.\d*)?$/
const isNumber = numRegex.test(value)

  setDisplay((prevDisplay)=> {
    let newDisplay = prevDisplay
  let newValue = number
    if (isNumber && value!==".") {
      newValue = newValue==="0"?value:newValue+value
      setNumber(newValue)
     newDisplay = prevDisplay==="0"? value:prevDisplay + value
     
     
    }
   else if (isNumber && value === "." && !newValue.includes(".")) {
    newValue = newValue==="0"?value:newValue+value
    setNumber(newValue)
     newDisplay = prevDisplay==="0"? value:prevDisplay + value  
     
     
    }
    else if(isOperator) {
      
      newValue = "0"
      setNumber(newValue)
    newDisplay = prevDisplay === "0"? value: prevDisplay + " "  + value + " "
    
    }
 
    return  newDisplay
    
  })


event.target.style.backgroundColor = "red";
setTimeout(()=> {
  event.target.style.backgroundColor = "white"
},250)
    }
    const clearDisplay = () => {
      setDisplay("0")
      setNumber("0")
    }
    const equal = ()=> {
      // const answer = parseFloat(eval(display).toFixed(4))
      setDisplay(eval(display))

    }
    return (
      <div className="App"> 
        <div id="display">{display}</div>
        <div id="clear-multiplay">
        <div id="clear"onClick={clearDisplay} className='hover'>AC</div>
        <div id="equals"onClick={equal} className='hover'>=</div>
        </div>
       
    <div id='numbers'>
    
    <div id="one" className='num' onClick={showNumber} >1</div>
    <div id="two" className='num'onClick={showNumber}>2</div>
    <div id="three" className='num'onClick={showNumber}>3</div>
    <div id="four" className='num'onClick={showNumber}>4</div>
    <div id="five" className='num'onClick={showNumber}>5</div>
    <div id="six" className='num'onClick={showNumber}>6</div>
    <div id="seven"className='num'onClick={showNumber} >7</div>
    <div id="eight" className='num'onClick={showNumber}>8</div>
    <div id="nine" className='num'onClick={showNumber}>9</div>
    <div id="zero" className='num'onClick={showNumber}>0</div>
    <div id="decimal" className='num' onClick={showNumber}>.</div>
    </div>
    <div id='operators'>
    
    <div id="add" onClick={showNumber} className='hover'>+</div>
    <div id="subtract"onClick={showNumber} className='hover'>-</div>
    <div id="multiply"onClick={showNumber} className='hover'>*</div>
    <div id="divide"onClick={showNumber} className='hover'>/</div>
    
    </div>
   
    
    
      </div>
    );
  }

  export default App;
  // const styleObject = {
  //   "#one:hover":{
  //     backgroundColor: "brown",
  //     color:"blue"
  //   }

    
  // }
