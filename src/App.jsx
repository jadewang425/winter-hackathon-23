import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdoptionPage from './pages/AdoptionPage'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
      </Routes>
    </>
  )
}

export default App
