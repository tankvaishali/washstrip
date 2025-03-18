import React from 'react'
import '../../Assets/css/HomeCarousel.css'
import Titlecom from '../HOC/Titlecom'
import { Link } from 'react-router-dom'
function HomeCarousel() {
    return (
        <>
            <div className="carobgimg overflow-hidden fstyle w-100">
                <div className='container-lg'>
                    <div className='row align-items-center py-sm-5 py-0 pt-5'>
                        <div className='col-md-6 lh-lg mx-auto pt-5 mt-5 col-11 text-light animate__animated animate__bounceInLeft animate__slower d-flex  align-items-center'>
                            <div className=''>
                                <h4>Welcome to WASHSTRIP</h4>
                                <h1 className='display-4 fw-bold animate__animated'>New To start Laundry with WASHSTRIP  ? Start Here</h1>
                                <p> Revolutionizing clean with zero waste, high-performance detergent sheets. Eco-friendly cleaning, made simple and sustainable</p>
                                <Link to={"/product"} className='   text-decoration-none'>
                                    <Titlecom ftitle={"Discover More"} />
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 col-11 mx-auto animate__animated animate__bounceInRight animate__slower ' style={{ marginTop: 'auto' }}>
                            <img src={require('../../Assets/images/extracaro.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='row justify-content-center text-center overflow-hidden '
                    style={{ marginTop: '-50px', zIndex: 200 }}
                >                   
                    <div class="col-md-4 feature-box shadow-lg" data-aos="flip-left" data-aos-duration="1500" data-aos-once="true">
                        <div class="feature-icon" style={{width:100,height:100}}><img src="https://cdn-icons-png.flaticon.com/512/6405/6405050.png" alt="" className='img-fluid w-100 h-100 object-fit-contain' /></div>
                        <h5 className='fstyle'><strong>Save Time & Money</strong></h5>
                        <p className='pera fw-medium'>WASHSTRIP Detergent Sheets make laundry effortless.</p>
                    </div>
                    <div class="col-md-4 feature-box shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">  
                        <div class="feature-icon" style={{width:100,height:100}}><img src="https://cdn-icons-png.flaticon.com/512/5008/5008990.png" alt="" className='img-fluid w-100 h-100 object-fit-contain'/></div>
                        <h5 className='fstyle'><strong> Eco Friendly</strong></h5>
                        <p className='pera fw-medium'>Say goodbye to plastic waste with WASHSTRIP Detergent Sheets.</p>
                    </div>
                    <div class="col-md-4 feature-box shadow-lg" data-aos="flip-right" data-aos-duration="1500" data-aos-once="true">
                        <div class="feature-icon" style={{width:120,height:120}}><img src="https://cdn-icons-png.flaticon.com/512/9097/9097292.png" alt="" className='img-fluid w-100 h-100 object-fit-contain'/></div>
                        <h5 className='fstyle'><strong>Satisfaction Guarantee</strong></h5>
                        <p className='pera fw-medium'>Your sustainable, powerful, and hassle-free laundry solution.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCarousel