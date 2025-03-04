import React from 'react';

function Titlecom(props) {
  return (
  <>
  <div className=' p-1 px-4 rounded-pill text-white border-white border border-3 fw-bold  gradientgreen'>
    {props.ftitle}
  </div>
  <h2 className='fstyle pt-3'>{props.title}</h2>
  </>
  );
}

export default Titlecom;
