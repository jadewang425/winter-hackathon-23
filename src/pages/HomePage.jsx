import { useState } from "react";
import AvailablePets from "../components/Navbar/AvailablePets"
import Facebook from "../components/Navbar/Facebook"
import Carousel from "../components/Navbar/carousel"

const HomePage = () => {
  
  return (
    <div className="App">
      <Carousel />
      <AvailablePets/>
      <Facebook />
    </div>
  )
}

export default HomePage