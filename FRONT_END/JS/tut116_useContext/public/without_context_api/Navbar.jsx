import React from 'react'
import Button from  './Button'
// const Navbar = (props)/({count}) => { wihtout useContext
const Navbar = ({count}) => {
  return (
    <div>
      Navbar....
       <Button count={count}/>
       {/* <Button count={props.count}/>  eutai kura ho mathi ra yo  without useContext*/}
    </div>
  )
}

export default Navbar
