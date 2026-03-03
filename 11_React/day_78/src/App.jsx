import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User'

const App = () => {

//  async function getData () {
//    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
//    console.log(response.data);
   
//   }

const [allUser, setAllUser] = useState([])

const getData = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
       
        console.log(response.data);
        
        setAllUser(response.data)
}

useEffect(function(){
  getData()
},[])
  
  return (
    <div>
       {/* <button onClick={getData}>Get Data</button> */}

       <div className='all-cards'>
        {allUser.map((elem,index) => {
          console.log(elem);
          
         return <div key={index}>
          <User elem={elem}/>
         </div>
       })}
       </div>
    </div>
  )
}

export default App

