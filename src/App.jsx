// import "./App.css";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Create from "./Components/Create/Create";
// import Display from "./Components/Display/Display";
// import { useState } from "react";
// import React from "react";

// function App() {
//   const [test, setTest] = useState([]);
//   const [isEdit, setisEdit] = useState(false);
//   const [selectkey, setSelectkey] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const editdata = (index) => {
//     const data = JSON.parse(localStorage.getItem("data"));
//     const selected = data.filter((item, id) => index === id);
//     setisEdit(true);
//     setTest(selected[0]);
//     setSelectkey(index);
//     setSelected(data);
//   };
//   function isNotEdit() {
//     setisEdit(false);
//   }

//   return (
//     <body className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route
//             exact
//             path="/"
//             element={
//               <Create
//                 isEdit={isEdit}
//                 test={test}
//                 data={selected}
//                 selectkey={selectkey}
//               />
//             }
//           />
//           <Route
//             exact
//             path="/display"
//             element={<Display editdata={editdata} isNotEdit={isNotEdit} />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </body>
//   );
// }
// export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Create from './Components/Create';
// import Update from './Components/Update';
// import Display from './Components/Display';
import Update from './Components/Update/Update';
import Create from './Components/Create/Create';
import Display from './Components/Display/Display';

function App() {
  return (
    <body className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/display' element={<Display />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>

    </body>
  );
}

export default App;