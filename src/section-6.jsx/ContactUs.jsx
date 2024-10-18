import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    company: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert('رقم الهاتف يجب أن يكون 11 رقم.');
      return;
    }

    emailjs.send('service_kho5trf', 'template_6dppn1e', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone,
      company: formData.company,
    }, 'MmwwXbkZmii6-UiVy')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('تم إرسال الرسالة بنجاح!');
      }, (err) => {
        console.error('FAILED...', err);
        alert('فشل في إرسال الرسالة. حاول مرة أخرى.');
      });
  };

  return (
    <>
 <div className='text-white text-5xl text-center mt-32 uyt' id='ContactUs'>Contact Us</div>
      <div className='grid grid-cols-2 ml-20 mr-20 allinputs pb-32 mt-10'>
        <div className='flex items-center'>
          <div>
            <div className="text-white text-xl" data-aos="fade-down">
              <span className="yousef7">Email: </span>info@gmail.com
            </div>
            <div className="text-white mt-4 text-xl" data-aos="zoom-out">
              <span className="yousef7">Phone: </span>01234567891
            </div>
            <div className="text-white mt-4 text-xl" data-aos="fade-down">
              <span className="yousef7">Address: </span>23 street newyork
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={sendEmail}>
            <div className='grid grid-cols-2 gap-3'>
              <div className='input-11 rounded-2xl pl-4 py-1 pr-1' data-aos="fade-down">
                <input 
                  className='w-full'
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='input-12 rounded-2xl pl-4 py-1 pr-1' data-aos="fade-down">
                <input
                  className='w-full'
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-6'>
              <div className='input-13 rounded-2xl pl-4 py-1 pr-1' data-aos="zoom-out">
                <input
                  className='w-full'
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='input-14 rounded-2xl pl-4 py-1 pr-1' data-aos="zoom-out">
                <input
                  className='w-full'
                  type="text"
                  name="company"
                  placeholder="Company"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-1 input-15 rounded-2xl pl-4 py-2 pr-1 mt-6' data-aos="zoom-in">
              <textarea
                className='w-full'
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
              />
            </div>
            <div className='mt-6 w-60' data-aos="fade-up">
              <button type="submit" className='input-16 w-full rounded-md text-center py-1'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
