import "./cardstyle.css";
import Salad from "../assets/salad.png";
export default function card() {
    return (
      <div className='container'>
         <img id ="card-img" src={Salad} alt='grilled_tomato'/>
         <div className='content'>
             <h3>Snacks for Traval</h3>
             <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
         </div>
      </div>
      
      
    )
  }