import { useState } from "react";
import { usePet } from "../utilities/PetContext";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

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
      <div className="max-w-6xl  w-full flex flex-col gap-[20px] my-7 px-5">
          <p className="">
            If you would like to adopt a pet, please fill out the applicable form below and send it to{' '}
            <a href="mailto:longj1003@aol.com">
              <span className='border-b border-gray-500 hover:border-black transition'>
                LongJ1003@aol.com
              </span>
            </a>
            {' '}when complete.
          </p>
          
      </div>
    </div>
  );
};

export default AdoptionPage;
