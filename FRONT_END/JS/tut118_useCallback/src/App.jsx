import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  // useCallback ma [count] denotes if count chane bho bhnye getAdective fxn will also chngae though we have used useCallback .if [] empty is there then it will only be created once...
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective,setAdjectve]=useState("good")
  const getAdjective=useCallback(()=>{
    return "another"+count
  },[count])
  // const getAdjective=()=>{
  //   return "another"+count
  // }
  // Js ma 2 ta fxn same lekhya xa like fxn1 and fxn2 then too fxn!=fxn2 or fxn1===fxn2 =false;
  // so every time page render huda getAdjective fxn gets recreated as new one as Navbar component changes due to which I am Navbar can be seen in console every time page re-renders even though memo is used in Navbar..TO prevent from this situation we use callBack ..

  return (
    <>
      <Navbar adjective={"torpey"} getAdjective={getAdjective}/> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
