import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card.jsx'
// import Image from "next/image";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind css</h1>
     <Card username="Adarsh"/> 
     {/* <Card username="Rahul"/> */}
     <Card />

    </>
  )
}

export default App
