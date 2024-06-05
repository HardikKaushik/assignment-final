'use Client';
import josndata from '../data/data.json'


function Testimonials() {
            

  return (
    <>
    <section id='testimonial' className="text-gray-600 body-font">
        <div className="sm:w-1/5 w-1/2 mx-auto">
        <h4 className="font-semibold text-xl  text-orange text-center">Testimonial</h4>
        <h1 className="font-extrabold sm:text-4xl text-lg  text-center ">What Our Users Say About Us?</h1>
        </div>

  <div className="container w-5/6 mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
    <div className="relative sm:-top-36 -top-18 z-20">
        <div className="w-1/2 h-40 blur-xl bg-orange rounded-full absolute  opacity-90">
          
        </div>
      </div>
    <div className="relative sm:-top-20  -top-8 z-20">
        <div className="w-1/2 h-40 blur-xl bg-yellow rounded-full absolute  opacity-60">
          
        </div>
      </div>
      <img className="absolute sm:top-[113rem] top-[128rem] z-30 sm:left-48 left-18 h-1/3 sm:h-1/2 rounded" alt="hero" src="images/test1.png"/>
      
      <img
          src="/images/circlehero.png"
          alt="iPhone 3"
          className="absolute sm:top-[99rem] top-[121rem] sm:left-1 -left-6 transform  z-20"
          
        />
        
      <img
          src="/images/test2.png"
          alt="iPhone 3"
          className="absolute sm:top-[103rem] top-[120rem] sm:left-80 left-40  transform  z-20"
          
        />
      <img
          src="/images/test3.png"
          alt="iPhone 3"
          className="absolute sm:top-[106rem] top-[120rem] left-8 transform  z-20"
          
        />
      <img
          src="/images/test4.png"
          alt="iPhone 3"
          className="absolute sm:top-[124rem] top-[135rem] left-2 sm:left-12 transform  z-20"
          
        />
        
      <img
          src="/images/test5.png"
          alt="iPhone 3"
          className="absolute sm:top-[128rem] top-[136rem]  sm:left-80 left-40 transform  z-20"
          
        />
      <img className="mx-8  w-12 sm:visible invisible " src="/images/star1.png" alt="" />

        
    </div>
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 sm:mt-0 mt-[20rem] mb-30 flex flex-col md:items-start md:text-left items-center text-center">
    {josndata.testimonials.map((user,index)=>   
   <div key={index}>

    <h4  className="title-font sm:text-xl text-xl mb-4 font-medium text-orange"> {user.name}
      </h4>
       <p   className="mb-8 leading-relaxed">{user.feedback}</p>
   </div>
  
  )
    }   
    </div>
  </div>
</section>
    </>
  )
}

export default Testimonials
