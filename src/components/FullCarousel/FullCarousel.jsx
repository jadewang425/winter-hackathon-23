import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../assets/Bernard.svg'
import IMG2 from '../../assets/Puppies.svg'
import IMG3 from '../../assets/Kitten.svg'


const FullCarousel = () => {

    return (
        <div className="w-full">
            <Carousel
                className="pt-6"
                autoPlay="true"
                infiniteLoop="true"
                showArrows="true"
                showThumbs="none"
                showStatus=""
                interval={5000}
                renderThumbs={(children) => []}
            >
                <div class="flex flex-col">
                    {/* These current images are placeholders */}
                    <img src={IMG1} alt="Image 1" class="flex-1 px-6" />
                    <div class="flex-1 text-left m-5">
                        <h1 class="font-bold">Meet Bernard</h1>
                        <p>A three year old Bernese Mountain dog found his furever home in October, after being abandoned at the river last year.</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <img src={IMG2} alt="Image 2" class="flex-1 rounded-lg px-6"/>
                    <div class="flex-1 text-left m-5">
                        <h1 class="font-bold">Puppy Litter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, asperiores assumenda repellendus neque?</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    {/* These current images are placeholders */}
                    <img src={IMG3} alt="Image 3" class="flex-1 rounded-lg px-6" />
                    <div class="flex-1 text-left m-5">
                        <h1 class="font-bold">Kitten</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, asperiores assumenda repellendus neque?</p>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default FullCarousel