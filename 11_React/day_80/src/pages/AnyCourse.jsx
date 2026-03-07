import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams()

    console.log(params.id);
    

  return (
    <div>
      <h1 className='capitalize  text-4xl underline font-bold text-black text-center'>{params.id} Course Page</h1>
    </div>
  )
}

export default AnyCourse
