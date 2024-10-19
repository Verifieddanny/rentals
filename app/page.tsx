import Image from "next/image";
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
      <div className="bg-white w-screen h-screen relative left-1/2 right-1/2 -mx-[50vw]">

      </div>
    </>
  );
}