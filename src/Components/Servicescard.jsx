import React from 'react'
import { useNavigate } from 'react-router-dom';
import writing from '../assets/write-support1.png';
import research from '../assets/research2.png';
import content from '../assets/content-creation1.jpeg'

const Servicescard = () => {
    const navigate = useNavigate();
    const servicesList =[
        {id: 1,
            icon: writing,
            heading: "Writing Support",
            body: " Get assistance from professional writers to refine your content and meet your deadlines.",

        },
        {id: 2,
            icon: research,
            heading: "Research Assistance",
            body: " Access comprehensive research support to enhance the quality and depth of your work.",

        },
        {id: 3,
            icon: content,
            heading: "Content Creation Guidance",
            body: " Receive expert advice to create compelling content that resonates with your audience.",

        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-[4%] md:px-[5%] lg:px-[8%] py-8 text-white'>
        {servicesList.map((card) => (
            <div className='flex flex-col justify-center items-center gap-4 text-white px-6 py-8 rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] bg-[#004AAD]' key={card.id}>
                <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center'><img className='w-[100px] h-[100px]' src={card.icon} alt="" /></div>
                <h1 className='font-[Sora] font-bold text-[20px]'>{card.heading}</h1>
                <p className='font-[Sora] font-normal text-[15px]'>{card.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Servicescard