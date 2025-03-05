import React from 'react';
import Titlecom from '../HOC/Titlecom';
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        swipe: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
        ]
    };
    let slidedata = [
       
        {
            name: "Nikhil Rana",
            content: "I am thrilled with the orthotics I purchased. They have significantly reduced my back pain, allowing me to walk longer distances comfortably. Thank you so much for providing such effective relief!",

        },
        {
            name: "Raj Patel",
            content: "The prosthetics and orthotics service provided here is exceptional. They prioritize patient comfort and functionality, ensuring customized solutions that meet individual needs with precision and care."
            ,

        },
        {
            name: "Neha Shah",
            content: "The prosthetic device I received exceeded my expectations in terms of comfort and functionality. The team here really listens to your concerns and delivers solutions that truly make a difference."
            ,

        },
        {
            name: "Kiran Patel",
            content: "He prosthetic limb I received here has significantly improved my mobility and quality of life. The team's dedication and expertise are truly commendable, ensuring a seamless experience from consultation to fitting."
            ,

        },
    ]
    return (
        <>
            <div className="testimonial_bg">
                <div className="container py-5">
                    <div className='text-center d-flex flex-column align-items-center text-white'>
                        <Titlecom ftitle="Testimonials" title="What Client says About Washstrip" />
                    </div>
                    <p className='pera text-center pt-2 text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, atque! Fugiat veniam quidem expedita numquam corporis natus eligendi velit molestias.
                    </p>

                    <div className="row p-0 m-0 g-4">
                        <Slider {...settings} className="custom-dots mb-5" >
                            {slidedata.map((x, i) => {
                                return (
                                    <div key={i} className="col-12 col-lg-4 text-center mb-4 comments_cardhover">
                                        <div className="card m-3 p-4 shadow">
                                            <div className="main-card">
                                                <h1 className="iconquote "><FaQuoteLeft />
                                                </h1>
                                                <div className="peracontent py-1 custom-card">
                                                    <div className="my-auto">{x.content}</div>
                                                </div>
                                                <div className="pb-1" style={{ color: "orange" }}>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                                <div className="py-2 fs-3 fw-bolder tealcolor">{x.name}</div>

                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Testimonial;
