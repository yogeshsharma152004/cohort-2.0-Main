import React from 'react'
import { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  let submitHinadler = (e) =>{
    e.preventDefault()

    let newAllUsers = [...allUsers]
     newAllUsers.push({username,email})
      setAllUsers(newAllUsers)
      console.log(newAllUsers);
      
    // setAllUsers([{...allUsers,username,email}])

      
      
    
     
     setUsername('')
     setEmail('')
  }

  return (
    <div>
       <form onSubmit={(e) =>{
        submitHinadler(e)}
      }>
          <input type="text"  placeholder='Enter Your Name'
          value={username}
          required
          onChange={(e)=> {
            setUsername(e.target.value)
            
          }}

          />

          <input type="text"  placeholder='Enter Email'
          value={email}
          required
          onChange={(e)=> {
            setEmail(e.target.value)
            
          }}
          />
          <button> Submit </button>
       </form>

       {allUsers.map(( elem ,index) => {
         return <div key={index}>
          <h1>{elem.username}</h1>
           <h1>{elem.email}</h1>
         </div>
       })}
    </div>
  )
}

export default App

