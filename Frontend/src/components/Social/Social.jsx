import React from 'react'
import insta from '../../assets/images/insta.jpeg'
import gthb from '../../assets/images/gthb.png'
import linkedIn from '../../assets/images/linkedIn.jpeg'

const Social = () => {
  return (
    <div className='flex gap-2 bg-white w-88  h-auto text-black justify-center items-center px-5 rounded-2xl m-5'>
      <p className='font-semibold'>Follow me on : </p>
      <a href=""><img className='h-10' src={linkedIn} alt="" /></a>
      <a href=""><img  className='h-10' src={gthb} alt="" /></a>
      <a href=""><img  className='h-10' src={insta} alt="" /></a>
    </div>
  )
}

export default Social
