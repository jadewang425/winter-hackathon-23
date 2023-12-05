import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePet } from '../utilities/PetContext';

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

  return (
    <div>
      <img src={pet.photos[0].small} alt={pet.name} style={{ maxWidth: '100px'}} />
      <h1>{pet.name}</h1>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breeds.primary}</p>
      <p>Gender: {pet.gender}</p>
    </div>
  );
};

export default PetDetailPage;
