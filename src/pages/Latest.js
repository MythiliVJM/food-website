import React from 'react';
import "./latest.css";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Card3 from "../components/card3";
export default function Latest() {
  return (
    <div className='main-section'>
        <div className='heading'>
            <h3>Latest Articles</h3>
        </div>
        <div className='card-list'>
             <Card1></Card1>
             <Card2></Card2>
             <Card3></Card3>
        </div>

    </div>
  )
}
