import React from 'react'
import HOC from '../HOC/Hoc'
import Show from './Show'
import '../../Assets/css/Product.css';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Lendingsec from '../Lendingsec';

function Product() {
    return (
        <div>
            {/* <img src={require('../../Assets/images/product_bg_image.jpg')} alt="" className='img-fluid' /> */}
            <Lendingsec Page={'Product'} />
            <Show />
        </div>
    )
}

export default HOC(Product)