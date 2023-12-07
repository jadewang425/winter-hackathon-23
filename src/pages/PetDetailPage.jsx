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
      case 'cats':
        return value != null ? (value ? 'Cats: Yes' : 'Cats: No') : 'Cats: Unknown';
      case 'children':
        return value != null ? (value ? 'Children: Yes' : 'Children: No') : 'Children: Unknown';
      case 'dogs':
        return value != null ? (value ? 'Dogs: Yes' : 'Dogs: No') : 'Dogs: Unknown';
      // default:
      //   return value != null ? value.toString() : ': Unknown';
    }
  }

  console.log(pet)

  return (
    <div className="w-full flex flex-col mt-8 justify-center items-center">
      <div className="w-[302px] h-[250px] relative overflow-hidden">
        {/* placeholder for carousel images */}
        <img
          src={pet.photos.length > 0 && pet.photos[0].small ? pet.photos[0].small : placeholder}
          alt={pet.name}
          className="w-[100%] h-[100%] object-cover object-center rounded-xl"
        />
      </div>
      <div className=' w-[302px] text-left leading-8 mt-10'>
        <p> <strong>Name:</strong> {pet.name}</p>
        <p> <strong>Age:</strong> {pet.age}</p>
        <p> <strong>Breed:</strong> {pet.breeds.primary}</p>
        <p> <strong>Size:</strong> {pet.size}</p>
        <p> <strong>Gender:</strong> {pet.gender}</p>
        <p> <strong>Background:</strong> {pet.description}</p>
        <p> <strong>Color:</strong> {pet.colors && pet.colors.primary ? pet.colors.primary : 'Unknown'}</p>
        <p> <strong>Attributes:</strong></p>
        <ul>
          {Object.entries(pet.attributes).map(([key, value]) => (
            <li key={key}> {renameValue(key, value)} </li>
          ))}
        </ul>
        <p> <strong>Environment:</strong></p>
        <ul>
          {Object.entries(pet.environment).map(([key, value]) => (
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
