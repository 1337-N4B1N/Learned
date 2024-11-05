import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setColor] = useState(0)
  // // Case1:Run on every render
  // useEffect(() => {
  //  alert("Hello!This runs on every render")
  // })
  // // Case1:Run only on first render
  // useEffect(() => {
  //  alert("Hello!This runs only on first render")
  // },[])
  // // yo [] ma empty i.e[] lekhnu ley chai useEffect trigger garxa whenever the page mounts in browser i.e whenever webpage reloads//
  // // ````````````````````````````````````````````````````````````
  // // ````````````````````````````````````````````````````````````
  // // case3:Runs only when certain value changes
  // useEffect(() => {
  //  alert("It is running because color was changed");
   
  // },[color])
  useEffect(() => {
   alert("Count was changed");
   setColor(color+1)
  },[count])
  // yo [] ma count i.e[count] lekhnu ley chai useEffect trigger garxa whenever  there is change in value of count//
  // useEffect(() => {
  //   alert("First was changed")
  //  },[first])
  
  return (
    <>
    <Navbar color={"cyan"+ color}/>
    {/* <Navbar color="aquablue"/> */}
     <div>The count is {count}</div>
       <button onClick={()=>{
        setCount(count+1)
       }}>Update Count</button>

    </>
  )
}
// main.jsx ma hamle strict mode off gareko xam..coz strict mode on huda 2 timss chalthyo once to check and once it runs so

export default App
