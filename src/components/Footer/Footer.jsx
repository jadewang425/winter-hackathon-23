import { Link } from "react-router-dom"
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebook } from "react-icons/fa";
import BarkLogo from '../../assets/BarkLogo.svg'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer () {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full p-5 flex flex-col bg-[#214038] text-white font-[Poppins]">
            <div className="w-[100%] flex justify-between items-center max-w-6xl self-center">
                <div className="flex justify-between md:flex-col w-full">
                    <div className="flex justify-center md:mb-5">
                        <ul className="md:flex gap-10">
                            <li className="hover:underline"><Link to="/about">About Us</Link></li>
                            <li className="hover:underline"><Link to="/donate">Donate</Link></li>
                            <li className="hover:underline"><Link to="/adopt">Adopt</Link></li>
                            <li className="hover:underline"><Link to="/resources">Resources</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col pl-10 md:pl-0 w-full md:flex-row md:justify-center gap-5 md:mb-5">
                        <div className="pr-2">
                            <a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">
                                <FaFacebook size={30} className="hover:text-[#7F3F98] duration-300" />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:longj1003@aol.com" className='flex justify-between items-center w-full'>
                                <HiOutlineMail size={30} className="hover:text-[#7F3F98] duration-300"/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-center">
                        <div className="flex justify-end md:hidden">
                            <img src={BarkLogo} className='w-auto h-20 py-2' alt="Logo" />
                        </div>
                        <div>
                            <button onClick={() => setOpen(!open)} className="bg-[#E5BC01] hover:bg-[#f8d36d] duration-200 text-[#214038] rounded-full px-12 py-[2px] md:col-span-1 w-[200px]">501c(3)</button>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div 
                        className="w-full mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-center">Boudreaux’s Animal Rescue Krewe (B.A.R.K.) is a 501c(3) non-profit animal welfare organization and NO-KILL animal shelter in Alexandria, Louisiana.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}