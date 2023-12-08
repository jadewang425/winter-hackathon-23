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
        <div className="w-full px-4 my-5 flex justify-center font-[Poppins]">
            <div className="max-w-2xl flex flex-col gap-1 overflow-hidden  sm:w-full sm:items-center">
                <PetContainer petType={cats} header='Available Cats' />
                <PetContainer petType={dogs} header='Available Dogs' />
                <Link to={`/adoption`} className="w-32 h-8 bg-[#E5BC01] text-[#214038] flex justify-center items-center rounded-2xl my-2">
                    View All
                </Link>
            </div>
        </div>
        );
}

const PetContainer = ({petType, header}) => {
    return (
        <div className="flex flex-col gap-1 sm:w-full">
            <h2 className="text-left font-Poppins font-semibold text-16 pb-2">{header}</h2>
            <div className="flex flex-row gap-6 sm:justify-center overflow-x-scroll hide-scrollbar">
                {petType.map((pet, index) => (
                    <PetCard pet={pet} key={index} />
                ))}
            </div>
        </div>
    )
}


const PetCard = ({pet}) => {
    const lastKeyOfFirstPhotoArray = pet.photos?.[0] ? Object.keys(pet.photos[0]).pop() : null;
    const lastPhotoUrl = lastKeyOfFirstPhotoArray ? pet.photos[0][lastKeyOfFirstPhotoArray] : placeholder;
    return (
        <div key={pet.id} className="flex flex-col items-left pb-4 gap-4 sm:flex-1 sm:items-center">
                    <Link to={`/adoption/${pet.id}`} className="flex-1" >
                            <img
                                src={lastPhotoUrl}
                                alt={pet.name}
                                style={{ borderRadius: '16px' }}
                                className="object-cover object-center max-w-[140px] w-[135px] h-[160px] sm:h-[210px] sm:max-w-[200px] sm:w-[190px]"
                            />
                    </Link>
                    <div className="sm:hidden">
                        <p className="leading-5">{pet.name},</p> 
                        <p className="leading-5 ">{pet.age}</p>
                    </div>
                    <p className="max-sm:hidden">{pet.name}, {pet.age}</p>
            </div>
    )
}