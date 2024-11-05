import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  let a=5;
  return (
    <>
    {/* useState is one hook..testai useEffect ani aru aru ni hnxan read documentation */}
         <div>The count of  (count) is {count}</div>
         <button onClick={()=>
         {setCount(count+1)}
         }>Update count</button>
         <div>The count of  (a) is {a}</div>
         <button onClick={()=>
         {a=a+1;
         console.log("the value of a is" + a)
         }
         }>Update count</button>
       {/* ynha hamle herim jaba button ma click arxam a ko which doesnt use useState. count change hunna...tara consile herda chage hunxa..testai count wla ko ma chai count ni change hunxa when we click the button of update count */}
         
         
    </>
  )
}

export default App
