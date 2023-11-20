import React, { useEffect, useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';

import heroImage from '../assets/heroImage/heroImagemask.png';


function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (

    <div id='home' className='relative w-full overflow-hidden'>
      {/* <div
        style={{ paddingTop: '56.25%' }} >
      </div> */}
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className='relative top-0 left-0 w-full h-screen bg-no-repeat bg-center bg-cover'>
        <Navbar />
        <div className='text-white flex flex-col'>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000"
            className='mt-[25%] mb-[3%] lg:mb-[3%] lg:mt-[7%] max-w-[80%] mx-auto w-full screen flex flex-col'>
            <p className='flex text-left font-fira-sans font-bold text-3xl lg:text-7xl mt-[0%] p-2'>
              {/* <Typewriter words={["Building Dreams"]} loop={true} /> */}
              Building Dreams
            </p>
            <p className='flex font-fira-sans font-semibold text-left text-xl lg:text-3xl mt-[0%] p-2'>
              <Typewriter words={["Brick by Brick"]} loop={true} />
              &nbsp;</p>
          </div>
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000" className='flex flex-col w-[80%] mx-auto'>
            {/* <p className='flex text-left font-titillium font-semibold text-2xl lg:text-4xl mb-[2%] p-2'>
              From Blueprint to Reality
            </p > */}
            <p className='flex leading-5 font-PTsans font-regular text-left text-sm lg:text-xl p-2 lg:w-[60%]'>
              Comprehensive Construction Solutions Tailored for You. From start to finish, we offer easy, all-in-one service for your building needs. Let’s create spaces that aren't just built, but uniquely yours.
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine" data-aos-duration="1000"
            className='flex flex-row w-[80%] mx-auto mt-[5%] lg:mt-[2%]' >
            <a href="#projects">
              <button class="bg-transparent hover:bg-blue-500 font-fira-sans font-bold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                Our Projects
              </button>
            </a>
            <a href="#contactus" className='ml-[5%] lg:ml-[2%]'>
            <button class="w-32 bg-transparent hover:bg-blue-500 font-fira-sans font-bold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded ml-[5%] lg:ml-[2%]">
              Contact us
            </button>
            </a>
          </div>

        </div>
      </div>
    </div >


  );
}

export default Hero;