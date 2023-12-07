import BarkLogo from '../../assets/BarkLogo.svg'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className='w-full shadow-[0_0_5px_0_rgba(0,0,0,0.3)] bg-[#214038] left-0 flex justify-center items-center fixed top-0 z-20 h-[95px] px-5 py-1'>
        <div className="max-w-6xl w-full flex justify-between items-center ">
            <div className='flex gap-3 justify-center items-center'>
                <NavLink to="/">
                    <img src={BarkLogo} className='w-auto h-20 py-2' alt="Logo" />
                </NavLink>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[15px] font-[800] tracking-[.64px] font-[Poppins] text-[#E5BC01] leading-none'>BARK Animal Rescue</h1>
                    <p className='text-[#F9F9F9] text-[11px] leading-none'>No Kill Shelter in Alexandria, LA</p>
                </div>
            </div>
            <div className='flex gap-5 text-[#F9F9F9] max-md:hidden'>
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
            </div>
            <div className='text-2xl text-[#FFF] md:hidden cursor-pointer' onClick={() => setOpen(true)}>
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
            <div onClick={(e) => e.stopPropagation()} className="bg-[#7F3F98] h-full w-[90vw] relative z-10 cursor-default px-5 py-2 flex flex-col justify-between">
                <div className='flex flex-col mt-8'>
                    <div className='flex gap-3 justify-center items-center border-b border-[#F9F9F9] pb-5 mb-5'>
                        <img src={BarkLogo} className='w-[50px] h-[50px]' alt="Logo" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] text-[#F9F9F9] font-[600] font-[Poppins] leading-none'>BARK Animal Rescue</h1>
                            <p className='text-[14px] text-[#F9F9F9] font-[Poppins] leading-none'>Menu</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 text-[#F9F9F9] font-[Poppins]'>
                        <Link to="/about" className='border-b border-[#F9F9F9] pb-5' onClick={() => setOpen(false)}>
                            About BARK
                        </Link>
                        <Link to="/adoption" className='border-b border-[#F9F9F9] pb-5' onClick={() => setOpen(false)}>
                            Adopt
                        </Link>
                        <Link to="/donate" className='border-b border-[#F9F9F9] pb-5' onClick={() => setOpen(false)}>
                            Donate
                        </Link>
                        <Link to="/resources" className='border-b border-[#F9F9F9] pb-5' onClick={() => setOpen(false)}>
                            Resources
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}