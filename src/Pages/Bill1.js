import React from 'react'
import './Billing.css'
import { Link } from 'react-router-dom';
function Bill1() 
{
  return (
    <div className="Bill">
        <h1>InVoice</h1><br></br>
        <h2>DisneyLand Themepark Private Limited...</h2>
        <br></br>
        <br></br>
        <p>Amount : 750<br></br>              
              GST+CGST(28%) : 150<br></br>               
            -------------------<br></br>
             TotalAmount : 900<br></br>
             -------------------<br></br>
             Have A Safe and Enjoyable Moments!!<br></br>
             With DL Themepark PVT.LTD...<br></br>
             Thank You!!!</p><br></br>
            <img src="https://www.breakaway.ie/wp-content/uploads/2020/07/disneyland-park-logo.png" alt="img" ></img>
            <br></br>
            <br></br> 
            <Link to="/Home1"><button>Ok</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
    );
}

export default Bill1;



  