import React from 'react'
import quilovateLogo from '../assets/quillovate_logo2.png';
import menu from '../assets/Menu.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isopen, setOpen] = useState(false); 
  const handleToggle = () => setOpen(prev=>!prev);
  return (
    <div className='flex justify-between items-start md:items-center px-[6%] '>
        <div><img className='w-[100px] h-[60px]' src={quilovateLogo} alt="" /></div>
        <div className='hidden md:flex'>
            <ul className='flex justify-between  gap-6'>
              <a href="#about"><li className='font-[Sora] font-[600]'>About Us</li></a>
              <a href="#services"><li className='font-[Sora] font-[600]'>Services</li></a>
              <a href="#how-we-work"><li className='font-[Sora] font-[600]'>How we work</li></a>
              <a href="#contact"><li className='font-[Sora] font-[600]'>Contact Us</li></a>
              <a href="#contact"><li className='font-[Sora] font-[600]'>Join Us</li></a>
            </ul>
        </div>

        {isopen && (
        <div className='flex flex-col justify-center items-center md:hidden'>
            <ul className='flex flex-col justify-between  gap-6'>
                <a href="#about"><li className='font-[Sora] font-[600]'>About Us</li></a>
                <a href="#services"><li className='font-[Sora] font-[600]'>Services</li></a>
                <a href="#how-we-work"><li className='font-[Sora] font-[600]'>How we work</li></a>
                <a href="#contact"><li className='font-[Sora] font-[600]'>Contact Us</li></a>
                <a href="#contact"><li className='font-[Sora] font-[600]'>Join Us</li></a>
            </ul>
        </div>
    ) }

    <button className="flex md:hidden" onClick={handleToggle}>
          <img src={menu} alt=''/>
        </button>
    </div>
  )
}

export default Navbar