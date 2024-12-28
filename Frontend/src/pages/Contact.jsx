import React,{useState} from 'react'
import help from '../assets/images/help.png'
import Social from '../components/Social/Social';
const Contact = () => {
    const newform = {
        name : "",
        phone : "",
        email : "",
        message : "",
    }
  const [formData, setFormData] = useState(newform);
    const [buttonText,SetButtonText] = useState('Send')
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetButtonText("Sending...")
        const response = await fetch("http://localhost:5000/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Message sent!");
            SetButtonText("Send")
            setFormData(newform)
        
        } else {
            alert("Failed to send the message.");
            SetButtonText("Send")
        }
    };

    return (

      <section className='w-full h-screen relative bg-black text-white' >
        <div className='w-full h-full flex  justify-center items-center gap-5 flex-col '>
            <div className='w-1/2 h-1/2 flex rounded-xl shadow-lg shadow-slate-500'>
            <div className='h-fit w-1/2'>
                <img src={help} alt="" />
            </div>
            <div className='flex w-1/2 h-full justfy-center items-center'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex h-8 justify-between gap-3'>
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
                <div className='flex h-8 justify-between gap-3'>
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
                <div className='flex h-16 justify-between gap-3'>
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
                <button type="submit" className='btn m-5'>{buttonText}</button>
            </form>
            </div>
            
            </div>

            <div className=''>
            <Social/>
        </div>

        </div>
        
          
        
        </section>
    );
};
export default Contact
