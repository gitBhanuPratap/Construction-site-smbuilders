import React, { useEffect } from 'react';
import aboutimg from '../assets/AboutImage/about1.png';
import asphalt from "../assets/bgimages/asfalt.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div id='about' style={{ backgroundImage: `url(${asphalt})` }} className='w-full py-16 px-4'>
            <div className='max-w-[80%] mx-auto grid md:grid-cols-2'>
                <img className='w-[80%] sm:my-auto mx-auto rounded-2xl hover:drop-shadow-lg hover:scale-110 ease-in-out duration-75' src={aboutimg} alt="img" />
                <div className='flex flex-col justify-center mx-auto'>
                    <p data-aos="fade-right"
                        data-aos-easing="ease-in-sine" data-aos-duration="1000" className='heading-font'>ABOUT US</p>
                    <p className='body-font text-center lg:text-left'>
                        With over a decade in the industry, we've been crafting beautiful homes from the ground up. Our 10+ years experience is a testament to our commitment to quality and our passion for turning dreams into realities.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;
