import spinner from './spinner.gif';
import React from 'react';

const Loader = () => {
  return (
     <div className="loader">
         <img src={spinner} alt="Loading" />
         <h1>fetching Data</h1>
     </div>
  )
}

export default Loader;
