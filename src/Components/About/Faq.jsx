import React from 'react'
import Titlecom from '../HOC/Titlecom'

function Faq() {
    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-center align-content-center align-items-end'>
                    <div className='col-12 col-lg-6 order-2 order-lg-1'>
                        <div className="h-100">
                            <div>
                                <img src={require("../../Assets/images/final iamge.png")} className='img-fluid w-100 h-100 object-fit-cover' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-4 p-4 order-1 order-lg-2'>
                        <div className="h-100">
                            <div>
                                <Titlecom ftitle={"FAQs"} title={"Your Laundry Queries, Answered!"} />
                                <div className='pera text-secondary mt-3 mb-4'>Washing your clothes with WashStrip is easy, safe, and eco-friendly. Here, you’ll find simple answers to your questions!</div>
                            </div>
                            <div
                                className="accordion accordion-flush mt-1"
                                id="accordionFlushExample"
                            >
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header my-2">
                                        <button
                                            className="accordion-button addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            <span className='fs-6 pe-3'>What is WashStrip?</span>
                                        </button>
                                        <div
                                            id="flush-collapseOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body pera text-secondary">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ea nihil ducimus perspiciatis doloremque veniam nam ullam quaerat explicabo veritatis!
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header my-2">
                                        <button
                                            className="accordion-button collapsed addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            <span className='fs-6 pe-3'>Are these strips better than regular detergent?</span>
                                        </button>
                                        <div
                                            id="flush-collapseTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body pera text-secondary">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis assumenda iste, voluptas obcaecati aut suscipit aliquam incidunt perspiciatis laborum officia, quasi natus. magnam omnis quod laudantium ratione ab facere.
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header my-2">
                                        <button
                                            className="accordion-button collapsed addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            <span className='fs-6 pe-3'>How is WashStrip sustainable?</span>
                                        </button>
                                        <div
                                            id="flush-collapseThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div className="accordion-body pera text-secondary">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. corporis id aspernatur doloribus ratione aperiam? maxime consequuntur labore a animi accusantium aperiam amet corrupti mollitia natus.
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq