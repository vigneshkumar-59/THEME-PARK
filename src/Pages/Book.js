import React from 'react'
import './Booking.css'
import { Link } from 'react-router-dom';
function Book() {
    return(
    <div className="Mytop">
                <p1>
                  Booking                                         
                </p1>          
        <div className="Our">
                   <p><span>Visit the theme park's official website, create an account if needed, enter required details, and make the payment.<br></br> Download or take screenshot of payment and grab your tickets on your visit.<br></br>On the scheduled day, arrive following any specified procedures.<br></br> Enjoy your visit!<br></br></span></p> 
                  <h5>ThankYou...!!!</h5>
                  <img
                   src="https://www.treebo.com/blog/wp-content/uploads/2018/05/Water-Parks-in-Bangalore.jpg"
                   alt="img"></img>
                   <br></br>
                  <Link to="/Cart">
                  <button>Book</button></Link>
                  <Link to="/Home1">
                  <button>Home</button></Link>
                </div>
            </div>
    );
}

export default Book;