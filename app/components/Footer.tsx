import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#010101] w-screen relative left-1/2 right-1/2 -mx-[50vw] text-[#f1f1f1] pt-[4rem] pb-[1rem]'>
      <h1 className='font-bold text-3xl p-2 bg-[#f1f1f1] text-[#010101] mx-auto  w-fit h-fit text-center mb-12'>Test</h1>
<div className='w-full flex justify-center items-center gap-x-5 mb-12'>

<p className='items-center flex'> <CiMail className='mr-2' /> test@test.com</p>  <p className='flex items-center'> <FaPhone className='mr-2' />+9188372890</p>
</div>

<div className='w-full flex justify-center items-center gap-x-5 '>

    <p className='cursor-pointer pointer-events-auto'>Copyright © 2024</p>
    <p className='cursor-pointer pointer-events-auto'>Privacy Policy</p>
    <p className='cursor-pointer pointer-events-auto'>Cookie Policy</p>
    <p className='cursor-pointer pointer-events-auto'>Terms & Conditions</p>
</div>

    </footer>
  )
}

export default Footer