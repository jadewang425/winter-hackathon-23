import Logo from '../../assets/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='w-full shadow-[0_0_5px_0_rgba(0,0,0,0.3)] flex justify-center items-center fixed top-0 z-20 h-[70px] px-5'>
        <div className="max-w-6xl w-full flex justify-between items-center ">
            <NavLink to="/" exact>
                <img src={Logo} className='w-auto h-auto max-h-16 py-2' alt="Logo" />
            </NavLink>
            <div className='flex gap-5 text-black'>
                <NavLink to="/about">
                    About Bark
                </NavLink>
                <NavLink to="/adoption">
                    Adoption
                </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Navbar