import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setcolor]=useState("Purple")
  return (
    <>
    <h1 className="bg-olive-500 text-white p-4 text-4xl text-center">
  Bg-Color changer
</h1>
      <div style={{backgroundColor:color,height: "100vh",
      width: "100%"}}>
        
        <div className="flex flex-wrap gap-3 justify-center p-6">
  
  <button className="w-12 h-12 rounded-full bg-red-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("red")}}
  >
    Red
  </button>

  <button className="w-12 h-12 rounded-full bg-blue-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("blue")}}
  >
    Blue
  </button>

  <button className="w-12 h-12 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("green")}}
  >
    Green
  </button>

  <button className="w-12 h-12 rounded-full bg-yellow-400 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("yellow")}}
  >
    Yellow
  </button>

  <button className="w-12 h-12 rounded-full bg-purple-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("purple")}}
  >
    Purple
  </button>

  <button className="w-12 h-12 rounded-full bg-pink-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("pink")}}
  >
    Pink
  </button>

  <button className="w-12 h-12 rounded-full bg-orange-500 shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("orange")}}
  >
    Orange
  </button>

  <button className="w-12 h-12 rounded-full bg-black text-white shadow-lg hover:scale-110 transition-all duration-200"
    onClick={()=>{setcolor("black")}}
  >
    Black
  </button>

</div>

      </div>
      
    </>
  )
}

export default App
