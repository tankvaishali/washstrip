import React from 'react'
import Titlecom from '../HOC/Titlecom'
import { FaPills } from 'react-icons/fa'

function Faq() {
    return (
        <>
            <div className='container my-5'>
                <div className='row d-flex align-items-center align-content-center'>
                    <div className='col-12 col-lg-6 p-4'>
                        <div className="h-100">
                            <div>
                                <img src={require("../../Assets/images/final iamge.png")} className='img-fluid w-100 h-100 object-fit-cover' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 p-4'>
                        <div className="h-100">
                            <div>
                                <Titlecom ftitle={"FAQs"} title={"Your Laundry Queries, Answered!"} />
                                <div className='pera text-secondary mt-3 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                            </div>
                            <div
                                class="accordion accordion-flush mt-1"
                                id="accordionFlushExample"
                            >
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header my-2">
                                        <button
                                            class="accordion-button addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            <span className='fs-6 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</span>
                                        </button>
                                        <div
                                            id="flush-collapseOne"
                                            class="accordion-collapse collapse show"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div class="accordion-body pera text-secondary">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ea nihil ducimus perspiciatis doloremque veniam nam ullam quaerat explicabo veritatis!
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header my-2">
                                        <button
                                            class="accordion-button collapsed addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            <span className='fs-6 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, similique quis?</span>
                                        </button>
                                        <div
                                            id="flush-collapseTwo"
                                            class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div class="accordion-body pera text-secondary">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis assumenda iste, voluptas obcaecati aut suscipit aliquam incidunt perspiciatis laborum officia, quasi natus. magnam omnis quod laudantium ratione ab facere.
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header my-2">
                                        <button
                                            class="accordion-button collapsed addicon text-white p-3"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            <span className='fs-6 pe-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non?</span>
                                        </button>
                                        <div
                                            id="flush-collapseThree"
                                            class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample"
                                        >
                                            <div class="accordion-body pera text-secondary">
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