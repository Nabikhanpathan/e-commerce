import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  
    
      const auth=sessionStorage.getItem('user')
    return auth?<Outlet/>:<Navigate to='/signin'/>
  
}

export default Private
