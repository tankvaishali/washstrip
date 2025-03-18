import React from 'react'
import Titlecom from '../HOC/Titlecom'
import { FaPlayCircle } from 'react-icons/fa'
import { HiLightBulb } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MdDiamond } from 'react-icons/md';

function MissionVision() {
    return (
        <>
            <div className='vision_mision_bg mb-5'>
                <div className='container'>
                    <div className='row main_vi_mi'>
                        <div className='col-12 col-lg-6 col-md-6 mb-5'>
                            <div className='text-white'>
                                <Titlecom ftitle={"Our Value"} title="We Make Your Clothes Shine Like A Diamond." />
                                <div className='pear text-white pt-2'>WashStrip provides a modern laundry solution that makes your clothes brighter and cleaner. Our unique washing technology and eco-friendly enzyme formula keep your clothes fresh and long-lasting.</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6 mb-5 d-flex align-items-center justify-content-center'>
                            <div className='text-center'>
                                <Link to={"https://www.youtube.com/shorts/QVaFJC20Ggo"} target='_blank' className='text-white display-3'>
                                    <FaPlayCircle className='play_Circle_icon' />
                                </Link>
                                <div className='text-white mt-3'>PLAY VIDEO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='container'>
                    <div className='row mainViMiSec overflow-hidden'>
                        <div className='col-12 col-lg-6 col-md-6' data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                            <div className='Main_ViMi_box shadow bg-white rounded-3 py-4 px-5 mb-4'>
                                <div className='Vi_Mi-shadow'><HiLightBulb className='vision_mission_icon p-1' /></div>
                                <div className='Vi-Mi_Tittle fstyle mt-4 mb-2 fs-4 fw-bold'>Our Vision</div>
                                <div className='text-secondary pera' style={{ wordBreak: "break-all" }}>Through WashStrip, we are committed to making the laundry process simpler, more effective, and environmentally safe. Our goal is to use the latest technology for a greener and more sustainable future.</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
                            <div className='Main_ViMi_box shadow bg-white rounded-3 py-4 px-5  mb-4'>
                                <div className='Vi_Mi-shadow'><MdDiamond className='vision_mission_icon p-1' /></div>
                                <div className='Vi-Mi_Tittle fstyle mt-4 mb-2 fs-4 fw-bold'>Our Mission</div>
                                <div className='text-secondary pera' style={{ wordBreak: "break-all" }}>Our mission is to provide people with a lightweight, easy, and effective washing method. With WashStrip, we ensure water conservation, a reduced carbon footprint, and the best washing quality.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVision