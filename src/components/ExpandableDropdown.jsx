import React, { useState } from 'react'

const ExpandableDropdown = ({ title, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div >
      <div className='bg-gray-300 px-5 py-2 border-b-2 border-black font-bold' onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title}
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