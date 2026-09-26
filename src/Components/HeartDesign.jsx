"use client"
import Image from 'next/image'
import React from 'react'
import heart from "@/../public/image.png"
import { motion } from 'framer-motion'

const HeartDesign = ({loading ,messages}) => {
  return (
    <>
     <div className='fixed top-0 left-0 h-screen w-screen overflow-hidden -z-1'>
      <motion.div
       initial={{ y: "70vh", scale: 1 }}
       animate={{  y: "-70vh", scale: 1 }}
       exit={{ scale: 0 }}
       transition={{ duration: 2 }}
       className={`absolute top-0 left-0 -z-10 ${loading ? "fade-in" : ""} ${messages.length === 0 ? "" : "opacity-0"}`}>
       <Image src={heart} alt="Heart" className="h-[400vh] w-[200vw] object-cover -z-1" />
     </motion.div>
     </div>
    {/* <div className='absolute top-[50vh] left-0 h-screen w-screen '>
     <div className='absolute -left-70 -bottom-220 h-[200vh] w-[80vw] rounded-full bg-[#638AFC] -z-3' ></div>
     <div className='absolute -right-70 -bottom-220 h-[200vh] w-[80vw] rounded-full bg-[#638AFC] -z-3' ></div>
     <div className='absolute -left-60 -bottom-260 h-[200vh] w-[80vw] rounded-full bg-[#F283E4] -z-3' ></div>
     <div className='absolute -right-60 -bottom-260 h-[200vh] w-[80vw] rounded-full bg-[#F283E4] -z-3' ></div>
     <div className='absolute -left-70 -bottom-300 h-[200vh] w-[90vw] rounded-full bg-[#FC2D6A] -z-3' ></div>
     <div className='absolute -right-70 -bottom-300 h-[200vh] w-[90vw] rounded-full bg-[#FC2D6A] -z-3' ></div>
    </div> */}
    </>
  )
}

export default HeartDesign
