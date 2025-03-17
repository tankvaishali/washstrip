import React from 'react'
import HOC from '../HOC/Hoc'
import "../../Assets/css/Contact.css";
import ConatactForm from './ConatactForm'
import Lendingsec from '../Lendingsec';

function Contact() {
  return (
    <>
      <Lendingsec Page={'Contact'} />
      <ConatactForm />
    </>
  )
}

export default HOC(Contact)