import React from 'react';
import "./about.css";
import About from "../assets/about.png";

export default function about() {
  return (
    <div className='about'>
         <div className='image-section'>
             <img src={About} alt='about-image'/>
         </div>
         <div className='content-section'>
            <div className='heading'>
            <h3>About Us</h3>
            </div>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            </div>
            
            <button>Read More</button>
         </div>
    </div>
  )
}
