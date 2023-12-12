import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePet } from '../utilities/PetContext';
import placeholder from '../assets/imgHolder.svg'
import SectionHeader from "../components/SectionHeader";
import BarkLogo from '../assets/BarkLogo.svg'
import arrow from '../assets/Arrow.svg'
import { BsDownload } from "react-icons/bs";
import canineFile from '../assets/barkadoptionformcanine.pdf'
import felineFile from '../assets/barkadoptionformfeline.pdf'
import { motion } from 'framer-motion';

const PetDetailPage = () => {
  const { id } = useParams();
  const { getPetById } = usePet();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate()
  const [petImages, setPetImages] = useState([])

  useEffect(() => {
    const fetchPetDetails = async () => {
      const petDetails = await getPetById(id);
      setPet(petDetails);
      console.log(petDetails.photos)
      if (petDetails && petDetails.photos && petDetails.photos.length > 0) {
        const photoUrls = petDetails.photos.map(photo => {
          return photo.full || null;
        });
      
        const trimmedPhotoUrls = photoUrls.slice(0, 3);
      
        console.log(trimmedPhotoUrls);
        setPetImages(trimmedPhotoUrls);
      }
      
      
    };

    fetchPetDetails();
  }, [id, getPetById]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  const renameValue = (key, value) => {
    switch (key) {
      case 'declawed':
        return value ? 'Declawed: Yes' : 'Declawed: No'
      case 'spayed_neutered':
        return value ? 'Spayed / Neutered: : Yes' : 'Spayed / Neutered: No'
      case 'house_trained':
        return value ? 'House Trained: Yes' : 'House Trained: No'
      case 'shots_current':
        return value ? 'Shots Up to Date: Yes' : 'Shots Up to Date: No'
      case 'special_needs':
        return value ? 'Special Needs: Yes' : 'Special Needs: No'
      case 'cats':
        return value != null ? (value ? 'Cats: Yes' : 'Cats: No') : 'Cats: Unknown';
      case 'children':
        return value != null ? (value ? 'Children: Yes' : 'Children: No') : 'Children: Unknown';
      case 'dogs':
        return value != null ? (value ? 'Dogs: Yes' : 'Dogs: No') : 'Dogs: Unknown';
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 overflow-hidden">
      <SectionHeader title={pet.name} />
      <div className='flex items-center w-full max-w-6xl justify-start text-left leading-4 mt-10 pl-1 sm:pl-4'>
        <img src={arrow} alt="arrow" className="transform rotate-90 mr-2 w-4 h-4" />
        <a href="#" onClick={() => navigate(-1)}>back previous page</a>
      </div>
      <PhotoCarousel petImages={petImages} />  
      <div className='w-[302px] text-left leading-8 mt-5'>
        <p className="tracking-wide"><strong>Name:</strong> {pet.name}</p>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Breed:</strong> {pet.breeds.primary}</p>
        <p><strong>Size:</strong> {pet.size}</p>
        <p><strong>Gender:</strong> {pet.gender}</p>
        {pet.description !== null && pet.description !== undefined && (
          <div>
            <strong>Background:</strong>{" "}
            <div dangerouslySetInnerHTML={{ __html: pet.description }} />
          </div>
        )}
        <p><strong>Color:</strong> {pet.colors && pet.colors.primary ? pet.colors.primary : 'Unknown'}</p>
        <p><strong>Attributes:</strong></p>
        <div className="px-5">
          <ul className='list-disc'>
            {Object.entries(pet.attributes).map(([key, value]) => (
              <li key={key}> {renameValue(key, value)} </li>
            ))}
          </ul>
        </div>
        <p><strong>Environment:</strong></p>
        <div className="px-5">
          <ul className='list-disc'>
            {Object.entries(pet.environment).map(([key, value]) => (
              <li key={key}> {renameValue(key, value)} </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl  w-full flex flex-col gap-[20px] my-7 px-7">
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
            {pet.species === 'Cat' ? (
              <a href={canineFile} target="_blank" rel="noopener noreferrer">
                <button className="flex gap-5 justify-center items-center bg-[#E5BC01] rounded-full py-[6px] w-[240px]">Feline Application <BsDownload /></button>
              </a>
            ) : pet.species === 'Dog' ? (
              <a href={felineFile} target="_blank" rel="noopener noreferrer">
                <button className="flex gap-5 justify-center items-center bg-[#E5BC01] rounded-full py-[6px] w-[240px]">Canine Application <BsDownload /></button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;

const PhotoCarousel = ({petImages}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  if (petImages.length === 0) {
    return (
      <div className='w-full flex justify-center items-center rounded-full'>
        <img src={placeholder} alt="missing pet placeholder image" className='h-[30rem] w-72' />
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col gap-3 items-center justify-center'>
      <div className='w-full flex flex-row relative gap-4 mt-7 items-center justify-center h-[30rem]'>
        {petImages.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`pet image ${index}`}
            className='w-full min-[420px]:w-[320px] absolute object-cover object-center h-[30rem]'
            initial='hidden'
            animate={index === activeIndex ? 'visible' : 'hidden'}
            variants={photoVariants}
          />
        ))}
      </div>
      <div className='w-full flex flex-row relative gap-4 items-center justify-center'>
        {petImages.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`pet image ${index}`}
            className='object-cover object-center h-[3rem] w-[3rem] rounded-lg cursor-pointer'
            initial='hidden'
            animate={index === activeIndex ? 'visible' : 'hidden'}
            whileHover={{
              scale: .95,
              transition: { duration: .3 },
            }}
            variants={thumbnailVariants}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

const photoVariants = {
  hidden: { opacity: 0, zIndex: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, zIndex: 1, transition: { duration: 0.5 } },
};
const thumbnailVariants = {
  hidden: { opacity: .2 },
  visible: { opacity: 1 },
};