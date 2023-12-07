import SectionHeader from '../components/SectionHeader'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {

  useEffect(() => emailjs.init(import.meta.env.PUBLIC_KEY), [])
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const messageRef = useRef();
  const numberRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const serviceId = 'service_re68a1i';
    const templateId = 'template_mgmo33e'
    const publicKey = 'qgxNOflZEFFroNfCX'
    try {
      setLoading(true)
      await emailjs.send(
        serviceId,
        templateId,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
          phoneNumber: numberRef.current.value
        },
        publicKey);
      alert("email successfully sent")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <SectionHeader title='Find Us' />
      <div className='max-w-6xl w-full flex flex-col justify-start gap-5 items-start sm:items-center sm:flex-row p-5 my-5'>
        <div className="w-full self-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109097.2177962001!2d-92.56474763701927!3d31.295782648889503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254d49e9ffcce3%3A0xc1e65dd9e413f7ff!2sAlexandria%2C%20LA!5e0!3m2!1sen!2sus!4v1701933661147!5m2!1sen!2sus" width="100%" height="250" style={{ border: '0', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='flex-1 flex flex-col gap-[16px]'>
          <p className="font-[Poppins]">Located in Alexandria, LA</p>
          <p className="font-[Poppins]">
            To set up an appointment, please contact{' '}
            <a href="mailto:longj1003@aol.com">
              <span className='border-b border-gray-500 hover:border-black transition'>
                longj@aol.com
              </span>
            </a>
          </p>
          <div className="font-[Poppins]">
            <p >P.O. Box 404</p>
            <p >Tioga, LA 71477</p>
          </div>
        </div>
      </div>


      <SectionHeader title='Contact Form' />

      <div className='max-w-4xl w-full flex justify-center items-center p-5 my-5 font-[Poppins]'>
        <form className="w-full flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className='flex flex-col justify-center gap-5 w-full min-[450px]:flex-row '>
              <input type="text" className="border-b-2 border-red bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="First Name" ref={firstNameRef} />
              <input type="text" className="border-b-2 border-red bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="Last Name" ref={lastNameRef} />
            </div>
            <input type="text" className="border-b-2 border-red w-full bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="E-mail" ref={emailRef} />
            <input type="text" className="border-b-2 border-red w-full bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="Phone Number" ref={numberRef} />
            <textarea
              className="border-b-2 border-red w-full bg-white p-2 focus:outline-none focus:border-green-500 resize-none"
              placeholder="Your Message"
              rows="4"
              ref={messageRef}
            />
            <button className="bg-[#E5BC01] mt-4 text-[#214038] hover:bg-green-600 py-[10px] px-[30px] w-[250px] rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-700" type='submit' value="Send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs