import React, { useState } from 'react'

const Counter = () => {

    const [first, setfirst] = useState(0)

  return (
    <div>
        <h1>{first}</h1>

        <button onClick={()=>{
            setfirst(first + 1)
        }}>Increase</button>
        <button onClick={() => {
            setfirst(first-1)
        }}>Decrease</button>

    </div>
  )
}

export default Counter