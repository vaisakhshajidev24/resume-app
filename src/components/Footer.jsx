import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div>
      <div style={{backgroundColor:"purple"}} className=" text-center text-light p-5">
        <h4>Contact Us</h4>
        <h6 className="mt-4">
          <MdEmail className="fs-4" />
          meresume@gmail.com
        </h6>
        <h6>
          <IoPhonePortraitOutline className="fs-4" />
          7736508084
        </h6>
        <br />
        <h5>Connect with us</h5>
        <div className="d-flex justify-content-center align-items-center">
          <FaWhatsapp className="fs-4 me-3" />
          <FaInstagram className="fs-4 me-3" />
          <FaLinkedin className="fs-4 me-3" />
        </div>
        <p className='mt-3'><i>Designed and build with react</i></p>
      </div>
    </div>
  );
}

export default Footer
