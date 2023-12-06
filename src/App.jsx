import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdoptionPage from './pages/AdoptionPage'
import PetDetailPage from './pages/PetDetailPage'
// import { Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import { PetProvider } from './utilities/PetContext'
import Footer from './components/Footer/Footer'
import Resources from './pages/Resources'

function App() {


  return (
    <PetProvider>
      <main className='main pt-[90px]'>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path='/adoption/:id' element={<PetDetailPage />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </PetProvider>
  )
}

export default App
