import Link from 'next/link';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

interface ChildProps {
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    visibility: boolean;
  }

function Sidenav({setVisibility, visibility}: ChildProps) {
  return (
    <div className={`fixed top-0 ${visibility ? "left-0" : "-left-[30rem]"} transition-all duration-300 z-50 shadow-md h-screen w-[24rem] text-[#101010] bg-[#f1f1f1]`}>
        <div className='flex justify-end px-4 py-4'>

          <IoCloseSharp size={32} className='cursor-pointer' onClick={() => setVisibility(false)} />
        </div>
      <h1 className='font-bold text-5xl text-center'>Test</h1>
      <div className='mt-16 px-12 flex flex-col  w-full text-[#010101] uppercase'>

      <Link href="/">
      <div className='w-full py-4 border-b-2 border-b-[#010101]'>
        Home
      </div>
      </Link>
      <Link href="/">
      <div className='w-full py-4 border-b-2 border-b-[#010101]'>
        Listings
      </div></Link>
      <Link href="/">
      <div className='w-full py-4 border-b-2 border-b-[#010101]'>
        Explore
      </div>
      </Link>
      <Link href="/">
      <div className='w-full py-4 border-b-2 border-b-[#010101]'>
        Stay Longer
      </div>
      </Link>
      <Link href="/">
      <div className='w-full py-4 border-b-2 border-b-[#010101]'>
        Contact
      </div>
      </Link>

      <div className='w-full flex justify-center mt-24'>


      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300 font-semibold'>Book.</div>

      </div>
      </div>

      
    </div>
  )
}

export default Sidenav