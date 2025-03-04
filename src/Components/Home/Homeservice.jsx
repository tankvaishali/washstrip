import React from 'react';
import Titlecom from '../HOC/Titlecom';

function Homeservice() {
  return (
<>
<div className="container">
<div className="shadow mx-auto w-75 p-4 pb-0">
    <div className='d-flex flex-column jutify-content-center align-items-center'>
        <Titlecom ftitle="Our Services" title="We Are Best Services Provided to our Customers"/>
    </div>
    <p className='pera text-secondary text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eligendi. Ab veritatis repudiandae mollitia obcaecati accusantium, sunt a voluptate laudantium.
    </p>
<div className="row g-3">
    <div className="col-4">
<div className="h-100">
   
</div>
    </div>
  
    <div className="col-4">
<div className="h-100 mt-auto">
    <img src={require("../../Assets/images/service_img.jpg")} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
</div>
    </div>
    <div className="col-4">
<div className="h-100 mt-auto">

</div>
    </div>
</div>
</div>
</div>
</>
  );
}

export default Homeservice;
