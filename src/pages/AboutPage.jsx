import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from "../components/SectionHeader"

const AboutPage = () => {

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
    <div className='max-w-[100%] flex flex-col items-center pt-5' >
      <SectionHeader title='About BARK' />
      <div className="max-w-6xl flex flex-col gap-5 my-7">
        <div className='flex flex-col justify-start items-start gap-5 px-5 '>
          <div className='flex-1 '>
            <p className="font-bold text-[#121212] font-[Poppins] text-base mb-3">Boudreaux’s Animal Rescue Krewe (B.A.R.K.) is a 501c(3) non-profit animal welfare organization and NO-KILL animal shelter in Alexandria, Louisiana. </p>
            <p className="font-normal text-[#121212] font-[Poppins] text-base">We are determined and inspired to rescue homeless and/or unwanted dogs in our area because there are simply too many dogs that end up in shelters and get euthanized regularly. </p>
          </div>
          <div className='flex justify-center items-center w-full h-[15rem] sm:w-full bg-slate-400 sm:bg-white'>
            image placeholder
          </div>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            Husband and wife team, Julian and Eva Long, have rescued animals all of their lives, but one day in 2004, when Julian was exposed to a local animal shelter’s day of euthanasia, he adopted ten dogs from “Death Row” and the two have
            never looked back. The tragedy of Hurricane Katrina hit one year later, and their shelter was overflowing with abandoned animals. Years have passed, and their incredible journey is on-going. Over 3,000 dogs have been rescued and placed
            in their forever homes, but there are always more in need
          </p>
          <div className='flex justify-center items-center w-full h-[15rem] bg-slate-400 sm:bg-white sm:w-full '>
            image placeholder
          </div>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            Both Julian and Eva were born and raised in Louisiana, and are very proud of their heritage. They love the southern traditions, the food, and the beautiful land, but regretfully admit that animals are not always treated as they should be.
            Sometimes they are treated like property and are kept on short chains. Some are mistreated and abused. Others run loose and are caught by animal control, keeping the shelters full of homeless pets.
          </p>
          <div className='flex justify-center items-center w-full h-[15rem] bg-slate-400 sm:bg-white sm:w-full '>
            image placeholder
          </div>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            <span className="font-semibold">The main message that that BARK would like to emphasize is the importance of spaying and neutering animals to help reduce animal overpopulation. </span>
            That is the main reason we have shelters where so many innocent animals are killed.
          </p>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            We rely heavily on our volunteers, donations, and fundraisers to supply the needs, care, and shelter to continue to save these animal&apos;s lives and to find them safe, loving, forever homes. Please send us a message below if you would be interested in any aspect of helping, fostering, or adopting these precious animals.
            <span className="font-semibold">Viewing of the animals is done by appointment only, which can be set up by contacting us below.</span>
          </p>
        </div>
      </div>
      <SectionHeader title='Find Us' />
      <div className='max-w-6xl w-full flex flex-col justify-start gap-5 items-start sm:items-center sm:flex-row p-5 my-5'>
        <div className="w-full self-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109097.2177962001!2d-92.56474763701927!3d31.295782648889503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254d49e9ffcce3%3A0xc1e65dd9e413f7ff!2sAlexandria%2C%20LA!5e0!3m2!1sen!2sus!4v1701933661147!5m2!1sen!2sus" width="100%" height="250" style={{ border: '0', borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        <form onSubmit={handleSubmit}>
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

export default AboutPage
