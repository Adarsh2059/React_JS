import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  function addVal(){
    setCounter(counter=counter+1)
  }
  function decVal(){
    if(counter>0){
      setCounter(counter=counter-1)
    }
  }
  return (
    <>
      <h1>Counter Project on React Hooks.</h1>

      <h2 >Counter Value {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <button onClick={decVal}>Decrement Value</button>
      <footer>Value-{counter}</footer>
    </>
  )
}

export default App
