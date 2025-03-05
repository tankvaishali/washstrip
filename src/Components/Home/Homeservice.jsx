import React from 'react';
import Titlecom from '../HOC/Titlecom';

function Homeservice() {
  return (
<>
<div className="container ">
<div className="shadow mx-auto service_sec p-4 pb-0 bg-white">
    <div className='d-flex flex-column jutify-content-center align-items-center text-center'>
        <Titlecom ftitle="Our Services" title="We Are Best Services Provided to our Customers"/>
    </div>
    <p className='pera text-secondary text-center mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi. Ab veritatis repudiandae mollitia obcaecati accusantium, sunt a voluptate laudantium.
    </p>
<div className="row g-3 pt-4">
    <div className="col-12 col-lg-3  order-1 order-md-0">
<div className="h-100 text-center d-block d-md-flex flex-column justify-content-evenly align-items-center">
<div>
<h2 className='fw-bold greencolor fstyle'>01.</h2>
   <div className="tealcolor  fw-bold fstyle fs-4">
    EASY TO USE
   </div>
   <p className='pera pt-1'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, error!
   </p>
</div>
<div>
<h2 className='fw-bold greencolor fstyle'>02.</h2>
   <div className="tealcolor  fw-bold fstyle fs-4">
   Worthwhile purchase
   </div>
   <p className='pera pt-1'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, error!
   </p>
</div>
</div>
    </div>
  
    <div className=" col-12 col-lg-6 order-2 order-md-2">
<div className="h-100 mt-auto">
    <img src={require("../../Assets/images/service_img.jpg")} alt="" className='img-fluid w-100 h-100 ' />
</div>
    </div>
    <div className="col-12 col-lg-3  order-1 order-md-2">
<div className="h-100 text-center  d-block d-md-flex flex-column justify-content-evenly align-items-center">
<div>
<h2 className='fw-bold greencolor fstyle'>03.</h2>
   <div className="tealcolor  fw-bold fstyle fs-4">
   eco-friendly strips   
   </div>
   <p className='pera pt-1'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, error!
   </p>
</div>
<div>
<h2 className='fw-bold greencolor fstyle'>04.</h2>
   <div className="tealcolor  fw-bold fstyle fs-4">
   Small Strip, Big Impact
   </div>
   <p className='pera pt-1'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, error!
   </p>
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
