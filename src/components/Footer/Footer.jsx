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
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="hover:underline"><Link to="/about">About Us</Link></div>
                        <div className="hover:underline"><Link to="/donate">Donate</Link></div>
                    </div>
                    <div className="flex mt-3">
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
                    <button onClick={() => setOpen(!open)} className="bg-[#E5BC01] hover:bg-[#f8d36d] duration-200 text-[#214038] mt-2 rounded-full px-12 py-[2px]">501c(3)</button>
                </div>
                <div>
                    <img src={BarkLogo} className='w-auto h-20 py-2' alt="Logo" />
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