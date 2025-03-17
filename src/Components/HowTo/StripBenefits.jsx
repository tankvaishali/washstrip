import React from 'react';

function StripBenefits() {

    const benefits = [
        {
            imgSrc: require("../../Assets/images/_1__benefits-removebg-preview.png"),
            text: "100% Safe Formulations"
        },
        {
            imgSrc: require("../../Assets/images/white-vector-check-mark-tick-circle-conceptual_90220-403-removebg-preview.png"),
            text: "Easy to Use, Easy to Store"
        },
        {
            imgSrc: require("../../Assets/images/_3__benefits-removebg-preview.png"),
            text: "No Harsh Chemicals"
        },
        {
            imgSrc: require("../../Assets/images/images-removebg-preview (4).png"),
            text: "Biodegradable"
        }
    ];

    return (
        <div className='StripBenefits_bg my-5'>
            <div className='overflow-hidden'>
                <div className='row'>
                    {benefits.map((benefit, index) => (
                        <div key={index} className='strip_main col-sm-6 col-lg-3 col-md-6 px-2 py-5 border border-white border-1'>
                            <div className='d-flex flex-column align-items-center text-center' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                <div style={{ width: "120px", height: "120px" }}>
                                    <img src={benefit.imgSrc} className='Strip_image object-fit-cover w-100 h-100' alt={benefit.text} />
                                </div>
                                <p className='fs-4 mt-3 mx-3 mx-lg-5 mx-md-5 fstyle fw-bold strip_tittle' style={{ color: "var(--teal)" }}>{benefit.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StripBenefits;