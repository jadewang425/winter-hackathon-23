import React, { useState } from 'react'

const ExpandableDropdown = ({ title, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title}
      </div>

      {isExpanded && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};
export default ExpandableDropdown