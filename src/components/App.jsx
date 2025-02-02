import React from 'react'
import Navbar from './Navbar'
import Log from '../assets/Image/Log.png'

export default function App() {
  return (
    <section>
      <div>
      <Navbar/>
      </div>
      <article className='px-10 py-10 flex justify-between'>
        <div>
          <h1 className='font-bold'>Welcome to my Portfolio <br /> <br /> </h1>
          <div className='font-medium text-6xl'>
          Hi I’m <br /><strong className='text-blue-900'>Robert Junior</strong><br /> Product Designer
          </div><br />
          <p>Collaborating with highly skilled individuals,<br /> our agency delivers top-quality services</p>
          <div className='flex gap-4 mt-4'>
            <button className='bg-blue-500 rounded-full p-3 h-15 w-32 text-center text-white font-bold'>
              Let's chat
            </button>
            <button className='bg-white-500 rounded-full border-blue border-2  p-3 h-15 w-36 text-center text-black font-bold'>
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img src={Log} alt="" />
        </div>
      </article>
    </section>
  )
}
