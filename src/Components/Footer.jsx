import React from 'react';
import email2 from '../assets/email .png';
import contact from '../assets/contact-us.png'

const Footer = () => {
  return (
    <div id='contact' className='bg-[#F9F9F9] px-[6%]'>
        <div className='flex flex-col justify-center items-center gap-8 py-8'>
            <h1 className='font-[Sora] font-bold text-[20px]'>Contact Us</h1>
            <div className='flex gap-8'>
                <div className='flex flex-col justify-center items-center gap-4 '>
                <img className='w-[50px] h-[50px]' src={email2} alt="" />
                <h1 className='text-[14px] md:text-[18px]'>Email: info@quillovate.com</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img className='w-[50px] h-[50px]' src={contact} alt="" />
                <h1 className='text-[14px] md:text-[18px]'>Phone: +234-816-3502-922</h1>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 py-8'>
            <h1 className='font-[Sora] font-bold text-[20px]'>Join Us Today</h1>
            <p className='font-[Sora] font-normal text-[16px] text-center'>If you're passionate about writing, research, or content creation, become part of our community and grow with Quillovate!</p>
            <button className='bg-[#4169E1] px-[20px] py-[10px] text-white  rounded-[5px] font-[Sora] font-[600] w-fit'>Join Our Community</button>
        </div>
    </div>
  )
}

export default Footer