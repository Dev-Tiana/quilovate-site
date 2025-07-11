import React from 'react'
import Valuesprop from './Valuesprop'
import Valuescard from './Valuescard'

const Values = () => {
  return (
    <div id='values' className='bg-[#F9F9F9]' >
        <div className='flex justify-center items-center'><h1 className='font-[Sora] font-bold text-[2.5rem]'>Our Core Values</h1></div>
        <Valuescard />
    </div>
  )
}

export default Values