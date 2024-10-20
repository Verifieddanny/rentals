import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
       <div className="fixed top-0 inset-0 z-0">
        <Image
          src="/assets/listing.jpg"
          alt="airbnb background"
          quality={80}
        //   fill
          width={1200}
          height={1200}          
          style={{
            objectFit: 'cover',
            objectPosition: 'bottom center',
          }}
          className="opacity-20 w-screen h-[35dvh]"
          priority
        />
        <p className='text-[14rem] relative -top-[20rem] shadow-md font-bold text-[#f1f1f1] text-center'>Listing</p>
      </div>
    </>
  )
}

export default page