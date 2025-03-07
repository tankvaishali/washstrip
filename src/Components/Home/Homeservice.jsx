import React from 'react';
import Titlecom from '../HOC/Titlecom';

function Homeservice() {
  return (
<>
<div className="servicebg" >
<div className="container ">
<div className="shadow mx-auto service_sec p-4 pb-0 bg-white" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
    <div className='d-flex flex-column jutify-content-center align-items-center text-center'>
        <Titlecom ftitle="Our Services" title="We Are Best Services Provided to our Customers"/>
    </div>
    <p className='pera text-secondary text-center mx-auto px-4'>
    <strong>WASHSTRIP</strong> Detergent Sheets are an easy, efficient way to keep your delicates, bright colors, and whites looking their best. More effective than most traditional detergents, these sheets deliver a powerful clean while leaving your clothes fresh with our unique Ocean Passion scent.
    related content
    </p>
<div className="row g-3 pt-4">
    <div className="col-12 col-lg-3  order-1 order-md-0">
<div className="h-100 text-center d-block d-md-flex flex-column justify-content-evenly align-items-center">
<div>
<h2 className='fw-bold greencolor fstyle'>01.</h2>
   <div className="tealcolor  fw-bold fstyle text-uppercase fs-4">
    EASY TO USE
   </div>
   <p className='pera pt-1'>
   Sheets simplify your routine with a no-mess, no-measure solution. Just toss and wash.
   </p>
</div>
<div>
<h2 className='fw-bold greencolor fstyle'>02.</h2>
   <div className="tealcolor  fw-bold fstyle text-uppercase fs-4">
   Worthwhile purchase
   </div>
   <p className='pera pt-1'>
   Effortless Laundry with WASHSTRIP Detergent Sheets.
   </p>
</div>
</div>
    </div>
  
    <div className=" col-12 col-lg-6 order-2 order-md-2  " >
<div className="h-100 mt-auto">
    <img src={require("../../Assets/images/service_img.jpg")} alt="" className='img-fluid w-100 h-100 ' />
</div>
    </div>
    <div className="col-12 col-lg-3  order-1 order-md-2">
<div className="h-100 text-center  d-block d-md-flex flex-column justify-content-evenly align-items-center">
<div>
<h2 className='fw-bold greencolor fstyle'>03.</h2>
   <div className="tealcolor  fw-bold fstyle text-uppercase fs-4">
   eco-friendly strips   
   </div>
   <p className='pera pt-1'>
   Made with sustainable ingredients, free from harsh chemicals.
   </p>
</div>
<div>
<h2 className='fw-bold greencolor fstyle'>04.</h2>
   <div className="tealcolor  fw-bold fstyle text-uppercase fs-4">
   Small Strip, Big Impact
   </div>
   <p className='pera pt-1'>
   a tiny, lightweight strip that delivers a mighty clean.
   </p>
</div>
</div>
    </div>
</div>
</div>
</div>
</div>
</>
  );
}

export default Homeservice;
