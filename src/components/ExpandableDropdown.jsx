import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";


const ExpandableDropdown = ({ title, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div animate={isExpanded ? "open" : "closed"} >
      <div className='bg-[#214038]/80 px-5 py-2 border-b-2 border-[#f9f9f9] text-white font-bold flex justify-between items-center' onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title}
        <motion.div variants={iconVariants}>
          <IoIosArrowDown />
        </motion.div>
        {/* className='origin-center rotate-180'  */}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className='px-5 py-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default ExpandableDropdown

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};