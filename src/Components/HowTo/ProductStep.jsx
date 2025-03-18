import React from 'react';

const products = [
    {
        title: "Small Load – ½ Sheet",
        image: "https://assets.norwex.com/catalog_service/system/images/style/ipad_large_1x/e58e5f4bf8888c5488d1d8e8adcf3b73a306faf7.jpg?1698882660",
        content: "For lightly soiled clothes or small loads, use ½ sheet for effective cleaning. It dissolves quickly and works efficiently to remove dirt and odors. Perfect for delicate fabrics and everyday wear. The gentle formula ensures a fresh and long-lasting scent while being tough on stains. Ideal for quick refreshes and preserving fabric softness.",
        aos: "fade-down"
    },
    {
        title: "Regular Load – 1 Sheet",
        image: "https://i.ebayimg.com/images/g/OusAAOSwMf9iTScj/s-l1200.webp",
        content: "Perfect for your daily laundry! 1 sheet is designed to tackle regular loads, ensuring a deep clean while keeping your clothes fresh and soft. Removes everyday stains while maintaining cleanliness and freshness.",
        aos: "zoom-in"
    },
    {
        title: "Large / Heavily Soiled Load – 2 Sheets",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBtJGN8eVfNzq172qgySP3mfKm61DyvVQbLyCJJyuyhFbiP2oyTWazq6h6wsbowQhwwM&usqp=CAU",
        content: "For heavily soiled clothes, large loads, or tough stains, use 2 sheets. It provides extra cleaning power, breaking down stubborn stains and eliminating odors effortlessly. Best for bedding, towels, and heavily used garments.",
        aos: "fade-up"
    }
];

function ProductStep() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='mt-5'>
                    <h2 className='fstyle text-center pb-4 pt-1' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Use the Right Sheet Every Time</h2>
                </div>
                {products.map((product, index) => (
                    <div key={index} className='col-11 col-lg-10 mx-auto mb-4 main_product rounded-4' data-aos={product.aos} data-aos-duration="1500" data-aos-once="true">
                        <div className='h-100'>
                            <div className='d-lg-flex justify-content-center gap-3 px-2 py-4 px-lg-3'>
                                <div className='image_wrapper_prodctStrip rounded-4' style={{ border: "5px solid var(--teal)" }}>
                                    <img
                                        src={product.image}
                                        className='w-100 object-fit-cover product_image rounded-3'
                                        style={{ height: "200px" }}
                                        alt={product.title}
                                    />
                                </div>
                                <div className='content_prodctStrip'>
                                    <div className="ProductStrip_tittle mt-3 mt-lg-0 fs-4 text-white p-2 mx-auto tealcolor fw-bold fstyle fs-6 text-center">
                                        {product.title}
                                    </div>
                                    <div className='pera mt-3 text-secondary' style={{ wordBreak: "break-all" }}>
                                        {product.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductStep;