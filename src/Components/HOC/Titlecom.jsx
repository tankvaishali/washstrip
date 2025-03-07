import React from 'react';

function Titlecom(props) {
  return (
  <>
  <div className=' p-1 px-4 rounded-pill text-white border-white border border-3 fw-bold  gradientgreen overflow-hidden' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
    {props.ftitle}
  </div>
  <h2 className='fstyle pt-3 overflow-hidden'  data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">{props.title}</h2>
  </>
  );
}

export default Titlecom;
