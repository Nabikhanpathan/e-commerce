import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'


const Register= () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate();
  
 
  const collectdata= async()=>{
    console.log(name,email,password);
    let result= await fetch("http://localhost:4000/register",{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'content-Type':'application/json'
      },
    });
    result=await result.json()
    console.log(result);
    sessionStorage.setItem("user",JSON.stringify(result))
    
  }
  
    return ( 
      <div>
        <h1>Register</h1>
        <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="name@example.com" onChange={(e)=>setemail(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
    </div>
    <button type="button" className="btn btn-primary" onClick={collectdata}>Sign up</button>
    
      </div>
  
  )
}

export default Register
