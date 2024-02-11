import { jwtDecode } from 'jwt-decode'
import React, { createContext } from 'react'
import { useState } from 'react'

export const UserContext = createContext()

function UserProvider({children}) {
    const [token, setToken] = useState(null)
    const [decode, setDecode] = useState(null)

    function addToken(token) {
        setToken(token)
        console.log(token)
        const token_decoded = jwtDecode(token);
        console.log(token_decoded)
        setDecode(token_decoded)
    }
    
    function logOut() {
        setToken(null)
        setDecode(null)
    }

    const data = {
        addToken,token, setToken,decode, setDecode,logOut
    }
    
  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider