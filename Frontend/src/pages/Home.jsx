import React from 'react'
import boy from '../assets/images/boy.jpg'
import Typewriter from '../components/TypingAnimation/Typewriter'
import Social from '../components/Social/Social.jsx'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Pop up
</div> */}
const Home = () => {
  return (
    <div>
      <section className='w-full h-screen relative bg-black text-white'>
        {/* Text Section */}
        <div className='absolute md:left-0 top-1/4 h-1/2 w-full md:w-1/2 flex flex-col justify-center items-center text-center gap-4 p-10 z-10'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-xl'>HII I'm</p>
          <p className='font-bold text-4xl'>Vivek</p>
          <div className='font-bold text-2xl'><Typewriter words={['FullStack Developer','ML Engineer']}/></div>
          
        </div>

        <div className='text-white w-full md:w-3/4 background2 md:bg-slate-700 h-auto text-center justify-center rounded-xl p-6'>
            <p>
            A skilled and confident newbie in software world having experience in full-stack development, specializing in Python, JavaScript, and cloud technologies.
            </p>
            
        </div>
        {/* <div><a href="../assets/resume/Vivek_Resume.pdf" target='_blank'><button className='w-60 h-10 m-2 bg-gray-900 bg-opacity-30 hover:scale-105 text-white rounded-xl shadow-md shadow-violet-500'>Download Resume</button></a></div> */}
        <div>
          <Social/>
        </div>

        </div>
         <div className='absolute top-0 right-0 w-screen md:w-1/2 h-screen '>
            <img 
                src={boy} 
                alt="boy" 
                className="w-full h-full md:object-contain"
            />
        </div>
      </section>
    </div>
  )
}

export default Home
