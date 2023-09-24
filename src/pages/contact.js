import React from 'react'
import "./contact.css";
import Logo from "../assets/logo.png";
export default function contact() {
  return (
    <div>
        <div className='contact'>
            <img src={Logo} alt='logoImage'/>
            <div id='contact-us'>
                <h3>Contact Us</h3>
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            </div>

        </div>
    </div>
  )
}
