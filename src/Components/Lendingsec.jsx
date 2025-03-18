import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Lendingsec({ Page }) {
    return (
        <section className="spikes fstyle">
            <div className="breadcrumb-container">
                <Link to="/" className='h3 fw-normal'>Home</Link>
                <MdKeyboardDoubleArrowRight className='ms-2 h4' />
                {/* <MdKeyboardDoubleArrowRight className='me-2 h4' /> */}
                <Link className='h3 fw-normal' style={{ cursor: "context-menu" }}>{Page}</Link>
            </div>
        </section>
    )
}

export default Lendingsec