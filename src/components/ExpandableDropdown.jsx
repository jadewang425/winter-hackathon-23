import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";


const ExpandableDropdown = ({ title, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div animate={isExpanded ? "open" : "closed"}  className='w-full bg-[#214038]/80 flex justify-center items-center flex-col  border-b-2 border-[#f9f9f9]' >
      <div className='max-w-6xl w-full py-4 px-4 min-[1187px]:px-0 text-white font-bold flex justify-between items-center' onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title}
        <motion.div variants={iconVariants}>
          <IoIosArrowDown />
        </motion.div>
        {/* className='origin-center rotate-180'  */}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className='py-2 px-4 flex justify-center bg-white w-full'
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