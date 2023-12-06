import React, { useState } from 'react'
import ExpandableDropdown from '../components/ExpandableDropdown';

const Resources = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <ExpandableDropdown title="Animal Rescue Help" content="lorem ipsum" />
      <ExpandableDropdown title="Animal Rescue Locations" content="lorem ipsum" />
      <ExpandableDropdown title="Spay & Neuter Locations" content="lorem ipsum" />
      <ExpandableDropdown title="Lost & Found" content="lorem ipsum" />
    </div>
  );
};

export default Resources