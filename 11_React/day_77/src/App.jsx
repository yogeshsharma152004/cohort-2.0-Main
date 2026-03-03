import React from 'react'
import Card from './components/Card'

const App = () => {

  const animal1 = {
    name: 'Turtle',
    categorey : 'ocean animal',
    profile: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D'
  }

   const animal2 = {
    name: 'fox',
    categorey : 'wild snow animal',
    profile: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww'
  }

  return (
    <>
    <Card  animal={animal1}/>
    <Card  animal={animal2}/>
    </>
  )
}

export default App
