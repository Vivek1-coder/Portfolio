import React,{useState} from 'react'
import help from '../assets/images/help.png'
import Social from '../components/Social/Social';
import emailjs from '@emailjs/browser';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    const newform = {
        name : "",
        phone : "",
        email : "",
        message : "",
    }
  const [formData, setFormData] = useState(newform);
    const [buttonText,SetButtonText] = useState('Send')
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicKey =import.meta.env.VITE_PUBLICKEY;

    const templateParams = {
        name : formData.name,
        phone : formData.phone,
        email : formData.email,
        message : formData.message
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetButtonText("Sending...")
        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response) => {
            console.log("Email sent successfully",response);
            setFormData(newform)
            SetButtonText("Send")
        })
        .catch((error)=>{
            console.log(error)
        });
    };

    return (

      <section className='w-full h-screen relative bg-black text-white' >
        <div className='w-full h-full flex  justify-center items-center gap-5  flex-col object-contain '>
            <div className='w-5/6 h-1/2 lg:w-1/2 lg:h-1/2 flex rounded-xl max-lg:justify-center sm:shadow-lg sm:shadow-slate-500 '>
            <div className='lg:h-fit lg:w-1/2 max-lg:hidden'>
                <img src={help} alt="" />
            </div>
            <div className='flex w-fit lg:w-1/2 h-full justfy-center items-center '>
            <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                <div className='flex h-8  justify-between gap-3'>
                    <label className='text-xl font-bold'>Name :</label>
                    <input className='text-black text-center rounded-lg'
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex h-8 justify-between gap-3'>
                <label className='text-xl font-bold'>Phone :</label>
                    <input className='text-black text-center rounded-lg'
                        type="tel"
                        name="phone"
                        placeholder='Enter your mobile no.'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex h-8  justify-between gap-3'>
                <label className='text-xl font-bold'>Email :</label>
                    <input className='text-black text-center rounded-lg'
                        type="email"
                        name="email"
                        placeholder='Enter you Email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex h-16  justify-between gap-3'>
                <label className='text-xl font-bold'>Message :</label>
                    <textarea className='text-black  rounded-lg  h-20'
                        type="text"
                        name="message"
                        placeholder='Write your message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className='btn m-5 max-sm:w-64'>{buttonText}</button>
            </form>
            </div>
            
            </div>

            <div className='flex gap-10  max-sm:w-full md:w-96  h-auto text-black justify-between items-center px-10 py-2 rounded-2xl  mt-10 '>
     
      <a href="https://linkedin.com/in/vivek1-coder/"><Linkedin className='z-40  h-10 w-12 md:h-12 text-blue-700 fill-blue-700 hover:fill-blue-800 hover:text-blue-800 hover:scale-105 ' /></a>
      <a href="https://github.com/Vivek1-coder"><Github  className='h-5 w-12 md:h-12 fill-gray-100 text-gray-100 hover:fill-gray-400 hover:text-gray-400 hover:scale-105' /></a>
      <a href="https://www.instagram.com/viv.ek_18055/"><Instagram  className='h-5 w-12 md:h-12 text-pink-800 hover:text-purple-800 hover:scale-105'/></a>
    </div>

        </div>
        
          
        
        </section>
    );
};
export default Contact
