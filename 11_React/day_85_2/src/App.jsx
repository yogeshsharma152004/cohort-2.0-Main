import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './redux/features(slices)/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(5)

  return (
    <div>
       <h1>{count}</h1>

       <button onClick={() => {
           dispatch(increment())
       }}>Increment</button>

       <button onClick={() => {
           dispatch(decrement())
       }}>Decrement</button>

       <input type="text"  value={num} onChange={(e) => {
        setNum(e.target.value)
       }}/>


       <button onClick={() => {
         dispatch(increaseByAmount(Number(num)))
       }}>Increasr Amount</button>
    </div>
  )
}

export default App

