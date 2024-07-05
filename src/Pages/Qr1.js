import React from 'react'
import './Payrs.css';
import img from './tp1.jpeg'
import { Link } from 'react-router-dom';
function Qr1 (){

  return (
    <div className="Payment1">
      <h1>Scan and Pay With Any UPI</h1>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <Link to="/Bill1"><btn>Printbill</btn></Link>
    </div>
  );
}

export default Qr1;
