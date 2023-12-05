import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePet } from "../../utilities/PetContext"

export default function AvailablePets() {
    const { getPetByType } = usePet();
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [error, setError] = useState("");
    const organizationId = "la424"

    useEffect(() => {
        const fetchData = async () => {
            try {
            setError("");
            const dogData = await getPetByType("dog", organizationId);
            setDogs(dogData.slice(0,30))
            const catData = await getPetByType("cat", organizationId);
            setCats(catData.slice(0,30))
            } catch (error) {
            console.error("Error fetching pets:", error);
            setError("Error fetching pets. Please try again.");
            }
        };
        fetchData();
    }, [getPetByType, organizationId]);

return (
    <div className="w-full h-screen">
        <h1>Find A Pet</h1>
        <div className="flex gap-10 m-10 ">
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
            <h2>Dogs</h2>
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
            <h2>Cats</h2>
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
        
    </div>
    );
}
