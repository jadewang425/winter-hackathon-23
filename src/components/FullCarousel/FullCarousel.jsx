import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../assets/Bernard.svg'
import IMG2 from '../../assets/Puppies.svg'
import IMG3 from '../../assets/Kitten.svg'


const FullCarousel = () => {

    return (
        <div className="w-full">
            <Carousel
                className="py-6"
                autoPlay="true"
                infiniteLoop="true"
                showArrows="true"
                showThumbs="none"
                showStatus=""
                interval={5000}
                renderThumbs={(children) => []}
            >
                <div class="flex flex-row">
                    {/* These current images are placeholders */}
                    <img src={IMG1} alt="Image 1" class="basis-1/2" />
                    <div class="basis-1/2">
                        <h1>Meet Bernard</h1>
                        <p>A three year old Bernese Mountain dog found his furever home in October, after being abandoned at the river last year.</p>
                    </div>
                </div>
                <div class="flex flex-row">
                    <img src={IMG2} alt="Image 2" class="basis-1/2"/>
                    <div class="basis-1/2">
                        <h1>Puppy Litter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, asperiores assumenda repellendus neque?</p>
                    </div>
                </div>
                <div class="flex flex-row">
                    {/* These current images are placeholders */}
                    <img src={IMG3} alt="Image 3" class="basis-1/2" />
                    <div class="basis-1/2">
                        <h1>Kitten</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae, asperiores assumenda repellendus neque?</p>
                    </div>
                </div>
            </Carousel>

        </div>
    )
}

export default FullCarousel