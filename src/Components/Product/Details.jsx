import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Productdata";
import { FaChevronLeft, FaChevronRight, FaUser, FaUserAlt } from "react-icons/fa"; // Import arrow icons
import HOC from "../HOC/Hoc";
import ButtonCom from "../HOC/ButtonCom";
import { BiEnvelope } from "react-icons/bi";
import { BsChatLeftText, BsChatLeftTextFill, BsFillEnvelopeFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Lendingsec from "../Lendingsec";

const ProductDetails = () => {
    const { id } = useParams();
    const product = Data.find((item) => item.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) {
        return <div className="text-center mt-4">Product not found</div>;
    }

    const images = [product.img, ...product.images]; // Main image + additional images

    // Next Image
    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    // Previous Image
    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <>
            <Lendingsec Page={product.title} />
            <div className="container mt-5 fstyle">

                <div className="row align-items-center">
                    {/* Image Slider Section */}
                    <div className="col-md-6 text-center position-relative">
                        {/* Left Arrow */}
                        {currentImageIndex > 0 && (
                            <button
                                className="position-absolute top-50 start-0 translate-middle-y btn btn-dark rounded-circle p-2"
                                onClick={prevImage}
                                style={{ zIndex: 10 }}
                            >
                                <FaChevronLeft size={24} />
                            </button>
                        )}

                        {/* Main Image - Fully Responsive */}
                        <div
                            className="d-flex align-items-center justify-content-center mx-auto"
                            style={{
                                width: "90%", // Responsive width
                                maxWidth: "400px", // Max size for large screens
                                height: "auto",
                                minHeight: "300px", // Ensures min height for small screens
                                overflow: "hidden",
                            }}
                        >
                            <img
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className="unique-box-shadow img-fluid"
                                src={images[currentImageIndex]}
                                alt="Product"
                                style={{
                                    maxWidth: "100%", // Ensures responsiveness
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        {/* Right Arrow */}
                        {currentImageIndex < images.length - 1 && (
                            <button
                                className="position-absolute top-50 end-0 translate-middle-y btn btn-dark rounded-circle p-2"
                                onClick={nextImage}
                                style={{ zIndex: 10 }}
                            >
                                <FaChevronRight size={24} />
                            </button>
                        )}

                        {/* Thumbnail Images */}
                        <div className="col-12 mt-3">
                            {images.map((subImage, index) => (
                                <div className="d-inline m-2" key={index}>
                                    <img
                                        src={subImage}
                                        alt={`SubImage ${index + 1}`}
                                        className={`img-fluid my-2 ${currentImageIndex === index ? 'border border-primary' : ''}`}
                                        style={{ width: "60px", height: "60px", cursor: "pointer" }}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications Section */}
                    <div className="col-md-6 p-4 rounded shadow-sm" >
                        <h2 className="fw-bold mb-3">{product.title}</h2>
                        <p className="text-muted">{product.description}</p>
                        <div>
                            <p className="mt-3 h6" style={{ color: 'var(--teal)' }}>Rs. {product.price}</p>
                            <h4 className="p-3 m-0" style={{ background: 'var(--teal' }}>Specifications</h4>
                            <table className="table table-success table-striped table-bordered">
                                <thead>
                                    <tr></tr>
                                </thead>
                                <tbody>
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="text-capitalized" style={{ border: '2px solid var(--teal)' }}>
                                                <strong>{key.replace(/_/g, " ")} </strong>
                                            </td>
                                            <td className="text-capitalized" style={{ border: '2px solid var(--teal)' }}>
                                                {value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>✨💭Your Suggestions Matter!</p>
                        <div className="d-flex">
                            <div className="getquots mx-1">
                                <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <ButtonCom btn="Get Quote 📩" />
                                </div>
                            </div>
                        </div>
                        {/* modal */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body modalbg">
                                        <form className="px-4 pt-4">
                                            <div class="row mb-4" >
                                                <div class="col-sm-6 col-12 mb-sm-0 mb-4">
                                                    <div class="input-group p-2  bg-opacity-50" style={{ boxShadow: '5px 5px 10px var(--teal)', backgroundColor: "rgb(223 239 239 / 68%)", }}>
                                                        <span class="input-group-text text-dark bg-transparent border-0">
                                                            <FaUserAlt />
                                                        </span>
                                                        <input type="text" class="form-control border-0 bg-transparent" placeholder="First_Name" />
                                                    </div>
                                                </div>
                                                <div class="col-sm-6 col-12">
                                                    <div class="input-group p-2  bg-opacity-50" style={{ boxShadow: '5px 5px 10px var(--teal)', backgroundColor: "rgb(223 239 239 / 68%)", }}>
                                                        <span class="input-group-text text-dark bg-transparent border-0">
                                                            <FaUserAlt />
                                                        </span>
                                                        <input type="text" class="form-control border-0 bg-transparent" placeholder="Last_Name" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="input-group p-2  bg-opacity-50" style={{ boxShadow: '5px 5px 10px var(--teal)', backgroundColor: "rgb(223 239 239 / 68%)", }}>
                                                <span class="input-group-text text-dark bg-transparent border-0">
                                                    <MdEmail />
                                                </span>
                                                <input type="email" class="form-control border-0 bg-transparent" placeholder="E-mail" />
                                            </div>
                                            <div class="position-relative my-4" >
                                                <span class="position-absolute top-0 start-0 translate-middle-y ms-3 mt-3 pt-1 text-dark">
                                                    <BsChatLeftTextFill />
                                                </span>
                                                <textarea class="form-control ps-5 rounded-0  bg-opacity-50" rows="3" placeholder="Your Message" style={{ boxShadow: '5px 5px 10px var(--teal)', backgroundColor: "rgb(223 239 239 / 68%)" }}></textarea>
                                            </div>
                                            <div className="text-center btndetail">
                                                <ButtonCom btn="Get Quote" />
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </>
    );
};

export default HOC(ProductDetails);
