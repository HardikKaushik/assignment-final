'use client';
import {motion} from 'framer-motion'

function Features() {
  return (
    <>
    <section id="Features" className="text-gray-600 body-font">
  <div className="container  px-8 py-10  flex flex-wrap ">
    <motion.div className=" lg:w-1/2   sm:w-1/2 w-0 mb-10 lg:mb-0 rounded-lg "
     initial={{ opacity: -2,x:-50  }}
     animate={{ opacity: 1, x:0 }}
     transition={{ duration: 0.5  }}
    >
      <img alt="feature" className=" absolute sm:mx-32 mx-4 sm:h-5/6 h-1/2 left-12 sm:left-10 sm:top-[55rem] top-[53rem] transform z-30 " src="images/featureiphone.png"/>
      <img
          src="/images/circlehero.png"
          alt="iPhone 3"
          className="absolute top-[54rem] sm:left-8 -left-2 w-5/6 sm:w-1/3 transform  z-20"
          
        />
        
        <div className="relative invisible sm:visible top-[150px] left-[100px] -z-20">
        <div className="w-80 h-32 blur-lg bg-yellow rounded-full relative opacity-90">
        
        </div>
      </div>
        <div className="relative invisible sm:visible top-[120px] left-[90px] rotate-[-15deg]-z-10">
        <div className="w-80 h-40 blur-xl bg-orange rounded-full relative opacity-90">
         
        </div>
      </div>
      <img className="mx-8  w-12 sm:visible invisible " src="/images/star1.png" alt="" />

    </motion.div>
    <div className="flex  flex-col flex-wrap lg:py-20   lg:w-1/2 lg:pl-0 lg:text-left text-center">
    <img className="left-[80rem] absolute rotate-[25deg]  w-12 sm:visible invisible " src="/images/star1.png" alt="" />
        <h4 className="text-xl text-orange">FEATURES</h4>
        <h1 className="text-4xl text-black font-extrabold mb-6">Uifry Premium</h1>
        <div className="relative invisible sm:visible  z-20">
        <div className="w-1/4 h-40 blur-xl bg-orange rounded-full absolute  left-[600px] opacity-90">
        
        </div>
      </div>
        <div className="relative invisible sm:visible  z-10">
        <div className="w-1/4 h-40 blur-xl top-20 bg-yellow rounded-full absolute  left-[600px] opacity-75">
       
        </div>
      </div>
     
      <div className="flex w-5/6 flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow ">
          <h2 className="text-gray-900 text-lg title-font font-bold mb-3">budgeting intervals</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          
        </div>
      </div>
      <div className="flex w-5/6 flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-bold mb-3">budgeting intervals</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          
        </div>
      </div>
      <div className="flex w-5/6 flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-bold mb-3">budgeting intervals</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
         
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Features
