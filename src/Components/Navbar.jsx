import Image from 'next/image'
import logo from "@/../public/logo.svg"
import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <div className=" text-white p-5 flex items-center justify-around">
      <div className='flex items-center'>
        <Image src={logo} alt="Logo" className='h-4.5 w-30 '/>
      <NavLink />
      </div>
      <div className='flex gap-3'>
        <button className='bg-transparent border border-gray-400 text-black text-sm font-semibold py-1 px-3 rounded-md'>Log in</button>
        <button className='bg-black text-white text-sm py-1.5 px-3 font-semibold rounded-md'>Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
    