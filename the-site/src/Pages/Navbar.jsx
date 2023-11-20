import React,{useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
const [nav, setNav] = useState(false)

const hanleNav = () =>{
    setNav(!nav)
}

    return (

        <div className="flex justify-between items-center h-16 mx-auto lg:w-[80%] text-white p-4">
            <h1 className='w-full text-xl lg:text-2xl font-bold'>
                {/* <span className="text-lg font-semibold">YourLogo</span> */}
                SM Builders
            </h1>
            <ul className='hidden md:flex'>
                <a href="#home"><li className='p-4'>Home</li></a>
                <a href="#about"><li className='p-4'>About</li></a>
                <a href="#services"><li className='p-4'>Services</li></a>
                <a href="#contactus"><li className='p-4'>ContactUs</li></a>
            </ul>
            <div onClick={hanleNav} className='block md:hidden'>
                {(nav) ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full bg-slate-900 border-r border-r-gray-100 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold m-4'>
                    {/* <span className="text-lg font-semibold">YourLogo</span> */}
                    Your logo
                </h1>
                <ul className='pt-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Services</li>
                    <li className='p-4'>Contact Us</li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar;
