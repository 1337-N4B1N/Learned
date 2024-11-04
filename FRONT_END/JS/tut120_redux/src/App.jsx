import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { increment,decrement,multiply, incrementByAmount } from './redux/counter/counterSlice'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
    <Navbar />
    <div>
    
     <button onClick={()=>dispatch(decrement())} >-</button>
     Currently count is {count}
     <button onClick={()=>dispatch(increment())} >+</button>
     <br />
     The value is now{count}
     <button onClick={()=>dispatch(incrementByAmount(6))} >+6</button>
     
     <br />
     The value is now{count}
     <button onClick={()=>dispatch(multiply())} >*</button>
     
    </div>
    </>
  )
}

export default App
