import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-blue-600 absolute bottom-0 px-10 py-8 w-full flex justify-between items-center font-bold text-2xl'>
        <h1>Footer</h1>

        <button onClick={() => {
            navigate('/courses')
        }} className='px-8 py-4 bg-green-400'> More Courses</button>
    </div>
  )
}

export default Footer
