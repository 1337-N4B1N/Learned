// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className='bg-purple-300 flex items-center  h-[10vh] w-full px-[5vw]'  >
//     <div className="logo font-bold  ">PassOp</div>
//         <ul className='ml-[20vw]' >
//             <li className='flex gap-[20vw] ' >
//             <Link to="/"  className='hover:font-bold'> Home</Link>
//             <Link to="/about"  className='hover:font-bold'>About</Link>
//             <Link to="/contact" className='hover:font-bold' >ContactUs</Link>
//             </li>

//         </ul>
//     </nav>
//   )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-slate-800  text-white mb-4 '  >
      <div className="mycontainer flex items-center justify-between px-4  py-5 max-h-[7.5vh]">
        <div className="logo font-bold text-2xl ">
          <span className='text-green-800'>&lt;</span>
          Pass
          <span className='text-green-800'>OP/&gt;</span>

        </div>
        {/* <ul className='' >
          <li className='flex gap-20' >
            <Link to="/" className='hover:font-bold ]'> Home</Link>
            <Link to="/about" className='hover:font-bold '>About</Link>
            <Link to="/contact" className='hover:font-bold ' >ContactUs</Link>
          </li>

        </ul> */}
        <button className= 'text-white bg-green-900 my-5 ring-white ring-1 rounded-full  flex  items-center justify-between h-14 pl-1 pr-4' >
          
          <img src="/icons/github.png" alt="github logo" className='invert  w-16 p-1' />
          <span className='font-bold '>Github</span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
