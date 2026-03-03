import React from 'react'

const Lower = (props) => {
  return (
    <div className='lower'>
      <h2>{props.animal.name}</h2>
      <h3>{props.animal.categorey}</h3>
    </div>
  )
}

export default Lower
