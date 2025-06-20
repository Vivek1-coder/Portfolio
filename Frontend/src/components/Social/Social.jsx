import React from 'react'
import insta from '../../assets/images/insta.jpeg'
import gthb from '../../assets/images/gthb.png'
import linkedIn from '../../assets/images/linkedIn.jpeg'
import { Github, Instagram, Linkedin } from "lucide-react";

const Social = () => {
  return (
    <div className='flex gap-10 bg-white w-full md:w-96  h-auto text-black justify-between items-center px-10 py-4 rounded-2xl   '>
     
      <a href="https://linkedin.com/in/vivek1-coder/"><Linkedin className='z-40  h-10 w-12 md:h-12 text-blue-700 fill-blue-700 hover:fill-blue-800 hover:text-blue-800 hover:scale-105 ' src={linkedIn} alt="" /></a>
      <a href="https://github.com/Vivek1-coder"><Github  className='h-5 w-12 md:h-12 fill-black hover:fill-gray-800 hover:text-gray-800 hover:scale-105' src={gthb} alt="" /></a>
      <a href="https://www.instagram.com/viv.ek_18055/"><Instagram  className='h-5 w-12 md:h-12 text-pink-800 hover:text-purple-800 hover:scale-105' src={insta} alt="" /></a>
    </div>
  )
}

export default Social
