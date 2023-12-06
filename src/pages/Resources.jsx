import React from 'react'
import ExpandableDropdown from '../components/ExpandableDropdown';

const Resources = () => {


  return (
    <div >
      <h1 className='bg-gray-300 my-4 px-5 py-2 font-bold'>Resources</h1>

      <div className=''>

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

    </div>
  );
};

export default Resources