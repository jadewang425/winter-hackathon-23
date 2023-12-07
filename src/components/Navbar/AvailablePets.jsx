import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePet } from "../../utilities/PetContext"
import placeholder from '../../assets/imgHolder.svg'
export default function AvailablePets() {
    const { homePets } = usePet();
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        if (homePets) {
            console.log(homePets)
            const sortedPets = homePets.slice().sort((a,b) => new Date(a.published_at) - new Date(b.published_at))
            const dogs = sortedPets.filter(pet => pet.species === 'Dog');
            setDogs(dogs.slice(0,3))
        
            const cats = sortedPets.filter(pet => pet.species === 'Cat');
            setCats(cats.slice(0,3))
        }
    }, [homePets]);
    useEffect(() => {
        console.log('CATS',cats)
        console.log('DOGS',dogs)
    }, [cats, dogs]);

    return (
        <div className="w-full px-4 my-5 flex flex-col gap-1">
            <div className="flex flex-col gap-1 ">
                <h2 className="w-full text-left font-Poppins font-semibold text-16 pb-2">Available Cats</h2>
                <div className="flex flex-row gap-6  overflow-x-scroll hide-scrollbar">
                    {cats.map((cat, index) => (
                        <PetCard pet={cat} key={index} />
                    ))}

                </div>

            </div>
            <div className="flex flex-col gap-1 ">
                <h2 className="w-full text-left font-Poppins font-semibold text-16 pb-2">Available Dogs</h2>
                <div className="flex flex-row gap-6  overflow-x-scroll .hide-scrollbar">
                    {dogs.map((dog, index) => (
                        <PetCard pet={dog} key={index} />
                    ))}

                </div>
                <Link to={`/adoption`}>
                    <button type="submit" className="w-32 h-8 bg-[#E5BC01] rounded-2xl my-2"> View All</button>
                </Link>
            </div>
            
            
        </div>
        );
}


const PetCard = ({pet}) => {
    return (
        <div key={pet.id} className="flex flex-col items-left pb-4">
            <img
                src={pet.photos.length > 0 && pet.photos[0].small ? pet.photos[0].small : placeholder}
                alt={pet.name}
                style={{ maxWidth: '110px', borderRadius: '16px' }}
                className="object-cover object-center"
            />
            <Link to={`/adoption/${pet.id}`} className="font-Poppins font-normal text-16 pt-3 text-left">
                <p>{pet.name},</p> <p>{pet.age}</p>
            </Link>
        </div>
    )
}