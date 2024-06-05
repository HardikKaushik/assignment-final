'use client'
import React from 'react';
import Link from "next/link"
import  {motion}  from 'framer-motion';
import Image from 'next/image';
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
      <Image width={100} height={100} className="mx-8 absolute -rotate-[25deg]  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
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
        <button className=" ml-6 flex items-center text-gray-700 bg-white border-2 px-4 py-2 focus:outline-none text-sm sm:text-base hover:bg-gray-200 rounded ">
             <svg xmlns="http://www.w3.org/2000/svg" className='mx-2' x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
<path d="M 32 4 C 16.536 4 4 16.536 4 32 C 4 47.464 16.536 60 32 60 C 47.464 60 60 47.464 60 32 C 60 16.536 47.464 4 32 4 z M 32 6 C 46.336 6 58 17.664 58 32 C 58 46.336 46.336 58 32 58 C 17.664 58 6 46.336 6 32 C 6 17.664 17.664 6 32 6 z M 24.986328 20.199219 C 23.960984 20.23203 23 21.067138 23 22.185547 L 23 41.814453 C 23 43.305665 24.708481 44.292354 26 43.546875 L 43 33.732422 C 44.291638 32.986874 44.291638 31.013126 43 30.267578 L 26 20.453125 C 25.67712 20.266755 25.32811 20.188282 24.986328 20.199219 z M 25 22.185547 L 42 32 L 25 41.814453 L 25 22.185547 z M 51.820312 34.804688 C 51.277312 34.699688 50.751438 35.055656 50.648438 35.597656 C 50.545438 36.139656 50.901359 36.663578 51.443359 36.767578 L 53.40625 37.144531 C 53.46925 37.156531 53.532703 37.162109 53.595703 37.162109 C 54.065703 37.162109 54.485125 36.829563 54.578125 36.351562 C 54.681125 35.809562 54.325203 35.285641 53.783203 35.181641 L 51.820312 34.804688 z M 50.207031 39.300781 C 49.817172 39.28925 49.441281 39.509016 49.269531 39.884766 C 49.039531 40.386766 49.261672 40.981938 49.763672 41.210938 L 51.582031 42.042969 C 51.717031 42.104969 51.857094 42.132812 51.996094 42.132812 C 52.376094 42.132812 52.73825 41.915828 52.90625 41.548828 C 53.13625 41.046828 52.916063 40.453609 52.414062 40.224609 L 50.595703 39.392578 C 50.469703 39.334328 50.336984 39.304625 50.207031 39.300781 z M 47.589844 43.361328 C 47.335719 43.391828 47.093375 43.517875 46.921875 43.734375 C 46.580875 44.168375 46.655844 44.796672 47.089844 45.138672 L 48.660156 46.376953 C 48.843156 46.520953 49.061344 46.589844 49.277344 46.589844 C 49.573344 46.589844 49.866453 46.458984 50.064453 46.208984 C 50.405453 45.774984 50.332437 45.146687 49.898438 44.804688 L 48.326172 43.568359 C 48.109172 43.396859 47.843969 43.330828 47.589844 43.361328 z M 44.472656 46.716797 C 44.218656 46.686297 43.952375 46.752328 43.734375 46.923828 C 43.300375 47.264828 43.225406 47.894125 43.566406 48.328125 L 44.804688 49.898438 C 45.002688 50.148438 45.295797 50.279297 45.591797 50.279297 C 45.807797 50.279297 46.024984 50.210406 46.208984 50.066406 C 46.642984 49.725406 46.717953 49.096109 46.376953 48.662109 L 45.138672 47.091797 C 44.967672 46.875297 44.726656 46.747297 44.472656 46.716797 z M 40.271484 49.177734 C 40.141531 49.181578 40.010766 49.211281 39.884766 49.269531 C 39.382766 49.498531 39.163578 50.093703 39.392578 50.595703 L 40.224609 52.414062 C 40.392609 52.781062 40.754766 52.998047 41.134766 52.998047 C 41.272766 52.998047 41.413828 52.96825 41.548828 52.90625 C 42.050828 52.67725 42.271969 52.084031 42.042969 51.582031 L 41.210938 49.763672 C 41.039187 49.387922 40.661344 49.166203 40.271484 49.177734 z M 35.597656 50.648438 C 35.055656 50.752437 34.698734 51.276359 34.802734 51.818359 L 35.179688 53.783203 C 35.270688 54.262203 35.690156 54.595703 36.160156 54.595703 C 36.223156 54.595703 36.287562 54.589172 36.351562 54.576172 C 36.893562 54.472172 37.248531 53.94825 37.144531 53.40625 L 36.767578 51.441406 C 36.662578 50.899406 36.134656 50.543438 35.597656 50.648438 z"></path>
</svg><Link href={'/watchvideo'}>Watch Video</Link>
            </button>
      </motion.div>

      <Image width={400} height={400} className="w-5/6 invisible sm:visible" src="/images/lhero.png" alt="" />
      <Image width={100} height={100} className="mx-8  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
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
        <Image width={400} height={400}
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
         <Image width={400} height={400}
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
        <Image width={400} height={400}
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
        <Image width={400} height={400}
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
