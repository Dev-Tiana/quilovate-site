import React from 'react'
import backgroundimg from '../assets/quibackground.jpg'

const Hero = () => {
  return (
    <div>
        <div className=" w-full h-fit object-center text-center flex flex-col gap-6 jusitfy-center items-center h-fit p-4" style={{backgroundImage: `Url(${backgroundimg})`}}>
            <h1 className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#004AAD] via-white to-[#004AAD] animate-fadeText text-[2.5rem] md:text-[3.5rem] text-[Sora] font-bold'>Welcome to Quillovate,<br />Your Reliable Writing Companion Creators</h1>
            <p className='text-[#ffffff] text-[18px]'>For Writers, Researchers, and Content </p>
            <button className='bg-[#4169E1] px-[20px] py-[10px] text-white  rounded-[5px] font-[Sora] font-[600] w-fit'>Join Our Community</button>
        </div>
    </div>
  )
}

export default Hero