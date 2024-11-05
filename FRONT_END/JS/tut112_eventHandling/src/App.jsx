import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({name:"",email:"",phone:""})

  const handleClick = () => {
    alert("hey I am clicked")
  }
  const handleMouseOver = () => {
    alert(
      "Hey I am a mouse over"
    )
  }
  const handleChange=(e)=>{
    // setForm(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>
          Click Me!
        </button>
      </div>
      {/* <div className="red bg-red-800 text-white h-8 flex items-center m-4 p-3 py-5" onMouseOver={handleMouseOver}>
        I am a red div.Hover over me
      </div> */}
      <div className="login flex flex-col p-3">
      <input type="text" name='name' placeholder='name'value={form.name?form.name:""} onChange={handleChange}/>
      <input type="text" name='email' placeholder='email' value={form.email?form.email:""} onChange={handleChange}/>
      <input type="number" name='phone' placeholder='phone' value={form.phone?form.phone:""} onChange={handleChange}/>
      </div>
    </>
  )
}

export default App
