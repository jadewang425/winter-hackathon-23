import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdoptionPage from './pages/AdoptionPage'
import PetDetailPage from './pages/PetDetailPage'
import Navbar from './components/Navbar/Navbar'
import { PetProvider } from './utilities/PetContext'

function App() {


  return (
    <PetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
        <Route path='/adoption/:id' element={<PetDetailPage />} />
      </Routes>
    </PetProvider>
  )
}

export default App
