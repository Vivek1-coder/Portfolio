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
        <div className='absolute left-0 top-1/4 h-1/2 w-1/2 flex flex-col justify-center items-center text-center gap-4 p-10'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-xl'>Hii I'm</p>
          <p className='font-bold text-4xl'>Vivek</p>
          <p className='font-bold text-2xl'><Typewriter words={['FullStack Developer','ML Engineer']}/></p>
          
        </div>

        <div className='text-white w-3/4  bg-slate-700 h-auto text-center justify-center rounded-xl p-6'>
            <p>
            A skilled and confident newbie in software world having experience in full-stack development, specializing in Python, JavaScript, and cloud technologies.
            </p>
        </div>
        <div>
          <Social/>
        </div>

        </div>
         <div className='absolute bottom-0 right-0 w-1/2 '>
            <img 
                src={boy} 
                alt="boy" 
                className="w-full h-full object-contain"
            />
        </div>
      </section>
    </div>
  )
}

export default Home
