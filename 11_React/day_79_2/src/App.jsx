import React, { useEffect , useState} from 'react'
import axios from 'axios'
const App = () => {

  const [username, setUsername] = useState('')
  const [counter, setCounter] = useState(0)

  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/')

    setUsername((response.data.results[0].name.first) + " " +(response.data.results[0].name.last));
    
  }

  useEffect(function(){
    getData()
  },[counter])

  
 
  
  return (
    <div>
      {username}
        <h1>{counter}</h1>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Increase</button>
    </div>
  )
}

export default App

 