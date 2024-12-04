import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [UserData,SetUserData]=useState(null)
  setLocalStorage()
  useEffect(()=>{
    const {employees}=getLocalStorage()
    SetUserData(employees)
  },[])
  return (
    <div>
      <Authcontext.Provider value={[UserData,SetUserData]}>
      {children}
      </Authcontext.Provider>
    </div>
  )
}

export default AuthProvider
