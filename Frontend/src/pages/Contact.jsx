import React,{useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "",email : "",message : "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Message sent!");
        } else {
            alert("Failed to send the message.");
        }
    };

    return (

      <section className='w-full h-screen relative bg-black text-white'>
        <div>
          <div>

          </div>
          <div className='flex w-1/2 h-full'>
          <form className='flex flex-col gap-3'>
              <div>
                  <label>Name:</label>
                  <input className='input'
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label>Phone:</label>
                  <input className='input'
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label>Phone:</label>
                  <input className='input'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label>Phone:</label>
                  <input className='input'
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                  />
              </div>
              <button type="submit">Submit</button>
          </form>
          </div>
        </div>
          
        
        </section>
    );
};
export default Contact
