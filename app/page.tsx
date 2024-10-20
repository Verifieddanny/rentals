import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import SearchForm from "./components/SearchForm";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/homepage.jpg"
          alt="airbnb background"
          quality={80}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          className="opacity-20"
          priority
        />
      </div>
      <main className="relative z-10 w-full h-full ">
        <div className="w-full h-dvh flex md:flex-row flex-col md:justify-between justify-center md:gap-y-0 gap-y-24 px-4 items-center">
<div className="text-[#f1f1f1]">
  <p className="font-bold md:text-8xl text-4xl mb-10">Our best prices when you book direct
</p>
<p className=" italic">  “Tailored Accommodation: Where Comfort Meets Convenience for Every Stay.”</p>
</div>
            <SearchForm/>
        </div>
      </main>
      <div className="bg-[#f1f1f1] text-[#010101] md:py-24 py-4 lg:px-96 md:px-12 px-8 w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
<p className="md:text-5xl text-3xl font-thin italic text-center md:mb-12 mb-6">Stay with us</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti libero consequuntur ullam voluptate doloremque necessitatibus repellendus, voluptas accusamus vel repudiandae et, nesciunt autem unde porro ducimus culpa dolore quidem error.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non.</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum, facere eligendi quasi repudiandae sequi, aspernatur amet architecto quaerat, tempore consequatur? Saepe reprehenderit error eos adipisci quasi veritatis laborum non.</p>
      
      </div>

      <div className="relative z-10 w-full  flex md:flex-row flex-col md:justify-between justify-center md:gap-y-0 gap-y-24 gap-x-12 px-4 items-center py-12 ">

        <Image src="/assets/livingroom.jpg" alt="living room" quality={80} height={400} width={400} className="w-1/2 rounded-md" />

        <div className="p-7 w-1/2 aspect-square h-[437px] rounded-md bg-[#f1f1f1] text-center">
          <p className="font-bold mb-12">Welcome to your ultimate Sheffield experience!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque doloribus officiis, ad aliquid nulla magni, sapiente laboriosam repellat voluptate dolorum recusandae ipsam neque tempore! Eum optio nobis perferendis dolorem?</p>
        </div>
       
      </div>

      <div className="bg-[#f1f1f1] text-[#010101] md:py-24 py-4 lg:px-12  px-8 w-screen h-fit relative left-1/2 right-1/2 -mx-[50vw]">
<p className="md:text-5xl text-3xl font-thin italic text-center md:mb-12 mb-6">Reviews</p>

        <div className="flex flex-col flex-wrap justify-center items-center gap-6 md:flex-row md:gap-x-12">
          <div className="w-[23rem] rounded-md bg-[#010101] text-[#f1f1f1] shadow-md p-5">
          <div className="flex items-center justify-between mb-5">

            <Image src="/assets/man1.jpg" alt="user1" quality={80} height={200} width={200} className=" aspect-square w-[3.5rem] rounded-full" />
            <p className="font-bold text-xl text-center">Rashid Kanur</p>
          </div>

          <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt, vitae cum aut id fugit ex aliquam eaque iusto! Deserunt aperiam quae ducimus quibusdam delectus vitae voluptatibus dolores quaerat molestiae</p>

          <div className="w-full flex items-center justify-center gap-x-4">
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />

          </div>
            </div>


            <div className="w-[23rem] rounded-md bg-[#010101] text-[#f1f1f1] shadow-md p-5">
          <div className="flex items-center justify-between mb-5">

            <Image src="/assets/woman1.jpg" alt="user2" quality={80} height={200} width={200} className=" aspect-square w-[3.5rem] rounded-full object-cover " />
            <p className="font-bold text-xl text-center">Jannet Martin</p>
          </div>

          <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt, vitae cum aut id fugit ex aliquam eaque iusto! Deserunt aperiam quae ducimus quibusdam delectus vitae voluptatibus dolores quaerat molestiae</p>

          <div className="w-full flex items-center justify-center gap-x-4">
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />

          </div>
            </div>


            <div className="w-[23rem] rounded-md bg-[#010101] text-[#f1f1f1] shadow-md p-5">
          <div className="flex items-center justify-between mb-5">

            <Image src="/assets/man2.webp" alt="user3" quality={80} height={200} width={200} className=" aspect-square w-[3.5rem] rounded-full object-cover" />
            <p className="font-bold text-xl text-center">Kevin Bolder</p>
          </div>

          <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt, vitae cum aut id fugit ex aliquam eaque iusto! Deserunt aperiam quae ducimus quibusdam delectus vitae voluptatibus dolores quaerat molestiae</p>

          <div className="w-full flex items-center justify-center gap-x-4">
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />

          </div>
            </div>

            <div className="w-[23rem] rounded-md bg-[#010101] text-[#f1f1f1] shadow-md p-5">
          <div className="flex items-center justify-between mb-5">

            <Image src="/assets/woman2.webp" alt="user4" quality={80} height={200} width={200} className=" aspect-square w-[3.5rem] rounded-full object-cover" />
            <p className="font-bold text-xl text-center">Jessoca Allen</p>
          </div>

          <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat deserunt, vitae cum aut id fugit ex aliquam eaque iusto! Deserunt aperiam quae ducimus quibusdam delectus vitae voluptatibus dolores quaerat molestiae</p>

          <div className="w-full flex items-center justify-center gap-x-4">
            <FaStar className="text-yellow-500" size={24} />
            <FaStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />
            <FaRegStar className="text-yellow-500" size={24} />

          </div>
            </div>
            </div>
     

      </div>

    </>
  );
}