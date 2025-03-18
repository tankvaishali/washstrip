import React, { useState } from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk, FaPlayCircle, FaTwitter } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <>
      <div className="footer_bg overflow-hidden">
        <div className="container mt-3">
          <div className="row g-3 pb-5 d-flex justify-content-center align-items-lg-start align-items-center border-secondary border-bottom">
            <div className="col-12 col-md-6 col-lg-4 p-3 mt-0 p-lg-5 bgteal">
              <div data-aos="fade-up" data-aos-duration="1600" data-aos-once="true" >
                <h3 className='text-white fw-bold fstyle pb-2'>
                  Contact Us
                </h3>
                <div className=" d-flex py-2">
                  <div className="text-white text-decoration-none footerlinkicon fs-4">
                    <FaMapLocationDot />
                  </div>
                  <div className="linkhover ps-3 pera">
                    <Link
                      to={
                        "https://maps.app.goo.gl/2Zm1ZC443PhT64D39"
                      }
                      className="text-decoration-none linkhover link_hover py-1 pera text-white"
                      target="_blank"
                    >
                      Plot No. 1, Shop No. 5, Ground Floor, Shaktinagar Co. Op. Housing Society, Near Kantareswar Mahadev Temple Katargam, Surat – 395004, Gujarat.
                    </Link>
                  </div>
                </div>

                <div className="py-2 d-flex ">
                  <div className="text-white text-decoration-none footerlinkicon fs-4">
                    <BiSolidPhoneCall />
                  </div>
                  <div>

                    <div className="linkhover ps-3 pt-2">
                      {" "}
                      <Link
                        to={"tel:9898399973"}
                        className="text-decoration-none linkhover link_hover py-1 pera text-white"
                      >
                        +(91) 98983 99973
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-2 d-flex align-content-center align-items-center">
                  <div>
                    <Link
                      to={"mailto:info@tharayilpower.com"}
                      className="text-white text-decoration-none footerlinkicon fs-4"
                    >
                      <FaMailBulk />
                    </Link>
                  </div>
                  <div>
                    <div className="linkhover ps-3">
                      <Link
                        to={"mailto:sales@belpatrapharmachem.com"}
                        className="text-decoration-none linkhover link_hover py-1 pera text-white"
                      >
                        sales@belpatrapharmachem.com
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
              <div className='w-50 h-50 mx-auto'>
                <img src={require("../../Assets/images/logopng.png")} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
              </div>
              <p className='text-secondary fw-medium pera text-center px-3'>Getting started with WASHSTRIP is simple and hassle-free! Whether you're new to laundry or just making the switch to our eco-friendly detergent sheets, this guide will help you understand how to use them effectively. </p>
              <div className='mt-2 mt-lg-4'>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="d-flex fs-4 my-3 justify-content-center">
                    <Link
                      to={"https://www.facebook.com/people/Belpatra-Pharmachem/100082567202591/"}
                      target="_blank"
                      className="footericon text-center p-2 mx-2  ms-0 d-flex text-decoration-none text-white facebookicon">
                      <FaFacebookF />
                    </Link>

                    <Link
                      to={"https://www.instagram.com/belpatra_pharmachem/"}
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white instaicon">
                      <FaInstagram />
                    </Link>
                    <Link
                      to={"https://twitter.com/Belpatra_Pharma"}
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white twittericon">
                      <FaTwitter />
                    </Link>
                    <Link
                      to={
                        "https://www.linkedin.com/in/belpatra-pharmachem/"
                      }
                      target="_blank"
                      className="footericon text-center p-2  mx-2 d-flex text-decoration-none text-white linkicon">
                      <FaLinkedinIn />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
         <div className="col-12 col-md-6 col-lg-4 p-4 position-relative" style={{ height: "300px" }}>
      {isPlaying ? (
        <iframe
          key="youtube-video"
          className="w-100 h-100 border-2 border"
          src="https://www.youtube.com/embed/YlEzM0sOyrA?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ height: "300px" }}
        ></iframe>
      ) : (
        <div
          className="w-100 h-100 position-relative border-2 border p-2"
        
          style={{ cursor: "pointer", height: "300px", background: "black" }} 
        >
          {/* Poster (Thumbnail) */}
          <img
            src="https://transform-cf1.nws.ai/https%3A//cdn.thenewsroom.io/platform/story_media/1288817962/how-to-get-rid-of-static-cling-in-your-laundry-1.webp/w_1200,c_limit/"
            alt="Video Thumbnail"
            className="w-100 h-100 object-fit-cover rounded"
            style={{ height: "300px", display: isPlaying ? "none" : "block" }} // 🔥 Hide instantly on play
          />
          {/* Play Button (Optional) */}
          <div className="position-absolute top-50 start-50 translate-middle p-2 rounded-circle"   onClick={handlePlay} >
            <div className="text-white bg-transparent display-3">
              <FaPlayCircle className="play_Circle_icon bg-transparent" />
            </div>
          </div>
        </div>
      )}
      <div className="text-white pera mt-1">
        Note: This sheet can be used in both Front Load & Top Load Washing Machines.
      </div>
    </div>
          </div>

          <div className='text-white  text-center pera p-2'>
            Copyright © 2025 💚 Washstrip, All rights Reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer