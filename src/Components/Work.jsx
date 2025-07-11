import React from 'react'
import Workcard from './Workcard'

const Work = () => {
  return (
    <div id='how-we-work'>
        <div className='flex flex-col  justify-center items-center py-10'>
            <div className='basis-[30%]'><h1 className='font-[Sora] font-bold text-[2.5rem]'>How We Work</h1></div>
            <div className='basis-[70%]'><Workcard /></div>
        </div>
    </div>
  )
}

export default Work