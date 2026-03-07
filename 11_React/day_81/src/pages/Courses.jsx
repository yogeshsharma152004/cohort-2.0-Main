import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="flex px-8 py-4 bg-amber-800 text-amber-50 gap-10 mb-30">
        {/* <h1 className='font-bold text-4xl underline text-black text-center'>Courses Page</h1> */}

        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
        <p className="font-semibold text-2xl">Sale is live !!!</p>
      </div>
      <Outlet />

     
    </div>
  );
};

export default Courses;
