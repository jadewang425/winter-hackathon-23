import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePet } from '../utilities/PetContext';
import placeholder from '../assets/imgHolder.svg'

const PetDetailPage = () => {
  const { id } = useParams();
  const { getPetById } = usePet();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      console.log(id)
      const petDetails = await getPetById(id);
      setPet(petDetails);
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
    }
  }

  console.log(pet)

  return (
    <div className="w-full flex flex-col mt-8 justify-center items-center">
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
      <div className='text-center leading-8'>
        <p>{pet.description}</p>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breeds.primary}</p>
        <p>Size: {pet.size}</p>
        <p>Gender: {pet.gender}</p>
        <p>Colors: {pet.colors.primary}</p>
        <p>Attributes:</p>
        <ul>
          {Object.entries(pet.attributes).map(([key, value]) => (
            <li key={key}> {renameValue(key, value)} </li>

          ))}
        </ul>
        {/* add tags pet.tags (Array) */}

      </div>
      {/* {/* add a carousel of other photos of amelia */}
    </div>
    
  );
};

export default PetDetailPage;
