import React, { useState } from 'react'
import ExpandableDropdown from '../components/ExpandableDropdown';

const Resources = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <ExpandableDropdown title="Dropdown 1" content="Additional information for Dropdown 1 goes here." />    </div>
  );
};

export default Resources