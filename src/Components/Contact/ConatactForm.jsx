import React from 'react'
import ButtonCom from '../HOC/ButtonCom';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FaMobile } from 'react-icons/fa';

function ConatactForm() {
    return (
        <>
            <div className='container mb-5' style={{ marginTop: "120px" }}>
                <div className='row'>
                    <div className='col-12 col-lg-7 mb-4'>
                        <div className="h-100">
                            <div className='shadow p-4 rounded-3'>
                                <div>
                                    <h2 className='fstyle'>Get In Touch With Us</h2>
                                    <div className='text-secondary pera my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quidem autem sint dolore ab nulla aperiam voluptate doloribus dolor atque aliquam modi perferendis deleniti cum!</div>
                                </div>
                                <div>
                                    <div className='w-100 d-lg-flex d-md-flex gap-3'>
                                        <div className='w-100 w-lg-50 w-md-50 mt-2'>
                                            <label htmlFor="" className='d-block fstyle'>Name</label>
                                            <input type="text" name="Name" id="" placeholder='Name' className='input_Form pera rounded p-2 w-100 mt-1 fstyle text-secondary' />
                                        </div>
                                        <div className='w-100 w-lg-50 w-md-50 mt-2'>
                                            <label htmlFor="" className='d-block fstyle'>Phone No.</label>
                                            <input type="number" name="Phone" id="" placeholder='Phone No.' className='input_Form pera rounded p-2 w-100 mt-1 fstyle text-secondary' />
                                        </div>
                                    </div>
                                    <div className='w-100 d-lg-flex d-md-flex gap-3'>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="" className='d-block fstyle'> E-mail</label>
                                            <input type="text" name="E-mail" id="" placeholder='E-mail' className='input_Form pera rounded p-2 w-100 mt-1 fstyle text-secondary' />
                                        </div>
                                        <div className='w-100 w-lg-50 w-md-50 my-2'>
                                            <label htmlFor="" className='d-block fstyle'>Subject</label>
                                            <input type="text" name="Subject" id="" placeholder='Subject' className='input_Form pera rounded p-2 w-100 mt-1 fstyle text-secondary' />
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <label htmlFor="" className='d-block fstyle'>Message</label>
                                        <textarea name="Message" id="" rows={6} placeholder='Message' className='input_Form pera rounded p-2 w-100 mt-1 fstyle text-secondary'></textarea>
                                    </div>
                                    <div className='w-100 mt-3'>
                                        <ButtonCom btn="Send Message" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-5 mb-4'>
                        <div className="h-100">
                            <div className='Conatct_Link-Img p-4 rounded-3 align-items-center align-content-center'>
                                <div className='my-3'>
                                    <div className='rounded' style={{ border: "3px solid whitesmoke", width: "70px" }}></div>
                                </div>
                                <div>
                                    <h2 className='fstyle text-white'>Contact Info</h2>
                                    <div className='text-white pera my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repellendus culpa velit? Quod odio, rem veritatis eum dolor recusandae laudantium, vero sint dolore nobis sequi.</div>
                                </div>
                                <div className='w-100'>
                                    <div style={{ border: "1px dashed whitesmoke" }}></div>
                                </div>
                                <div>
                                    <div className='con_mainMenu text-white my-3'>
                                        <div className='fstyle fs-3 fw-semibold mb-1'><FaLocationDot className='Contact_icon' /> Address</div>
                                        <Link to={""} className='Conatct_menu pera text-decoration-none text-white'><div style={{ marginLeft: "31px" }}>Plot No. 1, Shop No. 5, Ground Floor, Shaktinagar Co. Op. Housing Society, Near Kantareswar Mahadev Temple Katargam, Surat – 395004, Gujarat.</div></Link>
                                    </div>
                                    <div className='con_mainMenu text-white'>
                                        <div className='fstyle fs-3 fw-semibold mb-1'><FaMobile className='Contact_icon' /> Phone No.</div>
                                        <Link to={""} className='Conatct_menu pera text-decoration-none text-white'><div style={{ marginLeft: "31px" }}>(+91) 12345 67890</div></Link>
                                    </div>
                                    <div className='con_mainMenu text-white my-3'>
                                        <div className='fstyle fs-3 fw-semibold mb-1'><IoMail className='Contact_icon' /> E-mail</div>
                                        <Link to={""} className='Conatct_menu pera text-decoration-none text-white'><div style={{ marginLeft: "31px" }}>abc123@gmail.com</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className='container'>
                <div className='mb-5 pb-4'>
                    <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
                </div>
            </div>
        </>
    )
}

export default ConatactForm