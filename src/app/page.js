import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='relative h-screen w-screen bg-gray-100 overflow-hidden'>
     <Navbar />
     <div className='absolute -left-10 -bottom-250 h-[200vh] w-[200vw]  backdrop-blur-3xl z-100' ></div>
     <div className='absolute -left-80 -bottom-350 h-[200vh] w-[70vw] rounded-full bg-[#5B8FFC]' ></div>
     <div className='absolute -right-80 -bottom-350 h-[200vh] w-[80vw] rounded-full bg-[#5B8FFC]' ></div>
     <div className='absolute -left-80 -bottom-400 h-[200vh] w-[80vw] rounded-full bg-[#F283E4]' ></div>
     <div className='absolute -right-80 -bottom-400 h-[200vh] w-[80vw] rounded-full bg-[#F283E4]' ></div>
     <div className='absolute -left-80 -bottom-430 h-[200vh] w-[80vw] rounded-full bg-[#FC2D6A]' ></div>
     <div className='absolute -right-80 -bottom-430 h-[200vh] w-[80vw] rounded-full bg-[#FC2D6A]' ></div>

    </div>
  )
}

export default page
