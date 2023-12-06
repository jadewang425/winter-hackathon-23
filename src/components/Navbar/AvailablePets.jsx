import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { usePet } from "../../utilities/PetContext"

export default function AvailablePets() {
    const { getPetByType } = usePet();
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    // const [error, setError] = useState("");
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function getPets() {
            try {
                const petsByType = await getPetByType();
                const pets = petsByType.slice(0,150)
                setPets(pets)
                const cats = pets.filter((pet) => pet.species === 'Cat')
                setCats(cats)
                console.log('CATS',cats)
                const dogs = pets.filter((pet) => pet.species === 'Dog')
                console.log('DOGS',dogs)
                setDogs(dogs)
                // if (pets.species === 'Dog') {
                //     pets.push(dogs)
                //     setDogs(dogs)
                //     return setDogs.slice(0,30)
                // } else if (pets.species === 'Cat'){
                //     pets.push(cats)
                //     setCats(cats)
                //     return setCats.slice(0,30)
                // }

                // console.log(dogs);
                console.log(pets)
                
            } catch (error) {
                console.log("Error fetching pets:", error)
                
            }
            
        }
        getPets();
    }, []);

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
