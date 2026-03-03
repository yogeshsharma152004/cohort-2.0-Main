import React from 'react'

const User = (props) => {

    const color1 = Math.floor(Math.random()*256)
     const color2 = Math.floor(Math.random()*256)
      const color3 = Math.floor(Math.random()*256)

  return (
    <div style={{backgroundColor:`rgb(${color1},${color2},${color3})`}} className='user-card'>
       <h2>{props.elem.name}</h2>
       <p>{props.elem.website}</p>

    </div>
  )
}

export default User
