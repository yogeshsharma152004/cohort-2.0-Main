import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

    const data = useContext(UserDataContext)
    
  return (
    <div className='absolute bottom-0 w-full h-20 bg-blue-500 text-white text-2xl'>
       <h1>This is Footer {data}</h1>
    </div>
  )
}

export default Footer
