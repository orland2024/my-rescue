import React from 'react'
import Navbar from './Navbar'
import Log from '../assets/Image/Log.png'
import JQ from '../assets/Image/JQ.png'
import WP from '../assets/Image/WP.png'
import LS from '../assets/Image/LS.png'
import SAS from '../assets/Image/SAS.png'
import logoS3 from '../assets/Image/logoS3.png'
import photo from '../assets/Image/photo.svg'
import preview1 from '../assets/Image/preview1.png'
import preview2 from '../assets/Image/preview2.png'
import preview3 from '../assets/Image/preview3.png'
import preview4 from '../assets/Image/preview4.png'
import preview5 from '../assets/Image/preview5.png'
import preview6 from '../assets/Image/preview6.png'
import logoS5 from '../assets/Image/logoS5.png'
import logo from '../assets/Image/logo.png'


export default function App() {
  return (
    <section>
      <div>
        {/*CONSTRUCTION DE LA NAVBAR*/}
      <Navbar/>
      </div>

      {/*PREMIERE SECTION*/}

      <article className='flex col md:flex row lg:flex row xl:flex row 2xl: flex row px-10 py-10 flex justify-between'>
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

      <article className='px-10 py-10'>
        <div className='mb-5'>
          <div>
          <h1 className='text-2xl font-bold text-blue-700 text-center mb-4'>Services</h1>
          <h1 className='text-4xl font-bold text-center mb-4'>Exploring My Design <strong className='text-blue-600'>Skills</strong></h1>
          <p className='text-center'>We transform your ideas into a distinctive web project that both inspires <br />
          you and captivates your customers</p>
          </div>
          <div className='mt-5 flex justify-end gap-2'>
          <button className='bg-blue-600 rounded-full w-5 h-5 '></button>
          <button className='bg-blue-600 rounded-full w-5 h-5 '></button>
          </div>
        </div>
        
        <div className='mb-10 flex gap-2'>
          
         <div className='bg-blue-500 h-[300px] w-[475px] px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-white font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-white'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         <div className='border-2 h-[300px] w-[475px] px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-blue-700 font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-blue-700'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         <div className='border-2 h-[300px] w-[475px] px-5 py-5'>
          <img src={photo} alt="" />
          <h1 className='text-2xl text-blue-700 font-bold'>Website / App Design UX / UI Design</h1>
          <p className='text-blue-700'>Creating Engaging Digital Experiences <br />for Websites and Apps through UX/UI <br />Design brlearn more</p>
         </div>
         </div>
         <div className='bg-blue-700 h-[300px] pt-5'>
          <div>
          <h1 className='text-white font-bold text-lg text-center'>Our Milestones</h1>
          <h1 className='text-white font-bold text-4xl text-center'>What sets our studio apart <br />for you projects?</h1>
          </div>
          <div className='flex justify-between px-20 py-8'>
          <div className='bg-white w-48 h-24 border-2 text-center'><span className='font-bold text-lg'>8000+</span> <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-48 h-24 border-2 text-center' ><span className='font-bold text-lg'>100%</span> <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-48 h-24 border-2 text-center'><span className='font-bold text-lg'>3.5K</span> <br />figma ipsum component variant main layer.Hand.</div>
          <div className='bg-white w-48 h-24 border-2 text-center'><span className='font-bold text-lg'>240+</span> <br />figma ipsum component variant main layer.Hand.</div>
          </div>
         </div>
      </article>

      {/*CINQUIEME SECTION*/}

      <article className='px-10 py-10'>
        <div className='font-bold text-center'>
          <h3 className='text-blue-800 text-xl mb-5'>Our projects</h3>
          <h1 className='text-3xl mb-5'>Presenting My Design <br /> Portfolio and Case Studies</h1>
          <div className='flex gap-2 justify-center mb-10'> 
            <button className='bg-blue-600 w-32 h-12 rounded-full text-white'>ALL</button>
            <button className='bg-white rounded-full border-2 border-blue-600 w-32 h-12'>UI/UX Design</button>
            <button className='bg-white rounded-full border-2 border-blue-600 w-36 h-12'>Branding design</button>
            <button className='bg-white rounded-full border-2 border-blue-600 w-32 h-12'>Wordpress</button>
          </div>
        </div>
          <div>
            <div className='flex gap-5 mb-5'>
              <img src={preview1} alt="" />
              <img src={preview2} alt="" />
              <img src={preview3} alt="" />
            </div>
            <div className='flex gap-5'>
              <img src={preview4} alt="" />
              <img src={preview5} alt="" />
              <img src={preview6} alt="" />
            </div>
          </div>
      </article>

      {/*SIXIEME SECTION*/}
      
      <article className='px-10 py-10'>
        <div className='text-center font-bold'>
          <h6 className='text-xl text-blue-800'>Testimonials</h6>
          <h1 className='text-3xl'>The Trust From Clients</h1>
          <div className='flex justify-center gap-2 mb-5'>
            <button className='bg-blue-500 rounded-full w-6 h-6'></button>
            <button className='bg-blue-500 rounded-full w-6 h-6'></button>
          </div>
        </div>
        <div className="flex gap-3">
        <div className='bg-white border-2 w-80 h-[450px] px-5 py-5'>
          <img className='mt-10 ml-10' src={logoS5} alt="" /> 
          <p className="">Lorem ipsum dolor sit amet <br /> consectetur.Nibh porttitor <br /> aliquet tellus eget egestas <br /> .Enim ultrices dictumst tortor in <br /> eget neque vestibulum potenti <br /> tempus <br /> <span className='font-bold'>Savannah Nguyen</span> <br /> President of Sales</p>
        </div>
        <div className='bg-white border-2 w-80 h-[450px] px-5 py-5'>
          <img className='mt-10 ml-10' src={logoS5} alt="" /> 
          <p className="">Lorem ipsum dolor sit amet <br /> consectetur.Nibh porttitor <br /> aliquet tellus eget egestas <br /> .Enim ultrices dictumst tortor in <br /> eget neque vestibulum potenti <br /> tempus <br /> <span className='font-bold'>Savannah Nguyen</span> <br /> President of Sales</p>
        </div>
        <div className='bg-white border-2 w-80 h-[450px] px-5 py-5'>
          <img className='mt-10 ml-10' src={logoS5} alt="" /> 
          <p className="">Lorem ipsum dolor sit amet <br /> consectetur.Nibh porttitor <br /> aliquet tellus eget egestas <br /> .Enim ultrices dictumst tortor in <br /> eget neque vestibulum potenti <br /> tempus <br /> <span className='font-bold'>Savannah Nguyen</span> <br /> President of Sales</p>
        </div>
        <div className='bg-white border-2 w-80 h-[450px] px-5 py-5'>
          <img className='mt-10 ml-10' src={logoS5} alt="" /> 
          <p className="">Lorem ipsum dolor sit amet <br /> consectetur.Nibh porttitor <br /> aliquet tellus eget egestas <br /> .Enim ultrices dictumst tortor in <br /> eget neque vestibulum potenti <br /> tempus <br /> <span className='font-bold'>Savannah Nguyen</span> <br /> President of Sales</p>
        </div>
        </div>
      </article>
      
      {/*SEPTIEME SECTION*/} 

     <article className='bg-blue-700 w-[1500px] h-[600px] text-center px-10 py-10'>
      <div className='font-bold text-white mb-10'>
        <h1 className='text-xl'>contact me</h1>
        <h1 className='text-4xl'>Request Free Consultancy</h1>
      </div>
      <div className='flex gap-2 justify-center'>
        <div className='bg-white border-2 w-1/4 h-64 text-black text-left p-5'>
            <p><span className='font-bold'>Hotline 24/7</span><br /><span className='font-bold'>(+23) 5535 68 68</span><br /><span className='font-bold'>Address</span>:2972 Westheimer Rd. 
            Santa Ana, Illinois 85486 <br /><span className='font-bold'>Email</span> :nevaeh.simmons@example.com  <br />
            <span className='font-bold'>Fax</span> : (702) 555-0122 <br /><span className='font-bold'>Work Hour</span>: Mon - Sat: 9:00 - 18:00 </p>
        </div>
        <div className='w-1/4 h-64'>
        <div className='flex gap-2 text-left mb-3'>
          <div className='bg-white w-32 border-2'>Name*</div>
          <div className='bg-white w-64 border-2'>Email Address*</div>
        </div>
        <div className='bg-white w-4/4 mb-3 text-left'>How can we help you?</div>
        <div className='text-left bg-white'>How can we help you? <br /><br /><br /></div> 
        <button className='bg-white w-3 h-3 '></button>
        <p className='text-left'>By submitting, i’m agreed to the Terms & Conditons</p>
        <button className='text-white text-sm font-bold border-2 w-52 rounded-full'>Request Now</button>
        </div>
      </div>
      <div className='flex justify-center mt-32'>
          <div><img src={logo} alt="" /></div>
          <div><p>AeroVision© Copyright 2023. All Rights Reserved</p></div>
        </div>
      </article>
    </section>
  )
}
  