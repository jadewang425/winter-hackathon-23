import Logo from '../../assets/logo.png'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
import { IoMdMenu, IoMdSettings } from "react-icons/io";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className='w-full shadow-[0_0_5px_0_rgba(0,0,0,0.3)] bg-white left-0 flex justify-center items-center fixed top-0 z-20 h-[75] px-5 py-1'>
        <div className="max-w-6xl w-full flex justify-between items-center ">
            <div className='flex gap-3 justify-center items-center'>
                <NavLink to="/">
                    <img src={Logo} className='w-auto h-20 py-2' alt="Logo" />
                </NavLink>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[1.79rem] max-lg:text-[1.5rem] leading-none'>BARK Animal Rescue</h1>
                    <p className='text-sm leading-none'>No Kill Shelter in Alexandria, LA</p>
                </div>
            </div>
            <div className='flex gap-5 text-black max-md:hidden'>
                <NavLink to="/about">
                    About Bark
                </NavLink>
                <NavLink to="/adoption">
                    Adopt
                </NavLink>
                <NavLink to="/donate">
                    Donate
                </NavLink>
                <NavLink to="/resources">
                    Resources
                </NavLink>
                <NavLink to="/setting">
                    Settings
                </NavLink>
            </div>
            <div className='text-2xl md:hidden cursor-pointer' onClick={() => setOpen(true)}>
                <IoMdMenu />
            </div>
            <AnimatePresence>
                {open && <SideBarMenu setOpen={setOpen} />}
            </AnimatePresence>
        </div>
    </header>
  )
}

export default Navbar

const SideBarMenu = ({setOpen}) => {
    return (
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className='bg-slate-900/20 backdrop-blur fixed inset-0 z-50 flex justify-end overflow-y-scroll cursor-pointer'>
            <div onClick={(e) => e.stopPropagation()} className="bg-white h-full w-[90vw] relative z-10 cursor-default px-5 py-2 flex flex-col justify-between">
                <div className='flex flex-col'>
                    <div className='flex gap-3 justify-center items-center border-b border-gray-500 pb-5 mb-5'>
                        <img src={Logo} className='w-auto h-20' alt="Logo" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[1.79rem] max-lg:text-[1.5rem] leading-none'>BARK Animal Rescue</h1>
                            <p className='text-sm leading-none'>Menu</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <Link to="/about" className='border-b border-gray-500 pb-5' onClick={() => setOpen(false)}>
                            About BARK
                        </Link>
                        <Link to="/adoption" className='border-b border-gray-500 pb-5' onClick={() => setOpen(false)}>
                            Adopt
                        </Link>
                        <Link to="/donate" className='border-b border-gray-500 pb-5' onClick={() => setOpen(false)}>
                            Donate
                        </Link>
                        <Link to="/resources"  onClick={() => setOpen(false)}>
                            Resources
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center  '>
                    <Link to="/settings" className='flex justify-center p-3 items-center gap-3 cursor-pointer'  onClick={() => setOpen(false)}>
                        <IoMdSettings />
                        Settings
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}