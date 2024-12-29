import React from 'react'
import insta from '../../assets/images/insta.jpeg'
import gthb from '../../assets/images/gthb.png'
import linkedIn from '../../assets/images/linkedIn.jpeg'

const Social = () => {
  return (
    <div className='flex gap-2 bg-white w-full md:w-88  h-auto text-black justify-center items-center px-5 rounded-2xl m-2 md:m-5'>
      <p className='md:font-semibold'>Follow me on : </p>
      <a href="https://linkedin.com/in/vivek1-coder/"><img className='h-5 md:h-10' src={linkedIn} alt="" /></a>
      <a href="https://github.com/Vivek1-coder"><img  className='h-5 md:h-10' src={gthb} alt="" /></a>
      <a href="https://www.instagram.com/viv.ek_18055/"><img  className='h-5 md:h-10' src={insta} alt="" /></a>
    </div>
  )
}

export default Social
