import React from 'react';
import { MdOutlineFolderCopy } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaCalendarDays, FaHeadset } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import CountUp from 'react-countup';

function Counter() {
  return (
    <>
    
    <div className='counterbck_image mt-5 overflow-hidden'>
<div className='container py-5 overflow-hidden'>
<div className='row row-cols-lg-4  row-cols-md-2 row-cols-1 text-center g-3 py-3' >
<div className='col' data-aos="fade-right" data-aos-delay="100"
     data-aos-once="true" data-aos-duration="800">
<div className='text-white h-100 counter fw-bold py-3 p-1'>
    <div className='countericon'><FaCalendarDays /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor '>Years Of Experience</p>
    <p className='countnumber'>  0<CountUp end={3} start={0} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col ' data-aos="fade-right" data-aos-delay="400"
     data-aos-once="true" data-aos-duration="1000">
<div className='text-white h-100  counter fw-bold py-3 p-1'>
    <div className='countericon'><LiaUsersSolid /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor'>Customers Solutions</p>
    <p className='countnumber'> <CountUp end={625} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col ' data-aos="fade-right" data-aos-delay="1000"
     data-aos-once="true" data-aos-duration="1500">
<div className='text-white h-100 counter fw-bold py-3 p-1'>
    <div className='countericon'><FaHeadset /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor'>Online Support</p>
    <p className='countnumber'> <CountUp end={1056} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col' data-aos="fade-right" data-aos-delay="1500"
     data-aos-once="true" data-aos-duration="1800">
<div className='text-white h-100 counter fw-bold py-3 p-1'>
    <div className='countericon'><RiEmotionHappyLine /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor'>Happy Clients</p>
    <p className='countnumber'> <CountUp end={1296} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
</div>
</div>
    </div>
    </>
  )
}

export default Counter