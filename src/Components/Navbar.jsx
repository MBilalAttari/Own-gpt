import Image from 'next/image'
import logo from "@/../public/logo.svg"
import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Button from './Button'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div className={`fixed top-0 left-0 right-0 text-white p-5 flex items-center justify-around ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"} transition-colors duration-300 z-50`}>
      <div className='flex items-center'>
        <Image src={logo} alt="Logo" className='h-4.5 w-30 cursor-pointer'/>
      <NavLink />
      </div>
      <div className='flex gap-3'>
        <Button className='text-black'>Log in</Button>
        <Button className='bg-black text-white py-1.5'>Get Started</Button>
      </div>
    </div>
  )
}

export default Navbar
    