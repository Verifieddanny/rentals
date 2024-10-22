import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>    <main className="relative min-h-screen  w-full">

       <div className="w-full h-fit relative ">
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
          className="opacity-20 w-full md:h-[40dvh] h-[20dvh]"
          priority
        />
        <p className='md:text-[14rem] text-[4rem] absolute md:top-[4rem] top-[2.7rem] w-full drop-shadow-md font-bold text-[#f1f1f1] text-center'>Listings</p>
      </div>

      <div className="bg-[#f1f1f1]  text-[#010101] md:py-24 py-4 md:px-12 px-8 w-full h-fit  ">
<p className="md:text-5xl text-3xl font-thin italic text-center md:mb-12 mb-6">City break in the heart of Chester</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti libero consequuntur ullam voluptate doloremque necessitatibus repellendus, voluptas accusamus vel repudiandae et, nesciunt autem unde porro ducimus culpa dolore quidem error.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non.</p>
      
      </div>




      <div className="bg-[#010101]  text-[#f1f1f1] md:py-24 py-4 lg:px-12 px-2 w-full h-fit  ">
      <div className="flex flex-col flex-wrap justify-center items-center md:gap-6 gap-y-6 gap-x-0 md:flex-row md:gap-x-12">

        <div className='w-fit h-fit rounded-md overflow-hidden bg-[#f1f1f1] text-[#010101] p-2'>
            <div className='md:w-[24rem] w-[20rem] h-[15rem] rounded-md overflow-hidden relative mb-[4rem]'>
                <Image src="/assets/listing1.jpg" alt='listing 1' quality={80} width={1200} height={1200} className='object-cover w-full h-full hover:scale-125 transition-all duration-300' />
                <div className='bg-[#101010] text-[#f1f1f1] absolute top-2 right-2 px-2 rounded-md'>Entire Home</div>
            </div>

            <p className='font-bold'>Entire Home</p>
            <p className='md:w-[23rem] w-[19rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ex assumenda minus excepturi voluptates odio similique dolorum natus, accusamus quam quaerat fugit aperiam nesciunt quasi nobis atque eius facere?</p>

      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300 mt-[2rem] w-fit mx-auto'>Read more...</div>

        </div>
        <div className='w-fit h-fit rounded-md overflow-hidden  bg-[#f1f1f1] text-[#010101] p-2'>
        <div className='md:w-[24rem] w-[20rem] h-[15rem] rounded-md overflow-hidden relative mb-[4rem]'>
                <Image src="/assets/listing2.jpg" alt='listing 2' quality={80} width={1200} height={1200} className='object-cover w-full h-full hover:scale-125 transition-all duration-300' />
                <div className='bg-[#101010] text-[#f1f1f1] absolute top-2 right-2 px-2 rounded-md'>Town House</div>
            </div>

            <p className='font-bold'>Town House</p>
            <p className='md:w-[23rem] w-[19rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ex assumenda minus excepturi voluptates odio similique dolorum natus, accusamus quam quaerat fugit aperiam nesciunt quasi nobis atque eius facere?</p>

      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300 mt-[2rem] w-fit mx-auto'>Read more...</div>
        </div>
        <div className='w-fit h-fit rounded-md overflow-hidden  bg-[#f1f1f1] text-[#010101] p-2'>
        <div className='md:w-[24rem] w-[20rem] h-[15rem] rounded-md overflow-hidden relative mb-[4rem]'>
                <Image src="/assets/listing3.jpg" alt='listing 3' quality={80} width={1200} height={1200} className='object-cover w-full h-full hover:scale-125 transition-all duration-300' />
                <div className='bg-[#101010] text-[#f1f1f1] absolute top-2 right-2 px-2 rounded-md'>Entire Home</div>
            </div>

            <p className='font-bold'>Entire Home</p>
            <p className='md:w-[23rem] w-[19rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ex assumenda minus excepturi voluptates odio similique dolorum natus, accusamus quam quaerat fugit aperiam nesciunt quasi nobis atque eius facere?</p>

      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300 mt-[2rem] w-fit mx-auto'>Read more...</div>
        </div>
        <div className='w-fit h-fit rounded-md overflow-hidden  bg-[#f1f1f1] text-[#010101] p-2'>
        <div className='md:w-[24rem] w-[20rem] h-[15rem] rounded-md overflow-hidden relative mb-[4rem]'>
                <Image src="/assets/listing4.jpg" alt='listing 4' quality={80} width={1200} height={1200} className='object-cover w-full h-full hover:scale-125 transition-all duration-300' />
                <div className='bg-[#101010] text-[#f1f1f1] absolute top-2 right-2 px-2 rounded-md'>Town House </div>
            </div>

            <p className='font-bold'>Town House </p>
            <p className='md:w-[23rem] w-[19rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod ex assumenda minus excepturi voluptates odio similique dolorum natus, accusamus quam quaerat fugit aperiam nesciunt quasi nobis atque eius facere?</p>

      <div className='py-2 px-4 rounded-md cursor-pointer flex justify-center items-center border-2 border-[#101010] hover:bg-white transition-all duration-300 mt-[2rem] w-fit mx-auto'>Read more...</div>
        </div>
</div>
      </div>
      </main>
    </>
  )
}

export default page