import { jwtDecode } from 'jwt-decode'
import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage'

export const UserContext = createContext()

function UserProvider({children}) {
    const [token, setToken] = useLocalStorage("token",null)
    const [decode, setDecode] = useLocalStorage("decode",null)
    

    function addToken(token) {
        setToken(token)
        const token_decoded = jwtDecode(token);
        console.log(token)
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