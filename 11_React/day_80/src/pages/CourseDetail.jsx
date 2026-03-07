import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const parmas = useParams()
  return (
    <div>
      <h1 className='
     capitalize text-4xl underline font-bold text-black text-center'>{parmas.id} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail
