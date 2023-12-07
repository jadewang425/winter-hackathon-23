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
        <div className="w-full">
            <div className="flex gap-5 m-5 ">
            </div>
            <div className="flex flex-col gap-1 m-4">
                <h2 className="w-full text-left font-Poppins font-semibold text-16 pl-4">Available Cats</h2>
                <div className="flex flex-row gap-6 m-4">
                    {cats.map((cat) => (
                        <div key={cat.id} className="flex flex-col items-left">
                            <img
                            src={cat.photos.length > 0 && cat.photos[0].small ? cat.photos[0].small : placeholder}
                            alt={cat.name}
                            style={{ maxWidth: '100px', borderRadius: '16px' }}
                            />
                            {/* there is an issue with the cat id */}
                            <Link to={`/adoption/${cat.id}`} className="font-Poppins font-normal text-16 pt-4 text-left">
                            <p>{cat.name},</p> <p>{cat.age}</p>
                            </Link>
                        </div>
                    ))}

                </div>

            </div>
            <div className="flex gap-5 m-4">
            </div>
            <div className="flex flex-col gap-1 m-4">
                <h2 className="w-full text-left font-Poppins font-semibold text-16 pl-4">Available Dogs</h2>
                <div className="flex flex-row gap-6 m-4">
                    {dogs.map((dog) => (
                        <div key={dog.id} className="flex flex-col items-left">
                            <img
                            src={dog.photos.length > 0 && dog.photos[0].small ? dog.photos[0].small : placeholder}
                            alt={dog.name}
                            style={{ maxWidth: '100px', borderRadius: '16px' }}
                
                            />
                            <Link to={`/adoption/${dog.id}`} className="font-Poppins font-normal text-16 pt-4 text-left">
                            <p>{dog.name},</p> <p>{dog.age}</p>
                            </Link>
                        </div>
                    ))}

                </div>
                <Link to={`/adoption`}>
                    <button type="submit" className="w-32 h-8 bg-[#E5BC01] rounded-2xl mx-3 my-2"> View All</button>
                </Link>
            </div>
            
            
        </div>
        );
}
