import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-8 mb-16 bg-amber-300 font-semibold text-2xl'>
         <h1>Navbar</h1>

         <div className='flex gap-10 '>
            <NavLink to='/' style={({isActive}) =>  ({
              color :  isActive ? 'red' : 'black'
            })}>Home</NavLink>
            <NavLink to='/about' style={({isActive}) =>  ({
                color :isActive ? 'red' : 'black'
            })}>About</NavLink>
            <NavLink to='/courses' style={({isActive}) => ({
               color : isActive ? 'red' : 'black'
            })}>Courses</NavLink>
         </div>
    </div>
  )
}

export default Navbar
