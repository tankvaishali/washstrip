import React from 'react'
import HOC from '../HOC/Hoc'
import Show from './Show'
import '../../Assets/css/Product.css';

function Product() {
    return (
        <div>
            <img src={require('../../Assets/images/product_bg_image.jpg')} alt="" className='img-fluid' />
            <Show />
        </div>
    )
}

export default HOC(Product)