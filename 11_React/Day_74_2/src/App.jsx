// import React, { useState } from "react";

// const App = () => {
//   const [grace, setGrace] = useState([55, 69, 28, 32, 74]);

//   function GraceMarks() {
//     let newMarks = grace.map(function (elem) {
//       if (elem < 33) {
//         return elem + 5;
//       } else {
//         return elem;
//       }
//     });
//     setGrace(newMarks);
//   }

//   return (
//     <div>
//       {grace.map(function (elem, index) {
//         return (
//           <h1 key={index}>
//             {" "}
//             Student {index + 1} = {elem}
//           </h1>
//         );
//       })}

//       <button onClick={GraceMarks}>clik here </button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'




const App = () => {
  let [isDark, setDark] = useState(false)
  return (
    <div className={isDark? "app light" :"app dark"}>
         <button onClick={() => setDark(!isDark)}>
          {isDark ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}

export default App
