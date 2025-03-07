import React from 'react'
import Titlecom from '../HOC/Titlecom';
import { HiCheckCircle } from 'react-icons/hi2';

function AboutUsSec() {
    return (
        <>
            <div className="container">
                <div className="main_about_us_sec row d-flex justify-content-center align-items-center align-content-center">
                    <div className="col-12 col-lg-6 py-3 px-4">
                        <div className="h-100">
                            <div>
                                <img src={require("../../Assets/images/about_us Page image.png")} className='w-100 h-100 img-fluid object-fit-cover' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 py-3 px-4">
                        <div className="h-100">
                            <Titlecom ftitle={"About Us"} title={"Washing Strips: Small in Size, Big on Power"} />
                            <div className='pera text-secondary pt-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                            <div>
                                <div className='mt-3'>
                                    <div className='fstyle mb-1 fs-5 fw-semibold'><HiCheckCircle className='about_icon fs-1' /> Expertise in Every Wash</div>
                                    <div className='pera text-secondary ms-0 ms-lg-5 ms-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ex quis risus venenatis egestas nec eget nunc.</div>
                                </div>
                                <div className='my-3'>
                                    <div className='fstyle mb-1 fs-5 fw-semibold'><HiCheckCircle className='about_icon fs-1' /> Smart Science, Powerful Clean</div>
                                    <div className='pera text-secondary ms-0 ms-lg-5 ms-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ex quis risus venenatis egestas nec eget nunc.</div>
                                </div>
                                <div>
                                    <div className='fstyle mb-1 fs-5 fw-semibold'><HiCheckCircle className='about_icon fs-1' /> Made for You, Built for Performance</div>
                                    <div className='pera text-secondary ms-0 ms-lg-5 ms-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ex quis risus venenatis egestas nec eget nunc.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSec