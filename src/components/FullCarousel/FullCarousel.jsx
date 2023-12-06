import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../assets/logo.png'
import IMG2 from '../../assets/WIP.jpg'
import { useEffect, useState } from "react";
import { usePet } from "../../utilities/PetContext"

const FullCarousel = () => {

    // Need confirmation on what the content will be for the carousel
    // const { getPetByType } = usePet();
    // const [pets, setPets] = useState([]);
    // useEffect(() => {
    //     async function getPets() {
    //         const petsByType = await getPetByType();
    //         const pets = petsByType.slice(0,3)
    //         setPets(pets)
    //         console.log(pets)
    //     }
    //     getPets()
    // }, [])

    return (
        <div className="w-full">
            <Carousel
                autoPlay="true"
                infiniteLoop="true"
                showArrows="true"
                showThumbs="none"
                interval={5000}
                renderThumbs={(children) => []}
            >
                <div>
                    {/* These current images are placeholders */}
                    <img src={IMG1} alt="Image 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={IMG2} alt="Image 2" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>

        </div>
    )
}

export default FullCarousel