import React from 'react'
import proj_1 from '../assets/images/proj_1.jpeg'
import proj_2 from '../assets/images/proj_2.jpg'
import proj_3 from '../assets/images/proj_3.jpeg'
import proj_4 from '../assets/images/proj_4.png'
import proj_5 from '../assets/images/proj_5.jpg'
import proj_6 from '../assets/images/proj_6.jpg'
import proj_7 from '../assets/images/proj_7.jpg'
import proj_8 from '../assets/images/proj_8.jpg'
import back from '../assets/images/proj_back.jpg'
import Cards from '../components/Cards/Cards.jsx'

const projects = [
  {
    id : 1,
    img : proj_1,
    link : 'https://github.com/Vivek1-coder/Blogger',
    name : 'Blogger',
    desc : 'A blogging website made using reactjs and Appwrite services'
  },
  {
    id : 2,
    img : proj_2,
    link : 'https://github.com/Vivek1-coder/Vtube',
    name : 'Vtube',
    desc : 'Backend of a website similar to youTube'
  },
  {
    id : 3,
    img : proj_3,
    link : 'https://github.com/Vivek1-coder/HospitalBedSlotManagement',
    name : 'Hospital Manager',
    desc : 'A website to manage beds of hospitals in a city'
  },
  {
    id : 4,
    img : proj_4,
    link : 'https://github.com/Vivek1-coder/Breast_Cancer_predictor',
    name : 'Cancer predictor',
    desc : 'A ML model to predict breast cancer at initial stages'
  },
  {
    id : 5,
    img : proj_5,
    link : 'https://github.com/Vivek1-coder/Todo-using-ContextAPI',
    name : 'Todo',
    desc : 'A website to manage your day works'
  },
  {
    id : 6,
    img : proj_6,
    link : 'https://github.com/Vivek1-coder/SpotifyClone',
    name : 'Music',
    desc : 'A music playing webpage inspired from Spotify'
  },
  {
    id : 7,
    img : proj_7,
    link : 'https://github.com/Vivek1-coder/proj1',
    name : 'Netflix Clone',
    desc : 'Clone of UI of netflix'
  },
  {
    id : 8,
    img : proj_8,
    link : 'https://github.com/Vivek1-coder/qrcode',
    name : 'QR generator',
    desc : 'An api to generate qr code'
  },
  
]

const Projects = () => {
  return (
    <div>
       <section className='w-full h-screen relative bg-black text-white '>
        
        <div className=' absolute top-24  w-full h-3/4  rounded-3xl flex items-center justify-center  '>
          <div className='w-3/4 h-full flex flex-wrap justify-center items-center p-10 gap-7  rounded-3xl overflow-auto '>
          {
            projects.map((project,index)=>(
              <Cards key={project.id} 
                    img={project.img}     
                    link={project.link}
                    name={project.name}
                    desc={project.desc}
              />
            ))
          }
              <a href="https://github.com/Vivek1-coder"><button className='btn'>Click for more projects...</button></a>
          </div>
        </div>
        <img className='h-full w-full' src={back} alt="background" />
        </section>
    </div>
  )
}

export default Projects
