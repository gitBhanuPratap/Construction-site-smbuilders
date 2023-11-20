import React from 'react'
import mapsImg from "../assets/ServiceImages/maps.jpg";
import interiorImg from "../assets/ServiceImages/interior.jpg";
import modelImg from "../assets/ServiceImages/model.jpg";

const Carousel = () => {
    
        //write code here to make an array of 3 imported images which will be used as background image
        const slides = [
            { slide: mapsImg },
            { slide: interiorImg },
            { slide: modelImg }
        ];
  return (
    <div className='max-w-[80%] h-max-[70%] w-full'>
        <div style={{backgroundImage: `url(${slides[0].slide})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-100'>

        </div>
    </div>
  )
}
export default Carousel;