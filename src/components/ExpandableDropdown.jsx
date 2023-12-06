import React, { useState } from 'react'

const ExpandableDropdown = ({ title, content }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {title} - Click to expand
      </div>

      {isExpanded && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
export default ExpandableDropdown