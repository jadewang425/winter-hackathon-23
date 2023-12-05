import { useState } from "react";
import { usePet } from "../utilities/PetContext";
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdoptionPage from './pages/AdoptionPage'
import PetDetailPage from './pages/PetDetailPage'
// import { Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import { PetProvider } from './utilities/PetContext'
import Footer from './components/Navbar/Footer'

function App() {
  const { getPetByType } = usePet();
  const [pets, setPets] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = async (animalType) => {
    if (isNaN(zipcode) || zipcode === "") {
      setError("Please enter a valid zipcode.");
      return;
    }
    try {
      setError("");
      const petsByType = await getPetByType(animalType, zipcode);
      console.log(petsByType)
      setPets(petsByType);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError("Error fetching pets. Please try again.");
    }
  };

  return (
    <PetProvider>
      <main className='w-[100vw] min-h-[100vh] flex justify-center items-start pt-[70px]'>
        <Navbar />
        <Routes>
          <Route path="/" element={pets.map((pet) => (
            <HomePage
              key={pet.id}
              handleButtonClick={handleButtonClick}
              error={error}
              pet={pet}
              setZipcode={setZipcode}
            />
          ))}
          
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path='/adoption/:id' element={<PetDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </PetProvider>
  )
}

export default App
