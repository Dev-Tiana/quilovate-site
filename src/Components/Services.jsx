import React from 'react'
import Servicescard from './Servicescard'

const Services = () => {
  return (
    <div id='services'>
        <div className='flex justify-center items-center py-10'>
            <h1 className='font-[Sora] font-bold text-[2.5rem]'>Our Services</h1>
        </div>
        <Servicescard />
    </div>
  )
}

export default Services