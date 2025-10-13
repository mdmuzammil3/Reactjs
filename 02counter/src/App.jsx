import { use, useState } from 'react'

import './App.css'



function App() {
  let [counter, setCounter] = useState(5) //array ke under varible and (setCounter)
  

  //let counter = 5;
  const addvalue = ()=>{
    if(counter === 20){
      return;
    } else{
      setCounter(counter+1)
    // setCounter(prevCounter => prevCounter + 1) setcounter callback function leta hain jisse setCounter( (prevCounter) => {prevCounter+1} )
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }
  }

  const removeValue = ()=>{
    if(counter === 0){
      return;
    }else{
      setCounter(counter-1)
    }
    // console.log("clicked!!")
    // setCounter(counter-1);
  };

  return (
    <>
    <h1>hi my name is muzammil</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addvalue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value: {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
