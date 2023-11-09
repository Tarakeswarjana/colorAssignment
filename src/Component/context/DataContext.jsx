import React,{createContext, useState} from 'react'
const userContext=createContext()

function DataContext({children}) {
    const [name,setName]=useState("name")
    const arr=[0,7,9,0]
  return (
    <userContext.Provider value={{arr,name,setName}}>
        {children}
    </userContext.Provider>
  )
}

export default DataContext
export { userContext}