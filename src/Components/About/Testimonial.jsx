// import React from 'react'
// import Titlecom from '../HOC/Titlecom'
// import { FaQuoteRight, FaStar } from 'react-icons/fa'
// import Slider from 'react-slick';

// function Testimonial() {

//     var settings = {
//         dots: false,
//         infinite: true,
//         arrows: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         autoplay: true,
//         swipe: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: false,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,

//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,

//                 }
//             },
//         ]
//     };

//     const testimonials = [
//         {
//             name: "Nikhil Rana",
//             tittle: "Our Client",
//             review: "I am thrilled with the orthotics I purchased. They have significantly reduced my back pain, allowing me to walk longer distances comfortably. Thank you so much for providing such effective relief!",
//             image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/14.jpg"
//         },
//         {
//             name: "Neha Shah",
//             tittle: "Our Client",
//             review: "The prosthetic device I received exceeded my expectations in terms of comfort and functionality. The team here really listens to your concerns and delivers solutions that truly make a difference.",
//             image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/12.jpg"
//         },
//         {
//             name: "Raj Patel",
//             tittle: "Our Client",
//             review: "The prosthetics and orthotics service provided here is exceptional. They prioritize patient comfort and functionality, ensuring customized solutions that meet individual needs with precision and care.",
//             image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/14.jpg"
//         },
//         {
//             name: "Kiran Patel",
//             tittle: "Our Client",
//             review: "He prosthetic limb I received here has significantly improved my mobility and quality of life. The team's dedication and expertise are truly commendable, ensuring a seamless experience from consultation to fitting.",
//             image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/12.jpg"
//         }
//     ];

//     return (
//         <>
//             <div className='container my-5'>
//                 <div className='text-center d-flex flex-column align-items-center'>
//                     <Titlecom ftitle="Testimonials" title="What Clients Say About Washstrip" />
//                 </div>
//                 <div className='pera text-center pt-2'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, atque! Fugiat veniam quidem expedita numquam corporis natus eligendi velit molestias.
//                 </div>
//                 <div className="my-4">
//                     <div className="testimonial_bg p-3 p-md-4 p-lg-5 rounded-5">
//                         <Slider {...settings}>
//                             {testimonials.map((testimonial, index) => (
//                                 <div key={index} className="px-2">
//                                     <div className="h-100">
//                                         <div className="bg-white rounded-4 p-4">
//                                             <div className="text-warning">
//                                                 {[...Array(5)].map((_, i) => (
//                                                     <FaStar key={i} className="me-1" />
//                                                 ))}
//                                             </div>
//                                             <div className="text-secondary pera mt-3 mb-4 testi_review">{testimonial.review}</div>
//                                             <div className="d-flex align-items-center justify-content-between">
//                                                 <div className="d-flex align-items-center">
//                                                     <div style={{ width: "50px", height: "50px" }}>
//                                                         <img
//                                                             src={testimonial.image}
//                                                             className="w-100 h-100 rounded-circle testi_Client_img"
//                                                             alt={testimonial.name}
//                                                         />
//                                                     </div>
//                                                     <div className="ms-3">
//                                                         <h3 className="fstyle fs-5 text-uppercase">{testimonial.name}</h3>
//                                                         <div className="pera text-secondary">{testimonial.tittle}</div>
//                                                     </div>
//                                                 </div>
//                                                 <FaQuoteRight className="fs-1" style={{ color: "rgba(0, 141, 141, 0.689)" }} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Testimonial;


import React from 'react'
import Titlecom from '../HOC/Titlecom'
import { FaQuoteRight, FaStar } from 'react-icons/fa'
import Slider from 'react-slick';
import { IoMdStarHalf } from 'react-icons/io';
import { MdStar } from 'react-icons/md';

function Testimonial() {

    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        swipe: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const testimonials = [
        {
            id: 1,
            name: "Nikhil Rana",
            review: "WashStrip has made laundry so easy! No more messy liquid or powder detergents—just one strip, and my clothes come out fresh and clean.",
            image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/14.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "Neha Shah",
            review: "Exceptional cleaning power! Strip removes tough stains, works in cold water, and keeps my clothes smelling great. Highly recommended!",
            image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/12.jpg",
            rating: 3.5
        },
        {
            id: 3,
            name: "Raj Patel",
            review: "WashStrip is amazing! No spills, no measuring—just one strip for a fresh, clean wash. Compact, effective, and perfect for laundry!",
            image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/14.jpg",
            rating: 4
        },
        {
            id: 4,
            name: "Kiran Patel",
            review: "A revolutionary product! My clothes feel softer, and I love knowing that I’m reducing plastic waste with every wash.",
            image: "https://kitpro.site/spinzy/wp-content/uploads/sites/319/2025/01/12.jpg",
            rating: 4.5
        }
    ];

    return (
        <>
            <div className='container my-2 my-lg-5 my-md-5'>
                <div className='text-center d-flex flex-column align-items-center'>
                    <Titlecom ftitle="Testimonials" title="What Clients Say About Washstrip" />
                </div>
                <div className='pera text-center pt-2'>
                    Say goodbye to messy detergents and enjoy effortless laundry with WashStrip! A powerful, eco-friendly, and space-saving solution trusted by happy customers.
                </div>
                <div className="my-4">
                    <div className="testimonial_bg p-3 p-md-4 p-lg-5 rounded-5">
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="px-2">
                                    <div className="h-100">
                                        <div className="bg-white rounded-4 p-4">
                                            <div className="text-warning">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className='text-warning fs-4'>
                                                        {i + 0.5 < testimonial.rating ? <MdStar /> : <IoMdStarHalf />}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="text-secondary pera mt-3 mb-4 testi_review" style={{ wordBreak: "break-all" }}>{testimonial.review}</div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div style={{ width: "50px", height: "50px" }}>
                                                        <img
                                                            src={testimonial.image}
                                                            className="w-100 h-100 rounded-circle testi_Client_img"
                                                            alt={testimonial.name}
                                                        />
                                                    </div>
                                                    <div className="ms-3 mt-2">
                                                        <h3 className="fstyle fs-5 text-uppercase">{testimonial.name}</h3>
                                                    </div>
                                                </div>
                                                <FaQuoteRight className="fs-1" style={{ color: "rgba(0, 141, 141, 0.689)" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;