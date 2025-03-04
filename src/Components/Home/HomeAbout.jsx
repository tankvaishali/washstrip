import React from 'react';
import Titlecom from '../HOC/Titlecom';
import ButtonCom from '../HOC/ButtonCom';

function HomeAbout() {
  return (
   <>
   <div className="container my-5">
<div className="row g-3">
<div className="col-12 col-lg-6">
<div className="h-100">
<Titlecom ftitle={"About Us"} title={"Your Trusted Partner In Wahing Care."}/>
<div className="pera text-secondary pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt distinctio veniam assumenda iure saepe vitae laborum nulla aperiam labore?</div>
<div className="pera text-secondary pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt distinctio veniam assumenda iure saepe vitae laborum nulla aperiam labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aut, rem esse est numquam itaque dolorum fuga dolores eos hic nihil omnis similique atque error placeat mollitia odio optio accusamus delectus praesentium beatae voluptatem, natus, in alias! Ex, saepe sit?  Suscipit aut, rem esse est numquam itaque dolorum fuga dolores eos hic nihil omnis similique atque error placeat mollitia odio optio accusamus delectus praesentium beatae voluptatem, natus, in alias! Ex, saepe sit?</div>
<div className='my-3'>
  <ButtonCom btn="About Us"/>
</div>
</div>
</div>
<div className="col-12 col-lg-6">
<div className="h-100">

</div>
</div>
</div>
   </div>
   </>
  );
}

export default HomeAbout;
