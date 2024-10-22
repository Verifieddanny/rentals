import React from 'react'
import { RiMenu4Fill } from "react-icons/ri";

interface ChildProps {
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  }
function Navbar({setVisibility}: ChildProps) {
  return (
    <nav className='bg-[#f1f1f19d] hover:bg-[#f1f1f1] transition-all duration-300 backdrop-blur-sm text-[#101010] rounded-full  w-[90%]  mx-auto md:h-16 h-[2.5rem] flex px-4 justify-between items-center shadow-sm'>
        <RiMenu4Fill size={32} className='cursor-pointer' onClick={() => setVisibility(true)}  />
      
      <h1 className='font-bold md:text-3xl text-2xl'>Test</h1>


      <div className='md:py-2 md:px-4 py-1 px-2 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300'>Book.</div>

    </nav>
  )
}

export default Navbar