import { useEffect, useState } from "react";
import { usePet } from "../utilities/PetContext";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { BsDownload } from "react-icons/bs";
import BarkLogo from '../assets/BarkLogo.svg'
import PetLogo from '../assets/petfinderlogo.png'
import StaggeredDropDown from "../components/OptionsDropDown";
import placeholder from '../assets/imgHolder.svg'

const AdoptionPage = () => {
  const { getPetByType } = usePet();
  const [pets, setPets] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [petType, setPetType] = useState("");
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [size, setSize] = useState('')
  const [error, setError] = useState("");

  const handleButtonClick = async () => {
    if (isNaN(zipcode) || zipcode === "") {
      setError("Please enter a valid zipcode.");
      return;
    }
    try {
      setError("");
      const petsByType = await getPetByType(petType, zipcode, gender, age, size);
      console.log(petsByType)
      setPets(petsByType.filter((pet) => pet.photos.length > 0));
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError("Error fetching pets. Please try again.");
    }
  };



  return (
    <div className='max-w-[100%] flex flex-col items-center pt-5 font-[Poppins]'>
      <SectionHeader title='Find a Pet' />
      <div className="max-w-6xl  w-full flex flex-col gap-[20px] my-7 px-5">
        <h1 className="font-semibold text-[rgb(18,18,18)]  ml-1 "> Find your new best friend today! </h1>
        <div className="h-[30rem] bg-[#EFEEF1] rounded-[10px] flex flex-col justify-start items-center py-5 px-4 gap-2 overflow-y-scroll hide-scrollbar">
          <img src={PetLogo} alt="pet finder logo" className=" w-[162px]" />
          <div className=" relative flex flex-col justify-center items-center gap-1 ">
            <p>Zip Code</p>
            <input
              type="text"
              placeholder="Enter Your Zip Code"
              onChange={(e) => setZipcode(e.target.value)}
              className="bg-[#F9F9F9] border-[1px] p-[10px] flex justify-center items-center text-center border-[#121212] rounded-[5px]"
            />
          </div>
          <div className=" relative flex flex-col justify-center items-center gap-1">
            <p>Animal Type</p>
            <StaggeredDropDown values={['Dog', 'Cat', 'Any']} state={petType} setState={setPetType} />
          </div>
          <div className=" relative flex flex-col justify-center items-center gap-1">
            <p>Gender</p>
            <StaggeredDropDown values={['male', 'female', 'Any']} state={gender} setState={setGender} />
          </div>
          <div className=" relative flex flex-col justify-center items-center gap-1">
            <p>Size</p>
            <StaggeredDropDown values={['small', 'medium', 'large', 'xlarge', 'Any']} state={size} setState={setSize} />
          </div>
          <div className=" relative flex flex-col justify-center items-center gap-1">
            <p>Age</p>
            <StaggeredDropDown values={['baby', 'young', 'adult', 'senior', 'Any']} state={age} setState={setAge} />
          </div>
          <button onClick={handleButtonClick} className="bg-[#E5BC01] mt-4 text-[#214038] hover:bg-[#f8d36d] py-[10px] px-[30px]  rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-700">
            Apply
          </button>
          {error && <p>{error}</p>}
          {pets && (
            <div className="w-full flex flex-col justify-start items-center gap-8 mt-5">
              {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          )}
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

const PetCard = ({ pet }) => {

  return (
    <Link to={`/adoption/${pet.id}`}>
      <div className="w-[200px] h-[250px] relative overflow-hidden">
        <img
          src={pet.photos.length > 0 && pet.photos[0].small ? pet.photos[0].small : placeholder}
          alt={pet.name}
          className="w-[100%] h-[100%] object-cover object-center rounded-xl"
        />
        <div className="bg-white absolute w-full bottom-0 left-0 h-16 px-4 rounded-b-xl flex justify-center items-center tracking-[.018em] text-[#7F3F98]">
          <h1 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{pet.name}</h1>
        </div>
        <div className="bg-[#7F3F98] absolute  bottom-12 left-0 flex justify-center items-center tracking-[.018em] text-white">
          <h1 className="py-2 px-3">Available</h1>
        </div>
      </div>
    </Link>
  );
};