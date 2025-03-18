import React from 'react';
import ButtonCom from '../HOC/ButtonCom';
import { Link } from 'react-router-dom';

function Homecontact() {
  return (
   <>
   <div className="homecontact">
    <div className="container d-flex justify-content-center align-content-center align-items-end h-100">
<div className="box_contact p-3 mx-auto" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
    <div className='text-white text-center p-2 p-lg-5 fstyle'>
    New To Step Laundry ? Start Here
    </div>
    <p className='text-white pera text-center px-3 px-md-4 fw-medium container'>
    If you're new to doing laundry with WASHSTRIP, you're in the right place—this guide will walk you through everything you need to know, from how to use these convenient, eco-friendly detergent sheets to maximizing their effectiveness for fresh, clean clothes with zero waste.
    </p>
    <div className='mx-auto text-center my-4'>
<Link to={"/contact"}>
<ButtonCom btn="+ (91) 12345 67890"/>
</Link>
    </div>
</div>

    </div>
   </div>
   </>
  );
}

export default Homecontact;
