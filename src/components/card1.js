import React from 'react';
import "./cardstyle.css";
import Tomato from "../assets/tomato.png";

export default function card() {
  return (
    <div className='container'>
       <img id="card-img" src={Tomato} alt='grilled_tomato'/>
       <div className='content'>
           <h3>Grilled Tomato</h3>
           <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
       </div>
    </div>
    
    
  )
}
