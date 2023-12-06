import { useState } from "react";
import AvailablePets from "../components/Navbar/AvailablePets"
import Facebook from "../components/Facebook/Facebook"
import FullCarousel from "../components/FullCarousel/FullCarousel"

const HomePage = () => {
  
  return (
    <div className="w-full flex flex-col justify-start items-center z-0 relative">
      <FullCarousel />
      <AvailablePets />
      <Facebook />
    </div>
  )
}

export default HomePage