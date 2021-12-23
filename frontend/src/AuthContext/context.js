
import React, { createContext,  useEffect, useState } from 'react'


export const myContext = createContext({})
export default function Context(Props) {
  const [user,setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }else{
      setUser(null);
    }
  }, []);

  return (
    <myContext.Provider value={user}>{Props.children}</myContext.Provider>
    )
}