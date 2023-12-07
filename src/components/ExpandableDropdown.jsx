import React, { useState } from 'react'
import Arrow from '../assets/Arrow.svg'

const ExpandableDropdown = ({ title, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div >
      <div className='bg-[#214038]/80 px-5 py-2 border-b-2 border-[#f9f9f9] text-white font-bold flex justify-between' onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title}
        <img src={Arrow} />
        {/* className='origin-center rotate-180'  */}
      </div>

      {isExpanded && (
        <div className='px-5 py-2'>
          {children}
        </div>
      )}
    </div>
  );
};
export default ExpandableDropdown