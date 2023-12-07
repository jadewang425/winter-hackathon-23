import React from 'react'
import SectionHeader from "../components/SectionHeader"
import img1 from '../assets/about_1.jpg'
import img2 from '../assets/about_2.jpg'
import img3 from '../assets/about_3.jpg'

const AboutPage = () => {


  return (
    <div className='max-w-[100%] flex flex-col items-center pt-5' >
      <SectionHeader title='About BARK' />
      <div className="max-w-6xl flex flex-col gap-5 my-7">
        <div className='flex flex-col justify-start items-start gap-5 px-5 '>
          <div className='flex-1 '>
            <p className="font-bold text-[#121212] font-[Poppins] text-base mb-3">Boudreaux’s Animal Rescue Krewe (B.A.R.K.) is a 501c(3) non-profit animal welfare organization and NO-KILL animal shelter in Alexandria, Louisiana. </p>
            <p className="font-normal text-[#121212] font-[Poppins] text-base">We are determined and inspired to rescue homeless and/or unwanted dogs in our area because there are simply too many dogs that end up in shelters and get euthanized regularly. </p>
          </div>
          <div className='flex justify-center items-center w-full h-[15rem] sm:w-full'>
            <img src={img1} alt="A Dog being examined" />
          </div>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            Husband and wife team, Julian and Eva Long, have rescued animals all of their lives, but one day in 2004, when Julian was exposed to a local animal shelter’s day of euthanasia, he adopted ten dogs from “Death Row” and the two have
            never looked back. The tragedy of Hurricane Katrina hit one year later, and their shelter was overflowing with abandoned animals. Years have passed, and their incredible journey is on-going. Over 3,000 dogs have been rescued and placed
            in their forever homes, but there are always more in need
          </p>
          <div className='flex justify-center items-center w-full h-[15rem] sm:w-full'>
            <img src={img2} alt="Dogs in crates on a lawn" />
          </div>
          <p className="font-normal text-[#121212] font-[Poppins] text-base">
            Both Julian and Eva were born and raised in Louisiana, and are very proud of their heritage. They love the southern traditions, the food, and the beautiful land, but regretfully admit that animals are not always treated as they should be.
            Sometimes they are treated like property and are kept on short chains. Some are mistreated and abused. Others run loose and are caught by animal control, keeping the shelters full of homeless pets.
          </p>
          <div className='flex justify-center items-center w-full h-[15rem] sm:w-full'>
            <img src={img3} alt="A kitten being held" />
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

    </div>
  )
}

export default AboutPage
