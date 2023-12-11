import AvailablePets from "../components/AvailablePets/AvailablePets"
import Facebook from "../components/Facebook/Facebook"
import FullCarousel from "../components/FullCarousel/FullCarousel"
import Mission from "../components/Mission/Mission";
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="w-full flex flex-col justify-start items-center z-0 relative font-[Poppins]">
      <FullCarousel />
      <Mission />
      <AvailablePets />
      <Facebook />
      <div className="w-full p-5 max-w-xs flex justify-center">
        <div className="text-center">
          If you have any question, please contact us{' '}
          <Link to='/contactUs' className="font-bold text-[#7F3F98]">Here</Link>!
        </div>
      </div>
    </div>
  )
}

export default HomePage