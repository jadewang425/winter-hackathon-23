import AvailablePets from "../components/Navbar/AvailablePets"
import Facebook from "../components/Navbar/Facebook"
import FullCarousel from "../components/FullCarousel/FullCarousel"

const HomePage = () => {
  return (
    <div className="App">
      <FullCarousel />
      <AvailablePets />
      <Facebook />
    </div>
  )
}

export default HomePage