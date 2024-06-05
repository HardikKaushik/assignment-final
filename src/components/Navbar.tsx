'use client';
import { NextPage } from "next";
import { Link as ScrollLink } from 'react-scroll';
import React from "react";
function Navbar() {
  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   // first prevent the default behavior
  //   e.preventDefault();
  //   // get the href and remove everything before the hash (#)
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");
  //   // get the element by id and use scrollIntoView
  //   const elem = document.getElementById(targetId);
  //   elem?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 w-5/6 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3829 10.8852C26.1564 10.6651 25.8387 10.5651 25.5277 10.6163C25.2162 10.6672 24.9472 10.8628 24.8027 11.1434C24.3057 12.1089 23.6745 12.9961 22.9318 13.7805C23.0058 13.2139 23.0431 12.6439 23.0431 12.0724C23.0431 10.9759 22.8961 9.84742 22.6061 8.71805C21.6527 5.00853 19.1525 1.87144 15.7468 0.111205C15.4503 -0.0419942 15.097 -0.0366153 14.8053 0.125549C14.5136 0.287779 14.3226 0.585213 14.2964 0.917908C14.0309 4.28895 12.2945 7.35586 9.52981 9.33424C9.49322 9.3606 9.4569 9.38729 9.42057 9.41386C9.34534 9.46891 9.27441 9.52097 9.20814 9.56467C9.19778 9.57157 9.18749 9.57861 9.17739 9.58585C7.43861 10.8308 6.00391 12.4903 5.0282 14.3854C4.03675 16.3131 3.53406 18.3818 3.53406 20.5336C3.53406 21.6299 3.68101 22.7583 3.97088 23.8879C5.50055 29.8417 10.8585 33.9999 17.0004 33.9999C24.4253 33.9999 30.4659 27.9589 30.4659 20.5336C30.4659 16.872 29.0159 13.4454 26.3829 10.8852Z" fill="#FF5555"/>
<circle cx="16" cy="20" r="4" fill="white"/>
</svg>

      <span className="ml-3 font-extrabold text-2xl">uifry</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-400 font-semibold	flex flex-wrap items-center text-base justify-center">
      <ScrollLink to={"/"} className="mr-5 text-orange  cursor-pointer hover:text-gray-400 ">Home</ScrollLink>
      <ScrollLink to="Features" smooth={true} className="mr-5  cursor-pointer hover:text-gray-400">Features</ScrollLink>
      <ScrollLink to='testimonial'  smooth={true} className="mr-5 cursor-pointer hover:text-gray-400">Testimonial</ScrollLink>
      <ScrollLink to='gallery'  smooth={true} className="mr-5 cursor-pointer hover:text-gray-400">Gallery</ScrollLink>
      <ScrollLink to="pricing"  smooth={true} className="mr-5 cursor-pointer hover:text-gray-400">Pricing</ScrollLink>
      <ScrollLink to="contact"  smooth={true} className="mr-5 cursor-pointer hover:text-gray-400">Contact Us</ScrollLink>
    </nav>
    <button className="inline-flex items-center bg-black border-0 text-white mx-10  px-7 py-3 focus:outline-none hover:text-black hover:bg-gray-200 rounded text-sm mt-4 md:mt-0">Download
      
    </button>

    <img className="mx-8 w-12 sm:visible invisible " src="/images/star1.png" alt="" />
  </div>
</header>
    </>
  )
}

export default Navbar
