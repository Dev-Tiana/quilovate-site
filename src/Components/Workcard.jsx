import React from 'react'
import { useNavigate } from 'react-router-dom';
import submit from '../assets/submit-project-icon.png';
import commitment from '../assets/commitment-fee-icon.png';
import workproject from '../assets/working-on-project-icon.png';
import review from '../assets/project-completion-icon.jpg'

const Workcard = () => {
    const navigate = useNavigate();
    const workList =[
        {id: 1,
            icon: submit,
            heading: "Submit Your Project",
            body: " Clients start by submitting a project request. Whether you need research, writing, or content creation, we'll gather your requirements and assign the task to our team of in-house experts.",

        },
        {id: 2,
            icon: commitment,
            heading: "Pay Commitment Fee",
            body: " Once the project details are agreed upon, a commitment fee is required. This upfront fee secures your place in our queue and demonstrates your interest in the project. Full payment is made upon project completion.",

        },
        {id: 3,
            icon: workproject,
            heading: "We Get to Work",
            body: " Our team works diligently to deliver high-quality content on time. We keep you informed throughout the process to ensure everything meets your expectations.",

        },
        {id: 4,
            icon: review,
            heading: "Review & Pay",
            body: " Once the project is complete, review the final product. After approval, full payment is made, and we hand over all completed files.",

        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-[6%] md:px-[8%] lg:px-[15%] py-8 text-white'>
        {workList.map((card) => (
            <div className='flex flex-col justify-center items-center gap-4 bg-white text-[#004AAD] px-6 py-8 rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.25)]' key={card.id}>
                <div className='w-[100px] h-[100px] rounded-full flex justify-center items-center'><img className='w-[100px] h-[100px] rounded-full' src={card.icon} alt="" /></div>
                <h1 className='font-[Sora] font-bold text-[20px]'>{card.heading}</h1>
                <p className='font-[Sora] font-normal text-[15px]'>{card.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Workcard