import { useState } from "react";
import { usePet } from "../utilities/PetContext";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { BsDownload } from "react-icons/bs";
import BarkLogo from '../assets/BarkLogo.svg'

const AdoptionPage = () => {
  const { getPetByType } = usePet();
  const [pets, setPets] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = async (animalType) => {
    if (isNaN(zipcode) || zipcode === "") {
      setError("Please enter a valid zipcode.");
      return;
    }
    try {
      setError("");
      const petsByType = await getPetByType(animalType, zipcode);
      console.log(petsByType)
      setPets(petsByType);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError("Error fetching pets. Please try again.");
    }
  };



  return (
    <div className='max-w-[100%] flex flex-col items-center pt-5 font-[Poppins]'>
      <SectionHeader title='Find a Pet' />
      <div className="max-w-6xl  w-full flex flex-col gap-[20px] my-7 px-5">
        <h1 className="font-semibold text-[#121212]  ml-1"> Find your new best friend today! </h1>
        <div className="h-[30rem] bg-[#EFEEF1] rounded-[10px]">

        </div>
      </div>
      <SectionHeader title='Adopt a Pet' />
      <div className="max-w-3xl  w-full flex flex-col gap-[20px] my-7 px-5">
          <p className="text-left sm:text-center">
            If you would like to adopt a pet, please fill out the applicable form below and send it to{' '}
            <a href="mailto:longj1003@aol.com">
              <span className='border-b border-gray-500 hover:border-black transition'>
                LongJ1003@aol.com
              </span>
            </a>
            {' '}when complete.
          </p>
          <div className="flex flex-col min-[450px]:flex-row-reverse gap-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 flex-1">
              <img src={BarkLogo} className='w-auto h-32 py-2' alt="Logo" />
              <p className="text-center">
                Find your new best friend today!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 flex-1">
              <button className="flex gap-5 justify-center items-center bg-[#E5BC01] rounded-full py-[6px] w-[240px]">Canine Application <BsDownload /></button>
              <button className="flex gap-5 justify-center items-center bg-[#E5BC01] rounded-full py-[6px] w-[240px]">Feline Application <BsDownload /></button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AdoptionPage;
