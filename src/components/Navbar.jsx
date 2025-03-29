import React from 'react'
import logo from '../assets/Image/logo.png'


export default function Navbar() {
  return (
    <>
      <nav className='py-10 px-10 justify-between flex md:flex-col lg:flex-col xl:flex-col 2xl:flex-col'>
        <div className='flex gap-2'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p className='font-bold mt-3'>Aerovision</p>
        </div>
        <div className='font-bold flex gap-4'>
            <div>
                <ul className='hidden md:flex flex gap-4 mt-3'>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact me</li>
                </ul>
            </div>
            <button className='flex bg-blue-600 rounded-full p-3 text-white text-center'>
                Let's chat !
            </button>
        </div>
      </nav>
      
    </>
  )
}
