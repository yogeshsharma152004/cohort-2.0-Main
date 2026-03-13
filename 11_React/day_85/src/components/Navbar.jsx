import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight } from '../redux/slices/themeSlice'

const Navbar = () => {

   const dispatch =  useDispatch()

    const theme = useSelector((state) => state.theme.value)

  return (
    <div>
       <h1>current theme is : {theme}</h1>

       <button onClick={() => {
        dispatch(changeThemeToLight())
       }}>change theme to light</button>

       <button onClick={() => {
        dispatch(changeThemeToDark())
       }}>change theme to dark</button>
    </div>
  )
}

export default Navbar
