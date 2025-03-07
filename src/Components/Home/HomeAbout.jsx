import React from 'react';
import Titlecom from '../HOC/Titlecom';
import ButtonCom from '../HOC/ButtonCom';
import { FaCheckCircle } from 'react-icons/fa';

function HomeAbout() {
  return (
    <>
      <div className="container my-5 py-5 overflow-hidden">
        <div className="row g-3">
          <div className="col-12 col-lg-6  ">
            <div className="h-100 d-flex  flex-column justify-content-center">
            <Titlecom ftitle={"About Us"} title={"Washing Strips: Small in Size, Big on Power"} />
            <div className='fw-medium tealcolor'>Better for Your Clothes, Better for the Planet.</div>
                 
              <div className="pera text-secondary ">Upgrade your laundry routine with our laudry detergent sheets and take a step towards a cleaner future. Laundry detergent sheets are designed to clean effectively with only key cleaning ingredients for the ultimate cleaning power without unnecessary and harmful additives.</div>
              <div className="pt-2">
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium text-capitalize">
                      Timely Delivery
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium text-capitalize">
                      Sustainable, eco-friendly solutions
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center  py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium text-capitalize">
                        clean ingreadients
                      </div>
                    </div>
                    <div className="d-flex align-content-center align-items-center   py-1">
                      <div className=" text-success fs-5">
                        <FaCheckCircle />
                      </div>
                      <div className="ps-2 fw-medium text-capitalize">
                       No Harsh Chemicals
                      </div>
                    </div>
                  </div>
                 
              <div className='my-3'>
                <ButtonCom btn="Know More" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
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
