import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () =>{
    console.log('clicked');
    
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
  //   if(counter <= 20 ){
  //   setCounter(counter)
  // }
      if(counter <= 20){
        let color=document.querySelector('p')
        color.style.color='red'
      }
      }
 
  const removeValue = () =>{
    counter = counter - 1;
    if(counter >= 0 )
    setCounter(counter)
 }

  return (
    <>
      <h1>Learn React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    <p>Colour: {counter}</p>
    </>
  )
}

export default App
