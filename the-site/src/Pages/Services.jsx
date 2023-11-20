import React, {useEffect} from 'react'
import serviceimg from "../assets/bgimages/servicebg.png"
import Cards from './Cards';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
    useEffect(() => {
        AOS.init(); 
        AOS.refresh();
    }, []);

    return (
        <div id='services' style={{ backgroundImage: `url(${serviceimg})` }} className='w-full py-4 px-4'>
            <div className='max-w-[80%] flex flex-col mx-auto'>
                <div data-aos="fade-right" data-aos-duration="1000" className='heading-font'>
                    ALL SOLUTIONS AT ONE PLACE
                </div>
                {/* <div className='max-w-[80%] mx-auto grid md:grid-cols-4 gap-4'>
                    <div className='w-full'>
                        <img src={mapsImg} alt="" />
                    </div>
                </div> */}
                <Cards />
            </div>

        </div>

    );
}
export default Services;