import React from 'react'
import './Cards.css'

const Cards = ({img,link,name,desc}) => {
  return (
    <a href={link}>
    <div className='h-56 w-52 bg-red-400 flex flex-col rounded-2xl gap-2 card'>
        <div className='flex w-full h-20'>
        <img className = " rounded-t-2xl" src={img} alt={name} />
        </div>
        <div className='flex flex-col text-white justify-center w-full text-center gap-2 p-2'>
        <p className='font-bold text-lg'>{name}</p>
        <p className='font-light text-sm'>{desc}</p>
        </div>
        
    </div> 
    </a>
  )
}

export default Cards
