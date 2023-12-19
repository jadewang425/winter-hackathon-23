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
      <div className="p-5 flex justify-center">
        <div className="text-center">
          If you have any question, please contact us{' '}
          <Link to='/contactus' className="font-semibold text-[#7F3F98]" onClick={() => {window.scroll(0, 0)}}>Here</Link>!
        </div>
      </div>
    </div>
  )
}

export default HomePage