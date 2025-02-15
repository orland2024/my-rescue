import React from 'react'
import Navbar from './Navbar'
import Log from '../assets/Image/Log.png'
import JQ from '../assets/Image/JQ.png'
import WP from '../assets/Image/WP.png'
import LS from '../assets/Image/LS.png'
import SAS from '../assets/Image/SAS.png'
import logoS3 from '../assets/Image/logoS3.png'
import photo from '../assets/Image/photo.svg'


export default function App() {
  return (
    <section>
      <div>
        {/*CONSTRUCTION DE LA NAVBAR*/}
      <Navbar/>
      </div>

      {/*PREMIERE SECTION*/}

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
          <img className='h-[500px]' src={Log} alt="" />
        </div>
      </article>

      {/*DEUXIEME SECTION*/}

      <article className='px-10 py-10 bg-gray-300 flex justify-between'>
        <img src={JQ} alt="" />
        <img src={WP} alt="" />
        <img src={LS} alt="" />
        <img src={SAS} alt="" />
      </article>

      {/*TROISIEME SECTION*/}

      <article className='px-10 py-10 flex justify-between'>
        <div>
          <img className='h-[500px]' src={logoS3} alt="" />
        </div>
        <div>
          <h2 className='font-bold text-blue-800 text-lg pb-3'>About Me</h2>
          <h1 className='text-4xl font-bold pb-3'><strong className='text-blue-800'>20 Year’s Experience</strong> <br /> On Product Design</h1>
          <p className='pb-6'>Hello there! I'm Robert Junior. I specialize in web design and development and <br /> I'm deeply passionate and committed to my craft. <br />With 20 years of experience as a professional graphic designe</p>
          <div className='flex gap-4 '>
          <button className='bg-blue-700 rounded-full w-36 h-8 p-3 text-white font-bold pt-1'>Main skills</button>
          <button className='rounded-full border-2 border-indigo-600 w-36 h-8 font-bold'>Awards</button>
          <button className='rounded-full border-2 border-indigo-600 w-36 h-8 font-bold'>Education</button>
          </div>
          <div className='pt-8'>  
            <p className='font-bold'>User Experience Design - UI/UX</p>
            <div className='bg-gray-300 w-96 h-8 rounded-full'>
              <div className='bg-blue-500 w-80 h-8 rounded-full'></div>
              </div>
            <p className='font-bold'>Web & User Interface Design - Development</p>
            <div className='bg-gray-300 w-96 h-8 rounded-full'>
              <div className='bg-blue-500 w-80 h-8 rounded-full'></div>
            </div>
            <p className='font-bold'>Interaction Design - Animation</p>
            <div className='bg-gray-300 w-96 h-8 rounded-full'>
              <div className='bg-blue-500 w-80 h-8 rounded-full'></div>
            </div>
          </div>
        </div>
      </article>

      {/*QUATRIEME SECTION*/}

      <article>
        <div className='mb-10'>
          <h1 className='text-2xl font-bold text-blue-700 text-center mb-4'>Services</h1>
          <h1 className='text-4xl font-bold text-center mb-4'>Exploring My Design <strong className='text-blue-600'>Skills</strong></h1>
          <p className='text-center'>We transform your ideas into a distinctive web project that both inspires <br />
          you and captivates your customers</p>
        </div>
        
        <div className='px-10 py-10 flex gap-2'>
          <div className='pb-10'>
          <button className='bg-blue-600 rounded-full w-5 h-5 '></button>
          <button className='bg-blue-600 rounded-full w-5 h-5 '></button>
          </div>
         <div className='bg-blue-500 h-[300px] w-96 px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-white font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-white'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         <div className='border-2 h-[300px] w-96 px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-blue-700 font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-blue-700'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         <div className='border-2 h-[300px] w-96 px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-blue-700 font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-blue-700'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         </div>
         <div className='bg-blue-700'>
          <h1 className='text-white font-bold text-lg text-center'>Our Milestones</h1>
          <h1 className='text-white font-bold text-2xl text-center'>What sets our studio apartfor you projects?</h1>
          <div className='flex justify-between'>
          <div className='bg-white w-44 h-28 border-2'>8000+ <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-44 h-28 border-2' >100% <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-44 h-28 border-2'>3.5K <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-44 h-28 border-2'>240+ <br />figma ipsum component variant main layer.Hand.</div>
          </div>
         </div>
      </article>

      {/*CINQUIEME SECTION*/}

    </section>
  )
}
  