import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
       <div className="w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
        <Image
          src="/assets/listing.jpg"
          alt="airbnb background"
          quality={80}
        //   fill
          width={1200}
          height={1200}          
          style={{
            objectFit: 'cover',
            objectPosition: '0% 70%',
          }}
          className="opacity-20 w-full h-[40dvh]"
          priority
        />
        <p className='text-[14rem] absolute top-[4rem] w-full drop-shadow-md font-bold text-[#f1f1f1] text-center'>Listings</p>
      </div>

      <div className="bg-[#f1f1f1]  text-[#010101] md:py-24 py-4 lg:px-96 md:px-12 px-8 w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
<p className="md:text-5xl text-3xl font-thin italic text-center md:mb-12 mb-6">City break in the heart of Chester</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti libero consequuntur ullam voluptate doloremque necessitatibus repellendus, voluptas accusamus vel repudiandae et, nesciunt autem unde porro ducimus culpa dolore quidem error.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non.</p>
      
      </div>


      <div className="bg-white  text-[#010101] md:py-24 py-4 lg:px-96 md:px-12 px-8 w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
<p className="md:text-5xl text-3xl font-thin italic text-center md:mb-12 mb-6">City break in the heart of Chester</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti libero consequuntur ullam voluptate doloremque necessitatibus repellendus, voluptas accusamus vel repudiandae et, nesciunt autem unde porro ducimus culpa dolore quidem error.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non.</p>
      
      </div>
    </>
  )
}

export default page