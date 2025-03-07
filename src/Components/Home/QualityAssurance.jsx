import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Titlecom from '../HOC/Titlecom'

function QualityAssurance() {

    const progressBars = [
        { label: "Eco-Conscious Cleaning", percentages: "99%", percentage: 99 },
        { label: "Specialty Fabric Care", percentages: "90%", percentage: 90 },
        { label: "Non-Toxic Stain Removal", percentages: "95%", percentage: 95 },
        { label: "Carbon-Neutral Delivery", percentages: "80%", percentage: 80 },
    ];

    const progressRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const percentage = bar.getAttribute("data-percentage");
                        bar.style.width = `${percentage}%`;
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        progressRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });
    }, []);

    return (
        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className="col-12 col-lg-6 p-3 p-lg-4">
                        <div className="h-100">
                            <div className='ms-auto main_qualityimg h-100'>
                                <img src="https://www.ifbappliances.com/media/mageplaza/blog/post/4/1/417x250_4.png" alt="" className='img-fluid h-100 w-100 object-fit-cover rounded-3 shadow-lg' />
                            </div>
                            <div className="bg-transparent mt-3">
                                <div className='Quality_count posdiv rounded-3 text-white p-3'>
                                    <div className='d-flex fstyle' style={{ gap: "20px" }}>
                                        <h1 style={{ letterSpacing: "2px" }}><CountUp start={0} end={25} duration={3.5} />+</h1>
                                        <div className='fw-bold'>Year of <div>Experience </div></div>
                                    </div>
                                    <div className='pera mt-2 mb-3' style={{ wordBreak: "break-all" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium possimus impedit, eum corporis veritatis?</div>
                                    <div>
                                        <Link to={"/contact"} className='Quality_contact_redirect text-white text-decoration-none fw-semibold fstyle d-flex align-items-center'><IoIosArrowDroprightCircle className='fs-5 me-2' /> Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 p-3 p-lg-4 pos_Quality_content'>
                        <div className="h-100">
                            <div>
                                <Titlecom ftitle={"Quality Assurance"} title={"Your Satisfaction Is Our Commitment."} />
                            </div>
                            <div className='text-secondary pera my-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                            <div className="pt-1">
                                {progressBars.map((bar, index) => (
                                    <div key={index} className="mb-3 text-dark">
                                        <div className="d-flex justify-content-between">
                                            <div className='pb-1 text-capitalize pera fstyle'>
                                                {bar.label}
                                            </div>
                                            <span className="fstyle pera">{bar.percentages}</span>
                                        </div>
                                        <div className="progress rounded-0 barshadow rounded-5 position-relative" style={{ height: "20px" }}>
                                            <div
                                                ref={(el) => (progressRefs.current[index] = el)}
                                                className="progress-bar rounded-5 d-flex align-items-center"
                                                role="progressbar"
                                                style={{
                                                    width: "0%",
                                                    background: "var(--teal)",
                                                    transition: "width 1s ease-in-out",
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    position: "relative",
                                                }}
                                                aria-valuenow={bar.percentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                data-percentage={bar.percentage}
                                            >
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QualityAssurance