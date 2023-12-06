const AboutPage = () => {
  return (
    <div className='max-w-[100%] flex flex-col items-center' >
      <div className='flex flex-col justify-start items-start gap-8 sm:flex-row p-5 my-5'>
        <div className='flex justify-center items-center w-f h-[15rem] bg-slate-400 sm:w-5/12 rounded-lg'>
          image placeholder
        </div>
        <div className=''>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut ea perferendis voluptatum, impedit numquam eveniet. Similique culpa eum at, repudiandae veniam dolore pariatur laborum necessitatibus, ad porro ex harum.</p>
        </div>
      </div>
      <div className='w-full p-4 bg-gray-200'>
        <h1>Find Us</h1>
      </div>
      <div className='max-w-6xl w-full flex flex-col justify-start gap-5 items-start sm:flex-row p-5 my-5'>
        <div className='flex-1'>
          <p>Located in Alexandria, LA</p>
          <p className='mt-3'>
            To set up an appointment, please contact{' '}
            <a href="mailto:longj@aol.com">
              <span className='border-b border-gray-500 hover:border-black transition'>
                longj@aol.com
              </span>
            </a>
          </p>
        </div>
        <div className='flex justify-center items-center h-[15rem] w-[15rem] bg-slate-400  rounded-lg'>
          map placeholder
        </div>
      </div>
      <div className='w-full p-4 bg-gray-200'>
        <h1>Contact Form</h1>
      </div>
      <div className='flex justify-center items-center p-5 my-5'>
        <div className="max-w-2xl w-full flex flex-col justify-center items-center gap-5">
          <div className='flex flex-col justify-center gap-5 w-full min-[450px]:flex-row max-w-2xl'>
            <input type="text" className="border-b-2 border-red bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="First Name"/>
            <input type="text" className="border-b-2 border-red bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="Last Name"/>
          </div>
          <input type="text" className="border-b-2 border-red w-full bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="E-mail"/>
          <input type="text" className="border-b-2 border-red w-full bg-white p-2 flex-1 focus:outline-none focus:border-green-500" placeholder="Phone Number"/>
          <textarea
            className="border-b-2 border-red w-full bg-white p-2 focus:outline-none focus:border-green-500 resize-none"
            placeholder="Your Message"
            rows="4" 
          />
          <button className="bg-gray-200 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage