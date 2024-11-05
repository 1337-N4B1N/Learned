import React from 'react'

const Footer = () => {
  return (
    <div className='text-white   bg-slate-800 flex flex-col justify-center items-center py-2  w-full '>
        
        <div className="logo font-bold text-2xl mb-1 ">
          <span className='text-green-800'>&lt;</span>
          Pass
          <span className='text-green-800'>OP/&gt;</span>

        </div>
        <div className='flex justify-center items-center pt-1'>
        Created with help of <img src="/icons/heart.png" alt="" className='h-10 mx-2'/>CodeWithHarry
        </div>
      </div>
  )
}

export default Footer
