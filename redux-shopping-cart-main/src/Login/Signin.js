import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';


const Signin = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate();
  useEffect(()=>{
    const auth=sessionStorage.getItem('user')
    if(auth){
      navigate("/")
    }
  },[])
  const login= async()=>{
    let result=await fetch('http://localhost:4000/login',{
      method:'post',
      body:JSON.stringify({ email,password}),
      headers:{
        'content-Type':'application/json'
      }
    })
    result=await result.json();
    console.log(result)
    if(result.name){
      sessionStorage.setItem('user',JSON.stringify(result))
      navigate('/')
    }
    else{
      alert("please enter connect details")
     
    }
  
  }
    return (
      <div>
      
        <div className='login'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
              <h1>Signin</h1>
              <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="name@example.com" onChange={(e)=>setemail(e.target.value)} value={email}/>
             </div>
             <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
  
               </div>
               <button type="button" className="btn btn-primary" onClick={login}>Sign up</button>
                <Link to="/Register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default Signin
