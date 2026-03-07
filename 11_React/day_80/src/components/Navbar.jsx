import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-pink-400 px-8 py-10 mb-10 text-2xl font-bold'>
        <h1>Navbar</h1>

        <div className='flex gap-10'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar
