import React from 'react'
import { RiMenu4Fill } from "react-icons/ri";

interface ChildProps {
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  }
function Navbar({setVisibility}: ChildProps) {
  return (
    <nav className='bg-[#f1f1f1] text-[#101010] rounded-full  w-[90%]  mx-auto h-16 flex px-4 justify-between items-center shadow-sm'>
        <RiMenu4Fill size={32} className='cursor-pointer' onClick={() => setVisibility(true)}  />
      
      <h1 className='font-bold text-3xl'>Test</h1>


      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300'>Book.</div>

    </nav>
  )
}

export default Navbar