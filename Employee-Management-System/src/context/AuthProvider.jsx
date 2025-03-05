import React, {useState, useEffect, createContext} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
 //localStorage.clear() 
 const [userData, setUserData] = useState(null)


 useEffect(() => {
  setLocalStorage()
   const {employees,admin} = getLocalStorage()
   setUserData({employees,admin})
 }, [])
 const updateUserData = (data) => {
    setUserData(data);
  };
 




  return (

    <div>
        <AuthContext.Provider value={{userData,setUserData: updateUserData}} >
            {children}
        </AuthContext.Provider>
    </div>  
  )
}

export default AuthProvider