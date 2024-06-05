'use client';
import josndata from '../data/data.json'
import Image from 'next/image';

function Pricing() {
  return (
  <>
  <section id="pricing" className="text-gray-600 body-font overflow-x-hidden">
  <div className="container w-5/6 px-5 py-24 mx-auto">
  <Image width={100} height={100} className="left-[70rem] relative  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
    <div className="flex flex-col text-center w-full mb-20">
    <div className="relative  z-10">
        <div className="w-60 h-32 blur-xl bg-orange left-[30rem] -top-10 rounded-full absolute  opacity-70">
        
        </div>
      </div>
  <div className="relative  z-10">
        <div className="w-60 h-32 blur-xl bg-yellow left-[30rem]  rounded-full absolute  opacity-50">
        
        </div>
      </div>
      
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 z-30 text-black">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base z-30 text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div className="flex mx-auto border-2 border-black rounded overflow-hidden mt-6">
        <button className="py-1 px-4 bg-black text-white focus:outline-none">Monthly</button>
        <button className="py-1 px-4 focus:outline-none">Annually</button>
      </div>
      
    </div>
    <div className="flex flex-wrap -m-4">
        {josndata.pricing.map((user,index)=>  
      <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 hover:border-orange border-gray-300 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{user.plan}</h2>
          <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{user.price}</h1>
          {
            user.features.map((feature,index)=>
            <div key={index}>
                <p className="flex items-center text-gray-900 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{feature}
          </p>

            </div>
            )
          }
          
          
          <button className="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
        
     </div>
        </div>)}
             
     
      
    </div>
  </div>
</section>
  </>
  )
}

export default Pricing
