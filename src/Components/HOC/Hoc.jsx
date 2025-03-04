import React from 'react'
import Footer from './Footer'
import Header from './Header'

function HOC(Content) {

    function hoccomponent() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }
    return hoccomponent
}


export default HOC