import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* we can pass the data like this and it is children of the navbar */}
      {/* <Navbar brand='sheryians'>
        <h1>Hellos</h1>
      </Navbar> */}
      <Sections/>
      <Footer/>
    </div>
  )
}

export default App
