import React from 'react';
import Titlecom from '../HOC/Titlecom';
import ButtonCom from '../HOC/ButtonCom';
import { Link } from 'react-router-dom';

function Homecontact() {
  return (
   <>
   <div className="homecontact">
    <div className="container d-flex justify-content-center align-content-center align-items-end h-100">
<div className="box_contact p-5 mx-auto" style={{width:"55%"}}>
    <div className='text-white text-center p-5 fstyle'>
    New To Kind Laundry ? Start Here
    </div>
    <p className='text-white pera text-center px-4 fw-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odio. Officiis nemo sit rerum iure alias consectetur facilis iste omnis.
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
