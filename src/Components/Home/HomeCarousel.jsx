import React from 'react'
import '../../Assets/css/HomeCarousel.css'
import Titlecom from '../HOC/Titlecom'
function HomeCarousel() {
    return (
        <>
            <div className="carobgimg overflow-hidden fstyle">
                <div className='container-lg'>
                    <div className='row py-5 pt-5'>
                        <div className='col-md-6 lh-lg mx-auto py-5 my-5 col-11 text-light animate__animated animate__bounceInLeft animate__slower d-flex  align-items-center'>
                            <div className=''>
                                <h4>Welcome to Washstrip</h4>
                                <h1 className='display-3 fw-bold animate__animated'>New To Kind Laundry? Start Here</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                    luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <Titlecom ftitle={"Discover More"} />
                            </div>
                        </div>
                        <div className='col-md-6 col-11 mx-auto animate__animated animate__bounceInRight animate__slower ' style={{ marginTop: 'auto' }}>
                            <img src={require('../../Assets/images/extracaro.png')} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row justify-content-center text-center shadow-lg'
                    style={{ marginTop: '-50px',zIndex:200 }} 
                >
                    
                    <div class="col-md-4 feature-box">
                        <div class="feature-icon">💰</div>
                        <h5><strong>Save Time & Money</strong></h5>
                        <p>Lorem ipsum dolor sit amet pisicing elit sed do ut.</p>
                    </div>
                    <div class="col-md-4 feature-box">  
                        <div class="feature-icon">📱</div>
                        <h5><strong>Pay Online in Seconds</strong></h5>
                        <p>Lorem ipsum dolor sit amet pisicing elit sed do ut.</p>
                    </div>
                    <div class="col-md-4 feature-box">
                        <div class="feature-icon">⭐</div>
                        <h5><strong>Satisfaction Guarantee</strong></h5>
                        <p>Lorem ipsum dolor sit amet pisicing elit sed do ut.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCarousel