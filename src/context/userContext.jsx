import React, { createContext, useState } from 'react'

export const userContext = createContext({});

const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})
    
    const logout = () =>{
        setUserData(null)
    }
    
    return (
        <div>
            <userContext.Provider value={{userData,setUserData,logout}}>
                {children}
            </userContext.Provider>
        </div>
    )
}

export default UserProvider