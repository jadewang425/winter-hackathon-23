import { useState, useEffect } from "react";
import { usePet } from "../utilities/PetContext";
import axios from "axios";

const AdoptionPage = () => {
  const { getPetByType } = usePet();
  const [animals, setAnimals] = useState([]);

  const handleButtonClick = async (animalType) => {
    const animalsByType = await getPetByType(animalType);
    console.log(animalsByType)
    setAnimals(animalsByType);
  };



  return (
    <div>
      <h1>AdoptionPage</h1>
      <div className="flex gap-10 m-10 ">
        <button className="px-5 py-3 rounded-lg bg-purple-100" onClick={() => handleButtonClick("dog")}>Get Dogs</button>
        <button className="px-5 py-3 rounded-lg bg-purple-100" onClick={() => handleButtonClick("cat")}>Get Cats</button>
      </div>
      {/* <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AdoptionPage;
