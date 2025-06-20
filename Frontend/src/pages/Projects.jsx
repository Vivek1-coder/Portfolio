import React from 'react'
import messaging from '../assets/images/messages.png'
import xambuddy from '../assets/images/image.png'
import proj_1 from '../assets/images/proj_1.jpeg'
import proj_2 from '../assets/images/proj_2.jpg'
import proj_3 from '../assets/images/proj_3.jpeg'
import proj_5 from '../assets/images/proj_5.jpg'
import breathesafe from '../assets/images/breathesafe.jpg'
import proj_9 from '../assets/images/proj_8.jpg'
import proj_8 from '../assets/images/proj_9.png'
import proj_10 from '../assets/images/proj_10.png'
import proj_11 from '../assets/images/proj_11.png'
import proj_13 from '../assets/images/fashion_clas.png'
import back from '../assets/images/proj_back.jpg'
import ProjectCard from '@/components/Cards/ProjectCard'
import VantaFogBackground from '@/components/VantaFogBackground'

const projects = [
  {
    image: xambuddy,
    name: 'XAM BUDDY',
    description: 'A student-first platform focused on academics, collaboration, and discussions — all in one place.',
    skills: ['Nextjs','Node.js','MongoDb','NOSQL','TypeScript','Auth.js','Google OAuth','socket.io','Tailwind','Google APIs','Drive API','Youtube API','Shadcn','Git','Github','Vercel'],
    github: 'https://github.com/Vivek1-coder/XamBuddy',
    live: 'https://xambuddy-ashy.vercel.app/',
  },
  {
    image: proj_10,
    name: 'Fake News Detection',
    description: 'A Deep Learining based model trained on dataset of newspapers and articles to detect fake news',
    skills: ['Python','Numpy','Pandas','Seaborn','Matplotlib','Tensorflow','Keras','LSTM','Bi-LSTM','Deep Learning','Machine Learning','Kaggle','Streamlit'],
    github: 'https://github.com/Vivek1-coder/FakeNewsDetection',
    live: 'https://fake-news-detector-app-lstm.streamlit.app/',
  },
  {
    image: breathesafe,
    name: 'Breathe Safe',
    description: 'An IOT project to monitor your home AQI and provides suggestions for improving air quality and keeping yourself safe',
    skills: ['Next.js','React Chartjs','MongoDb','NOSQL','Google Gemini API','ESP8266', 'MQ135','PMS5003','OLED','Arduino IDE','C/C++','JavaScript', 'Tailwind','Vercel'],
    github: 'https://github.com/Vivek1-coder/BreatheSafe',
    live: 'https://breathesafe.vercel.app/',
  },
   {
    image: proj_11,
    name: 'Kavyapath',
    description: 'A website promote Hindi poems with many integrated tools to enhance writing and reading experience in hindi',
    skills: ['Nextjs','MongoDb','NOSQL','Google Gemini API','Auth.js','TypeScript','TailwindCSS','Vercel'],
    github: 'https://github.com/Vivek1-coder/Kavyapath',
    live: 'https://kavyapath.vercel.app/',
  },
  {
    image: proj_3,
    name: 'Hospital Manager',
    description: 'A website to manage beds of hospitals in a city with proper data management of patients and hospitals',
    skills: ['Django','Python', 'SQL','Xampp','BootStrap'],
    github: 'https://github.com/Vivek1-coder/HospitalBedSlotManagement',
    live: '',
  },
  {
    image: messaging,
    name: 'Mystry Messaging',
    description: 'A website similar to true feedback where users can send messages to each other just by knowing their name anonymously',
    skills: ['Nextjs','MongoDb','NOSQL','Google Gemini API','Auth.js','TypeScript','TailwindCSS','Vercel'],
    github: 'https://github.com/Vivek1-coder/MystryMessaging',
    live: 'https://mystrymessaging.vercel.app/',
  },
  {
    image: proj_1,
    name: 'Blogger',
    description: 'A blogging website made using ReactJS and Appwrite services',
    skills: ['React', 'Appwrite', 'Markdown'],
    github: 'https://github.com/Vivek1-coder/BlogWriter',
    live: 'https://vivek1-coder.github.io/BlogWriter/',
  },
  
  {
    image: proj_2,
    name: 'Vtube',
    description: 'Backend of a website similar to YouTube',
    skills: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Vivek1-coder/Vtube',
    live: '',
  },
  {
    image: proj_13,
    name: 'Clothes Classifier',
    description: 'Classifies different clothes fashion',
    skills: ['CNN', 'HuggingFace Spaces'],
    github: 'https://github.com/Vivek1-coder/FashionClassifier',
    live: 'https://vivek1-coder-fashion-classification.hf.space/?__theme=system&deep_link=4u04j1FDFhA',
  },
  {
    image: proj_5,
    name: 'iTask',
    description: 'A website to manage your day works',
    skills: ['React', 'Context API'],
    github: 'https://github.com/Vivek1-coder/Todo-using-ContextAPI',
    live: 'https://vivek1-coder.github.io/Todo-using-ContextAPI/',
  },
  {
    image: proj_8,
    name: 'Password Generator',
    description: 'Generates random password',
    skills: ['React','React hooks','Github Pages'],
    github: 'https://github.com/Vivek1-coder/Password_generator',
    live: 'https://vivek1-coder.github.io/Password_generator/',
  },
  {
    image: proj_9,
    name: 'QR Generator',
    description: 'An API to generate QR codes',
    skills: ['Python', 'QRcode'],
    github: 'https://github.com/Vivek1-coder/qrcode',
    live: '',
  },
]


const Projects = () => {
  return (
    <div>
       <section className='w-full min-h-screen relative bg-black text-white overflow-hidden flex justify-center'>
        <div className=' absolute  h-full  overflow-hidden  rounded-3xl flex flex-col items-center justify-center '>
          <div className='pt-20 relative z-10 h-full flex flex-wrap justify-center items-center  gap-8 pb-8 rounded-3xl px-6 overflow-y-auto overflow-x-hidden scroll-smooth'>
           {
            projects.map((project,index)=>(
              <ProjectCard key={index} project={project}
              />
            ))
          }
          </div>
          {/* <a href="https://github.com/Vivek1-coder" target='_blank'><button className='btn mt-5 hover:scale-105'>Click for more projects...</button></a> */}
        </div>
        <VantaFogBackground />
        {/* <img className='h-screen w-full' src={back} alt="background" /> */}
        </section>
    </div>
  )
}

export default Projects
