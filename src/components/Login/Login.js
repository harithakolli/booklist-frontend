import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {


const navigate =useNavigate();

const postData = async () =>{
    
    const userInfo={
        username : username,
        password: password
    }
    const resp = await axios.post('https://book-list-server.onrender.com/login',userInfo)
    console.log(resp);
    localStorage.setItem('AUTH_TOKEN', resp.data.token);
    navigate('/books')

}

       
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
function handlelogin()
{
    postData();
   
}

   
  return (
    <div>
        <div className='member-login'>
            <img src={'./user-4250.svg' } className="avtar">        
            </img>

            <h4>Member Login</h4>
            <div style={{display: 'block'}}>
            <input type={'text'} placeholder={'Username'} value={username} onChange={(e)=>
            setUserName(e.target.value)}></input>
          
            </div>
            <div style={{display: 'block'}}>
           
             <input type={'password'} placeholder={'password'} value={password} onChange={(e)=>
            setPassword(e.target.value)}></input>
            </div>

            <div style={{display: 'block'}}>
           
             <button type={'Submit'} onClick={handlelogin}>Login</button>
            </div>
        
          
            
            </div> 
      
      
    </div>
  )
}

export default Login