import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG1 from '../../assets/Bernard.svg';
import IMG2 from '../../assets/Tofu.svg';
import IMG3 from '../../assets/AdoptionEvent.svg';

const FullCarousel = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <Carousel
                className="pt-6 mb-0 sm:mb-5"
                autoPlay
                infiniteLoop
                showArrows
                showThumbs={false}
                showStatus={false}
                interval={5000}
                renderIndicator={(clickHandler, isSelected, index, label) => {
                    const defaultStyles = {
                        background: isSelected ? '#E5BC01' : '#7F3F98',
                        width: 8,
                        height: 8,
                        display: 'inline-block',
                        margin: ' 0px 5px',
                        cursor: 'pointer',
                        borderRadius: '50%',
                    };

                    const activeStyles = {
                        background: '#E5BC01',
                        width: 12,
                        height: 12,
                    };

                    return (
                        <li
                            style={isSelected ? { ...defaultStyles, ...activeStyles } : defaultStyles}
                            onClick={clickHandler}
                            onKeyDown={clickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                <div className="flex flex-col sm:flex-row">
                    <img src={IMG1} alt="Image 1" className="flex-1 sm:w-1/2 px-6 max-h-[300px]" />
                    <div className="flex-1 text-center m-5">
                        <h1 className="font-bold">Meet Bernard</h1>
                        <p>A three year old rescue pup found his furever home, after being abandoned at the river.</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <img src={IMG2} alt="Image 2" className="flex-1 sm:w-1/2 px-6 max-h-[300px]" />
                    <div className="flex-1 text-center m-5">
                        <h1 className="font-bold">Meet Tofu</h1>
                        <p>Tofu was found in a dumpster in June. In July she was adopted by her new family!</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row pb-6">
                    <img src={IMG3} alt="Image 3" className="flex-1 sm:w-1/2 px-6 max-h-[300px]" />
                    <div className="flex-1 text-center m-5">
                        <h1 className="font-bold">Adoption Event</h1>
                        <p>Sunday, January 13th</p> 
                        <p>10am-2pm</p> 
                        <p>Kees Park</p> 
                        <p>Cats & Dogs Available</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default FullCarousel;
