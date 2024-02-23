import React from 'react'
import { UserContext } from '../context/userContext/UserProvider'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({role}) {
    const {decode} = useContext(UserContext)
  return (
    role.includes(decode?.role) ? <Outlet/> : <Navigate to={"/"}></Navigate> 
  )
}

export default PrivateRoute