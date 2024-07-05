import React, { useState } from 'react'
import './Reg.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Reg= () =>  {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmrpassword] = useState('');
   
  const handleReg = async (e)=>{
    e.preventDefault();

    try{
      await auth.createUserWithEmailAndPassword(email,password);
      alert("Successfully created go to login page");
      Navigate("/NewLog")
    }
    catch(error){
      console.log(error);
      alert("Please enter mailid and password");
    }
      
    };
  return (
    <div className="Reg">
      <br></br>
      <br></br>
      <p3>
        <u>CREATE LOGIN</u>
      </p3>
    <div className="NewUse">
    <form onSubmit={handleReg}>
      <br></br>
      <h1>Email ID</h1>
      <input type="email-id" placeholder="" value={email}onChange={(e)=>setemail(e.target.value)}/>
      <br></br>
      <h1>Password</h1>
      <input type="password"placeholder="" value={password}onChange={(e)=>setpassword(e.target.value)}/>
      <br></br>
      <h1>Confirm Password</h1>
      <input type="retype-password"placeholder=""value={confirmpassword}onChange={(e)=>setconfirmrpassword(e.target.value)}/>
      <br></br>
      <br></br>
      <button>Register</button>
      <br></br>
      <Link to="/NewLog"><button>Back</button></Link>
      <br></br>
      <br></br>
      <br></br>
    </form>
    </div>
    </div>
  );
}

export default Reg;
