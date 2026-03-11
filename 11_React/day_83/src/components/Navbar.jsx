import React, { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'
const Navbar = () => {

  const data = useContext(UserDataContext)
  console.log(data);
  

  return (
    <div className='h-20 w-full bg-emerald-600 text-white text-2xl'>
       <h1>This is Navbar {data}</h1>
       {/* {props.children} */}
    </div>
  )
}

export default Navbar
