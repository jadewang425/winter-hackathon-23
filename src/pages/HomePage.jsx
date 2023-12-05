import AvailablePets from "../components/Navbar/AvailablePets"
import Facebook from "../components/Navbar/Facebook"
import Carousel from "../components/Navbar/carousel"

const HomePage = (props) => {
  return (
    <div className="App">
      <Carousel />
      <AvailablePets 
        key={props.pet.id}
        handleButtonClick={props.handleButtonClick}
        error={props.error}
        pet={props.pet}
        setZipcode={props.setZipcode}
      />
      <Facebook />
    </div>
  )
}

export default HomePage