import React from 'react'
import writeimage from '../assets/write-write quilovvate.gif'

const About = () => {
  return (
    <div id='about'>
        <div className='flex flex-col justify-center items-center px-[6%] py-16 bg-[#F9F9F9]'>
            <h1 className='font-[Sora] font-bold text-[30px] pb-8'>About Us</h1>
            <div className='flex gap-10 items-center'>
                <div className='basis-full md:basis-1/2 text-center'>
                    <p className='font-[Sora] font-[400] text-[16px] leading-8'>Quillovate is a collaborative effort of passionate researchers and seasoned writers committed to excellence in every word. Our team brings a wealth of experience in academia, proof reading, content creation, and professional writing.

                    At Quillovate, we believe in the power of words to shape ideas, inform decisions, and drive progress. Whether you're looking for in-depth research, precise content creation, or insightful writing advice, we're here to elevate your projects to new heights.<br />

                    We're currently working on a unique Writing-as-a-Service (WaaS) platform that connects businesses with expert writers, researchers, and content creators.</p>
                </div>
                <div className='hidden md:flex lg:flex'>
                    <img className='w-[400px]' src={writeimage} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About