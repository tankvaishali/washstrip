import React from 'react'
import Titlecom from '../HOC/Titlecom'
import { FaPlayCircle } from 'react-icons/fa'
import { HiLightBulb } from "react-icons/hi";
import { IoDiamondSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function MissionVision() {
    return (
        <>
            <div className='vision_mision_bg mb-5'>
                <div className='container'>
                    <div className='row main_vi_mi'>
                        <div className='col-12 col-lg-6 col-md-6 mb-5'>
                            <div>
                                <Titlecom ftitle={"Our Value"} />
                                <h2 className='text-white fw-bold fstyle'>We Make Your Clothes Shine Like A Diamond.</h2>
                                <div className='pear text-white pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
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
                    <div className='row mainViMiSec'>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <div className='shadow bg-white rounded-3 pt-1 pb-4 px-4 mb-4'>
                                <div className='vision_mission_icon fs-1'><HiLightBulb /></div>
                                <div className='fstyle my-1 fs-4'>Vision</div>
                                <div className='text-secondary pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <div className='shadow bg-white rounded-3 pt-1 pb-4 px-4 mb-4'>
                                <div className='vision_mission_icon fs-1'><IoDiamondSharp /></div>
                                <div className='fstyle my-1 fs-4'>Mission</div>
                                <div className='text-secondary pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVision