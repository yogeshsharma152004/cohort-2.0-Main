import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = (props) => {

    
    
  return (
    <div className='card'>
        <Upper animal={props.animal}/>
        <Lower animal={props.animal}/>
    </div>
  )
}

export default Card
