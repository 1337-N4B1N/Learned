import { useState } from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
// import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
   
    <div className='  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
      
    <Manager />
    </div>
      
    
      
      <Footer/>
    </>
  )
}

export default App
