import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { usePet } from "../../utilities/PetContext"

export default function AvailablePets() {
    const { getPetByType } = usePet();
    // const [dogs, setDogs] = useState([]);
    // const [cats, setCats] = useState([]);
    // const [error, setError] = useState("");
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function getPets() {
            
            const petsByType = await getPetByType();
            const pets = petsByType.slice(0,10)
            setPets(pets)
            console.log(pets)
        }
        getPets();
    }, []);
    // const filteredDogs = dogsData.filter((dog) => dog.organization_id === "la424");

    // setDogs(filteredDogs.slice(0, 30));

    // const catsData = await getPetByType(animalType);
    // const filteredCats = catsData.filter((cat) => cat.organization_id === "la424");
    // setCats(filteredCats.slice(0, 30));

    return (
        <div className="w-full h-screen">
            <h1>Find A Pet</h1>
            <div className="flex gap-10 m-10 ">
            </div>
            {/* <div>
                <h2>Available Dogs</h2>
                {dogs.map((dog) => (
                    <div key={dog.id}>
                        <img 
                            src={dog.photos.length > 0 && dog.photos[0].small} 
                            alt={dog.name} 
                            style={{ maxWidth: '100px'}} 
                        />
                        <Link to={`/adoption/${dog.id}`}>{dog.name}</Link>
                        <p>{dog.age}</p>
                    </div>
                    

                ))}

            </div>
            
            <div>
                <h2>Available Cats</h2>
                {cats.map((cat) => (
                    <div key={cat.id}>
                        <img 
                            src={cat.photos.length > 0 && cat.photos[0].small} 
                            alt={cat.name} 
                            style={{ maxWidth: '100px'}} 
                        />
                        <Link to={`/adoption/${cat.id}`}>{cat.name}</Link>
                        <p>{cat.age}</p>
                    </div>
                    

                ))}

            </div> */}
            
        </div>
        );
}
