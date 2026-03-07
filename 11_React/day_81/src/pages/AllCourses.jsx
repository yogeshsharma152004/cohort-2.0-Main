import React from 'react'
import { NavLink } from 'react-router-dom'
const AllCourses = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl underline text-black text-center'>AllCourses Page</h1>


         <div className="flex gap-10 font-bold text-2xl m-20">
                <NavLink  to="/courses/cohort1">Cohort1</NavLink>
                <NavLink  to="/courses/cohort2">Cohort2</NavLink>
              </div>
    </div>
  )
}

export default AllCourses
