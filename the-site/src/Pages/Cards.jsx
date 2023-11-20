import React from 'react'
import HousedesignImg from "../assets/ServiceImages/Housedesign.jpg";
import mapsImg from "../assets/ServiceImages/maps.jpg";
import interiorImg from "../assets/ServiceImages/interior.jpg";
import modelImg from "../assets/ServiceImages/model.jpg";
import GardeningImg from "../assets/ServiceImages/gardening.jpg";

const Cards = () => {
  return (
    <div className='mx-auto grid md:grid-cols-5 gap-6 p-4'>
        <div className='h-[80%] w-full shadow-2xl flex flex-col pb-12 bg-gray-600 rounded-3xl hover:scale-105 ease-in-out duration-100'>
            <img className='pb-3 rounded-t-3xl h-[90%] md:h-[95%] sm:h-[90%] ' src={mapsImg}alt="" />
            <p className='tag-font'>Detailed Maps</p>
        </div>

        <div className='h-[80%] w-full shadow-2xl flex flex-col pb-12 bg-gray-600 rounded-3xl hover:scale-105 ease-in-out duration-100'>
            <img className='pb-3 rounded-t-3xl h-[95%] md:h-[95%] sm:h-[90%]' src={HousedesignImg}alt="" />
            <p className='tag-font'>House Design</p>
        </div>

        <div className='h-[80%] w-full shadow-2xl flex flex-col pb-12 bg-gray-600 rounded-3xl hover:scale-105 ease-in-out duration-100'>
            <img className='pb-3 rounded-t-3xl h-[95%] md:h-[95%] sm:h-[90%]' src={interiorImg}alt="" />
            <p className='tag-font'>Interior Design</p>
        </div>

        <div className='h-[80%] w-full shadow-2xl flex flex-col pb-12 bg-gray-600 rounded-3xl hover:scale-105 ease-in-out duration-100'>
            <img className='pb-3 rounded-t-3xl h-[95%] md:h-[95%] sm:h-[90%]' src={modelImg}alt="" />
            <p className='tag-font'>3d Model Showcase</p>
        </div>
        
        <div className='h-[80%] w-full shadow-2xl flex flex-col pb-12 bg-gray-600 rounded-3xl hover:scale-105 ease-in-out duration-100'>
            <img className='pb-3 rounded-t-3xl h-[95%] md:h-[95%] sm:h-[90%]' src={GardeningImg}alt="" />
            <p className='tag-font'>Customised Gardening</p>
        </div>
    </div>
  )
}

export default Cards;
