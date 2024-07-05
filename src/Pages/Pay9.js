import React, { useState } from 'react'
import './Pay.css'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
function Pay9() 
{
  const [Name, setName] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [Visitingdate, setdate] = useState('');
  const [Visitingtime, settime] = useState('');
  const navigate = useNavigate();

  const handlesubmit = (e)=>{
    e.preventDefault();
    if(Name === "" || mobilenumber === "" || Visitingdate === "" || Visitingtime === "" ){
      alert("Please fill the details");
      
    }
    else
    {
      db.ref("data").child("Name,mobilenumber,date,time").push({Name:Name,mobilenumber:mobilenumber,Visitingdate:Visitingdate,Visitingtime:Visitingtime  }).then(()=>{
        navigate("/Qr9");
      }).catch((error)=>{
        console.log(error);
      })
    }

  }
  return (
    <div className="pay">
      <br></br>
             <br></br>               
              <br></br>
              <br></br>
              <br></br>
            
              <br></br><h2><i>PAYMENT</i></h2>
              <br></br>
              <img src="https://images.indianexpress.com/2022/07/bhim-upi-npci.jpg" alt="img" ></img>
              <img src="https://www.india.com/wp-content/uploads/2022/05/paytm_ipo.jpg" alt="img" ></img>
              <br></br>
              <br></br>           
             <input type="text" placeholder="Your Name"value={Name}onChange={(e)=>setName(e.target.value)}/>
             <br></br>              
             <br></br>           
             <input type="text" placeholder="Mobile No."value={mobilenumber}onChange={(e)=>setmobilenumber(e.target.value)} /><br></br><br></br>
             <input type="date" placeholder=" "value={Visitingdate}onChange={(e)=>setdate(e.target.value)}/><br></br><br></br>
             <input type="time" placeholder=" " value={Visitingtime}onChange={(e)=>settime(e.target.value)}/>
             <br></br>              
             <br></br> 
              <p1>TotalAmount : 8100.00</p1>
             <br></br>
             <br></br>               
              <button onClick={handlesubmit}>
              Ok</button>      <Link to="/Cart"><button>Cart</button></Link> <Link to="/Home1"><button>Back</button></Link>    
              <br></br>
             <br></br>               
              <br></br>
              <br></br>
              <br></br>
             <br></br>               
              <br></br>
              <br></br>
              <br></br>
             <br></br>               
              <br></br>
              <br></br>
              </div>
              
    );
}

export default Pay9;



