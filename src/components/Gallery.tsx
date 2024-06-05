'use client';

import Image from "next/image";

const Gallery = () => {
  return (
    <>
    <section id="gallery" className="text-gray-600 body-font">
  <div className="container w-5/6 px-5 py-24 mx-auto flex flex-wrap">
  <div className="relative  z-10">
        <div className="w-60 h-32 blur-xl bg-orange -left-[1rem] rounded-full absolute  opacity-70">
        
        </div>
      </div>
  <div className="relative  z-10">
        <div className="w-60 h-32 blur-xl bg-yellow left-[4rem] rounded-full absolute  opacity-50">
        
        </div>
      </div>
    <div className="flex z-30 w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-black  lg:w-1/3 lg:mb-0 mb-4">App Gallery</h1>
      
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-black leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
      <Image width={100} height={100} className="mx-80  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
    </div>
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img1.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img2.png"/>
        </div>
        <div className="md:p-2 p-1 w-full">
        <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img4.png"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
        <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img5.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img6.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image width={300} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/images/img7.png"/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Gallery
