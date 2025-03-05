import React from 'react';
import { MdOutlineFolderCopy } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaHeadset } from "react-icons/fa6";
import { RiEmotionHappyLine } from "react-icons/ri";
import CountUp from 'react-countup';

function Counter() {
  return (
    <>
    
    <div className='counterbck_image mt-5'>
<div className='container py-5'>
<div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 text-center g-3 py-3' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<div className='col' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<div className='text-white counter fw-bold py-3 p-1'>
    <div className='countericon'><MdOutlineFolderCopy /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor '>Project Completed</p>
    <p className='countnumber'>    <CountUp end={2638} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col ' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<div className='text-white  counter fw-bold py-3 p-1'>
    <div className='countericon'><LiaUsersSolid /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor'>Employer Solutions</p>
    <p className='countnumber'> <CountUp end={2124} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col ' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<div className='text-white counter fw-bold py-3 p-1'>
    <div className='countericon'><FaHeadset /></div>
    <p className='fs-4 tealcolor fstyle fw-bold hovercolor'>Online Support</p>
    <p className='countnumber'> <CountUp end={986} enableScrollSpy={true} separator="" /> +</p>
</div>
</div>
<div className='col' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<div className='text-white counter fw-bold py-3 p-1'>
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