import React from 'react';
import './discover.css';
import Logo from "../assets/logo.png";
import Pizza from "../assets/pizzaimg.png";
// import Vector from "../assets/Vector 1.png";

export default function discover() {
  return (
    <div className='first'>
        <div className='content-aside'>
           <img id='logo' src={Logo} alt='logo'/>
            <div id='heading'>
              <h5>Discover the 
<span className='red-font'> Best </span>Food and Drinks</h5>
            </div>
            <div id='paratag'>
              <p>Naturally made Healthcare Products for the better care & support of your body.</p>
            </div>
            <button id='explore-button'>Explore Now!</button>
        </div>
        <div className='pizza-img'>
          <img id='first-img' src={Pizza} alt='pizzaImg'/>
          {/* <img  id='second-img' src={Vector} alt="vector img"/> */}
           
        </div>
    </div>
  )
}
