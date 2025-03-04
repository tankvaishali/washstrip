import React from 'react';
import Titlecom from '../HOC/Titlecom';
import ButtonCom from '../HOC/ButtonCom';

function HomeAbout() {
  return (
    <>
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-12 col-lg-6  ">
            <div className="h-100 d-flex  flex-column justify-content-center">
            <Titlecom ftitle={"About Us"} title={"Your Trusted Partner In Wahing Care."} />
              <div className="pera text-secondary pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt distinctio veniam assumenda iure saepe vitae laborum nulla aperiam labore?</div>
              <div className="pera text-secondary pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt distinctio veniam assumenda iure saepe vitae laborum nulla aperiam labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit aut, rem esse est numquam itaque dolorum fuga dolores eos hic nihil omnis similique atque error placeat mollitia odio optio accusamus delectus praesentium beatae voluptatem, natus, in alias! Ex, saepe sit?  Suscipit aut, rem esse est numquam itaque dolorum fuga dolores eos hic nihil omnis similique atque error placeat mollitia odio optio accusamus delectus praesentium beatae voluptatem, natus, in alias! Ex, saepe sit?</div>
              <div className='my-3'>
                <ButtonCom btn="Know More" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="h-100">
         <img src={require("../../Assets/images/aboutus_dark_image.jpg")} alt="" className='img-fluid w-100 h-100 bg-transparent '/>
            </div>
          </div>
          
          {/* <div className="col-12 col-lg-6">
            <div className="h-100">
              <div className="row">
                <div className="col-7 ">
                  <div className="h-100">
                    <img src="https://img.freepik.com/free-photo/middle-aged-woman-wearing-apron-holding-bucket-with-cleaning-tools-standing-sideways-pointing-something-with-finger-looking-surprised-white-wall_141793-22795.jpg?t=st=1741074334~exp=1741077934~hmac=0af0f9937f3647251567f6c50780567ee8a5549910fb5c3cdc44eaae78afc4b9&w=1060" alt="" className='img-fluid w-100 h-100 shadow fimage object-fit-cover ' style={{ objectPosition: "20% center" }} />
                  </div>
                </div>
                <div className="col-5">
                  <div className="h-100">
                    <div className='d-flex justify-content-evenly p-0'>
                      <div className='fdiv'></div>
                      <div className='sdiv ms-2'> </div>
                    </div>
                    <div className='mb-4 mt-2 scolor'>
                      <img src={require("../../Assets/images/logopngset.png")} alt="" className='img-fluid w-100 h-100 shadow simage text-center' />
                    </div>
                    <div className=''>
                      <img src="https://www.kuraray-poval.com/fileadmin/applications/laundry_detergent_sheet/kuraray-poval-laundry-detergent-sheet.jpg" alt="" className='img-fluid w-100 h-100 shadow simage' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        
      </div>
    </>
  );
}

export default HomeAbout;
