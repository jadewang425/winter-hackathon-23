import { useState } from "react";
import AvailablePets from "../components/Navbar/AvailablePets"
import Facebook from "../components/Facebook/Facebook"
import FullCarousel from "../components/FullCarousel/FullCarousel"
import Mission from "../components/Mission/Mission";

const HomePage = () => {
  
  return (
    <div className="w-full flex flex-col justify-start items-center z-0 relative">
      {/* <FullCarousel /> */}
      <Mission />
      <AvailablePets />
      <Facebook />
      <div className="p-5 self-start">If you have any question, please contact us <a href="/about" className="font-bold text-[#E5BC01]">Here</a>!</div>
    </div>
  )
}

export default HomePage