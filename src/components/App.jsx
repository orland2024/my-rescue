import React from 'react'
import Navbar from './Navbar'
import Log from '../assets/Image/Log.png'
import JQ from '../assets/Image/JQ.png'
import WP from '../assets/Image/WP.png'
import LS from '../assets/Image/LS.png'
import SAS from '../assets/Image/SAS.png'
import logoS3 from '../assets/Image/logoS3.png'


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
      <article className='px-10 py-10 bg-grey-700 flex justify-between'>
        <img src={JQ} alt="" />
        <img src={WP} alt="" />
        <img src={LS} alt="" />
        <img src={SAS} alt="" />
      </article>
      <article>
        <div>
          <img src={logoS3} alt="" />
        </div>
        <div>
          <h2 className='font-bold text-blue-700'>About Me</h2>
          <h1 className='text-6xls'> <strong className='text-blue-700'></strong>20 Year’s Experience on Product Design</h1>
          <p>Hello there! I'm Robert Junior. I specialize in web design anddevelopment, and I'm deeply passionate and committed to my craft.With 20 years of experience as a professional graphic designe</p>
          <button>Main skills</button>
          <button>Awards</button>
          <button>Education</button>
        </div>
      </article>
    </section>
  )
}
  