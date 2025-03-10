import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Contact.css";
import ConatactForm from './ConatactForm'

function Contact() {
  return (
    <>
      <ConatactForm />
    </>
  )
}

export default HOC(Contact)