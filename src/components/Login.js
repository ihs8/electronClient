import { useState } from 'react';
import axios from 'axios';
import "./login.css";
import pic from "../logo.png";
import { FaRegEyeSlash,FaLock,FaEnvelope } from "react-icons/fa";

function Login(){
const [email,setEmail] = useState("");
const [pass,setpass] = useState("");

const myFunction=(pass)=> {
        
        if (pass.type === "password") {
          pass.type = "text";
        } else {
          pass.type = "password";
        }
      }

const loginReq = () => {
     axios.post('http://localhost:5010/login',{
            email:email,
            password:pass
    
        });
        
      }




    return(






<div class="screen-1">
  <div style={{textAlign:'center'}}>
  
    <img src={pic} alt='img'></img>
  </div>
    <div class="email">
      <label for="email">Email Address</label>
      <div class="sec-2">
      <FaEnvelope className='env' />
        <input type="email" name="email" placeholder="Username@gmail.com" onChange={(event)=> {
      setEmail(event.target.value);
    }}/>
      </div>
    </div>
    <div class="password">
      <label for="password">Password</label>
      <div class="sec-2">
        <FaLock className='lock'/>
        <input class="pas" id ="myInput" type="password" name="password" placeholder="············" onChange={(event)=> {
      setpass(event.target.value);
    }}/>
    <FaRegEyeSlash  class="show-hide" onclick={myFunction(setpass)}/>
      </div>
    </div>
    <button type="submit" class="login" onClick={loginReq}>Login </button>
    <div class="footer"><span>Signup</span><span>Forgot Password?</span></div>
  </div>
    )
}
export default Login;
