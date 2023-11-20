import React, { useState,useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import bgimg from "../assets/bgimages/projectsbg.jpg";
import slide1 from "../assets/corousel/slide1.jpg";
import slide2 from "../assets/corousel/slide2.jpg";
import slide3 from "../assets/corousel/slide3.jpg";
import slide4 from "../assets/corousel/slide4.jpg";

const Projects = () => {
    useEffect(() => {
        AOS.init(); 
        AOS.refresh();
    }, []);

    const slides = [
        { slide: slide1 },
        { slide: slide2 },
        { slide: slide3 },
        { slide: slide4 }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [startX, setStartX] = useState(null);
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 3000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;

        // Detecting swipe direction
        if (startX - endX > 50) {  // Swiped left
            nextSlide();
        } else if (endX - startX > 50) {  // Swiped right
            prevSlide();
        }
    };

    return (
        <div id='projects'
         className="w-full py-8  bg-gray-400 max-h[50%]">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="heading-font">OUR CREATIONS</h2>
            <div className="max-w-[80%] h-[200px] md:h-[500px] w-full mx-auto relative"
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}>
                <div className="w-full h-full bg-no-repeat bg-center bg-contain rounded-2xl duration-100" style={{backgroundImage: `url(${slides[currentSlide].slide})`}}></div>
                
                {/* Navigation buttons for the carousel */}
                <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 p-2 rounded-r-full text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800">‹</button>
                <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 p-2 rounded-l-full text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800">›</button>

                {/* Navigation circles */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-gray-500' : 'bg-gray-300'}`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
