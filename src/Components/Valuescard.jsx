import React from 'react'
import { useNavigate } from 'react-router-dom';
import integrity from '../assets/integrity qui.png';
import creativity from '../assets/creativity-icon1.jpeg';
import satisfaction from '../assets/satisfaction-icon2.png'

const Valuescard = () => {
    const navigate = useNavigate();
    const valuesList =[
        {id: 1,
            icon: integrity,
            heading: "Integrity",
            body: " We believe in honesty, transparency, and ethical practices. Every project is handled with confidentiality and a strong commitment to delivering authentic, plagiarism-free content.",

        },
        {id: 2,
            icon: creativity,
            heading: "Creativity",
            body: " We don’t just write, we bring ideas to life. Our team blends innovation with strategy to craft compelling and original content tailored to your needs.",

        },
        {id: 3,
            icon: satisfaction,
            heading: "Customer Satisfaction",
            body: " Your success is our priority. We listen, we adapt, and we deliver beyond expectations — because when you're happy, we've done our job right.",

        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-[4%] md:px-[5%] lg:px-[8%] py-8 text-[#004AAD] bg-[#F9F9F9]'>
        {valuesList.map((card) => (
            <div className='flex flex-col justify-center items-center gap-4 bg-[#F9F9F9] text-white] px-6 py-8 rounded-[8px] ' key={card.id}>
                <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center'><img className='w-[100px] h-[100px] rounded-full' src={card.icon} alt="" /></div>
                <h1 className='font-[Sora] font-bold text-[20px]'>{card.heading}</h1>
                <p className='font-[Sora] font-normal text-[15px]'>{card.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Valuescard