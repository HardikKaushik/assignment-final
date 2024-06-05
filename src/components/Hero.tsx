'use client'
import React from 'react';
import Link from "next/link"
import  {motion}  from 'framer-motion';
function Hero() {
  return (
   <>
   <section className="text-gray-600 body-font  ">
  <div className="container mx-auto  flex px-5  md:flex-row w-5/6  flex-col items-center ">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex  flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
    
    <div className="absolute none sm:block sm:top-28 top-[290px] sm:left-[350px] left-[200px] -z-10">
        <div className="sm:w-60 w-20 sm:h-32 h-20 blur-xl bg-orange rounded-full relative opacity-90">
          
        </div>
      </div>
    <div className="absolute sm:top-40 top-[300px]  sm:left-[350px] left-[150px] -z-20">
        <div className="sm:w-60 w-20 h-32 blur-lg bg-yellow rounded-full relative opacity-75">
         
        </div>
      </div>
      <img className="mx-8 absolute -rotate-[25deg]  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      
      >

      <h1 className="title-font sm:text-4xl text-3xl mb-4 lg:text-6xl font-bold  mt-16 text-gray-900">Make the best Financial Decisions
        
      </h1>
      <p className="mb-8  leading-relaxed">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
      </motion.div>
      <motion.div className="flex  justify-center"
       initial={{ opacity: -2,y:50  }}
       animate={{ opacity: 1, y:0 }}
       transition={{ duration: 0.5  }}
      >
        <button className="inline-flex items-center text-white bg-black border-0 sm:py-2 sm:px-6 px-1 text-sm sm:text-base focus:outline-none hover:bg-gray-200 hover:text-black rounded "><Link href={'/start'}>Get started</Link>
        
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-white border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            <Link href={'/watchvideo'}>Watch Video</Link>
            </button>
      </motion.div>

      <img className="w-5/6 invisible sm:visible" src="/images/lhero.png" alt="" />
      <img className="mx-8  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
    </div>
    <div className="relative w-1/2 sm:w1/2  lg:max-w-lg lg:w-full -top-[400px] md:w-1/2 ">
    <div className="absolute top-[450px] invisible sm:visible left-[100px] -z-10">
        <div className="w-60 h-32 blur-xl bg-orange rounded-full relative opacity-90">
          
        </div>
      </div>
      

        <motion.div 
        initial={{ opacity: -2, x:50  }}
        animate={{ opacity: 1 , x:0}}
        transition={{ duration: 1.5  }}
        >
        <img
          src="/images/ophone.png"
          alt="iPhone 1"
          className="absolute sm:top-0 top-40 sm:-left-20 left-19 transform  z-30"
          style={{ width: '450px' }}
          />
           </motion.div>
         

         <motion.div
         initial={{ opacity: -2, x:50 }}
         animate={{ opacity: 1,x:0}}
         transition={{ duration: 1.0 }}
         >
         <img
          src="/images/iphone2.png"
          alt="iPhone 2"
          className="absolute sm:top-14 top-44 sm:left-4 left-[30px] transform z-20"
          style={{ width: '450px' }}
          />
          </motion.div>

         <motion.div
         initial={{ opacity: -2,x:50  }}
         animate={{ opacity: 1, x:0 }}
         transition={{ duration: 0.5  }}
         >
        <img
          src="/images/iphone3.png"
          alt="iPhone 3"
          className="absolute sm:top-20 top-48 sm:left-20 left-[40px] transform  z-10"
          style={{ width: '420px' }}
          />
          </motion.div>
       
       <motion.div
         initial={{ opacity: -2,  }}
         animate={{ opacity: 1,  }}
         transition={{ duration: 0.5,delay:1 }}
       >
        <img
          src="/images/circlehero.png"
          alt="iPhone 3"
          className="absolute top-18 left-18 invisible sm:visible transform  z-5"
          style={{ width: '500px' }}
          />
         </motion.div>
   
    </div>
  </div>
</section>
   </>
  )
}

export default Hero
