import React from 'react';
import'./Pagination.css'

const Pagination = ({prev,next,onPrevius,onNext}) => {
    const handlePrevius =()=>{
        onPrevius()
    }
    const handleNext=()=>{
        onNext()
    }
  return (
    <nav>
      <ul className='cont__butt'>
        {
        prev?
        <li className='cont__li'>
          <button onClick={handlePrevius}>Previus</button>
        </li>
        :
        null
    
        }
        {
        next?
        <li className='cont__li'>
          <button onClick={handleNext}>Next</button>
        </li>
        :
        null
        }
      </ul>
    </nav>
  );
};

export default Pagination;