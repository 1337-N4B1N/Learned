import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn,setshowbtn]=useState(false)
  const [todos, setTodos] = useState([
    {
      title:"Hello",
      desc:"I am a good todo"
    },
    {
      title:"Hello!Me next todo",
      desc:"I am also good todo"
    },
    {
      title:"Heheh!me a grocery todo",
      desc:"I am a good todo but I am grocer"
    }
  ])
  // const Todo=({todo})=>{return (<>
  //   <div className='m-4 border border-1 border-purple-400'>
  // <div className="todo">{todo.title}</div>
  // <div className="todo">{todo.desc}</div>
  // </div>
  // </>)}
  return (
    // map use garda unique key dina birsinu hudaina
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* {
        showbtn?<button>showbtn is true</button>:<button>showbtn is false</button>
        } this is used when we need to do ifelse */}
      {showbtn &&<button>I will be shown only when another btn is clicked</button>} 
       { /*This is done when we need to do if */ }
          {
            todos.map(todos=>{
              // return <Todo key={todos.title} todo={todos}/>
             
              /* yo return garera enter thichera next line ma na lekhnu feri blank aauxa..return paxi return garni element tei line ma hunai parxa if next line bata garni bhaye do in the form at return 
              ( 
                code here
              )*/
              return  <div key={todos.title}className='m-4 border border-1 border-purple-400'>
              <div className="todo">{todos.title}</div>
              <div className="todo">{todos.desc}</div>
              </div>
              
            })
          }
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setshowbtn(!showbtn)}>Toggle showbtn</button>
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
