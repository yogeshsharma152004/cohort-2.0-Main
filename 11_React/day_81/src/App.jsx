import React, { children } from "react";
// import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
// import Navbar from "./components/Navbar";
import AllCourses from "./pages/AllCourses";
import Cohort1 from "./pages/Cohort1";
import Cohort2 from "./pages/Cohort2";
// import Footer from "./components/Footer";
import Layout from "./pages/Layout";

const App = () => {
  const Allroutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
         path:'courses',
         element:<Courses/>,
         children:[
          {
            path:'',
            element:<AllCourses/>
          },
          {
            path:'cohort1',
            element:<Cohort1/>
          },
          {
            path:'cohort2',
            element:<Cohort2/>
          }
        ]
        }
      ],
    },
  ]);
  return (
    // <div>
    //   {/* <Navbar />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/courses" element={<Courses />}> */}
    //   {/* here this three are child of courses and they are in the outlet which we call in the courses page */}
    //   {/* <Route path="/courses" element={<AllCourses />} />
    //       <Route path="/courses/cohort1" element={<Cohort1 />} />
    //       <Route path="/courses/cohort2" element={<Cohort2 />} />
    //     </Route>
    //   </Routes> */}

    //   {/* <Footer/> */}
    // </div>

    <RouterProvider router={Allroutes}/>
  );
};

export default App;
