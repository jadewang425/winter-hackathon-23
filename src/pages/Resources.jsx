import React from 'react'
import ExpandableDropdown from '../components/ExpandableDropdown';

const Resources = () => {


  return (
    <div >
      <h1 className='bg-black text-white my-4'>Resources</h1>
      <ExpandableDropdown title="Animal Rescue Locations">
        <div>The Humane Society of West Louisiana <br></br>
          P.O. Box 1751 <br></br>
          DeRidder, LA 70634 <br></br>
        </div>
      </ExpandableDropdown>

      <ExpandableDropdown title="One">
        <div>content one</div>
      </ExpandableDropdown>
      <ExpandableDropdown title="Two">
        <div>content two</div>
      </ExpandableDropdown>
      <ExpandableDropdown title="Three">
        <div>content three</div>
      </ExpandableDropdown>
      <ExpandableDropdown title="Four">
        <div>content four</div>
      </ExpandableDropdown>


    </div>
  );
};

export default Resources