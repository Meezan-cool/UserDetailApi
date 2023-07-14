// import { React, useEffect, useState } from "react";
// import "./Display.css";
// import { useNavigate } from "react-router";
// function Display({ editdata, isNotEdit }) {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);

//   // TO SET IN LOCAL STORAGE
//   useEffect(() => {

//     setData(JSON.parse(localStorage.getItem("data")));
//   }, []);

//   // TO DELETE SELECTED DETAIL
//   function deletedata(index) {
//     const newdata = data.filter((data2, index2) => {
//       return index2 !== index;
//     });
//     setData(newdata);
//     localStorage.setItem("data", JSON.stringify(newdata));
//   }

//   return (

//     <div className='Display'>
//       <div className='table_header'>
//         <h1> Users Details</h1>
//       </div>
//       <div className='table_section'>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No.</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Number</th>
              
//               <th>Action</th>
//             </tr>
//           </thead>
//             {data &&
//          data.map((data, index) => {
//              return (
//           <tbody key={index}>
//             <tr>
//               <td>{index + 1}</td>
//               <td>{data.username}</td>
//               <td>{data.email}</td>
//               <td>{data.number}</td>
              
//               <td>
//               <button
//                     className="Edit"
//                       onClick={() => {
//                         navigate("/");
//                         editdata(index);
//                       }}

//                     >
//                       <i class="fa-solid fa-pen-to-square"></i>
//                     </button>
//                     <button 
//                     className="Delete"
//                       onClick={() => {
//                         deletedata(index);
//                       }}
//                     >
//                       <i class="fa-sharp fa-solid fa-trash"></i>
//                     </button>                
//               </td>

//             </tr>
//           </tbody>
//                   );
//           })}
//         </table>
//       </div>
//       <button
//         className="Back"
//         onClick={() => {
//           isNotEdit();
//           navigate("/");
//         }}

//       >
//         Back
//       </button>
//     </div>
//   );
// }
// export default Display;

import React, { useEffect } from "react";
import "./Display.css"
// import Table from "react-bootstrap/Table";
// import { useLocation } from 'react-router';
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
// import Spinner from "./spinner/Spinner";
// import "./Display.scss";


function Display() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const location = useLocation()
  const navigate = useNavigate();

  const getData = () => {
    setLoading(true);
    axios
      .get("https://64aed2b0c85640541d4dc49d.mockapi.io/practice")

      .then((res) => {
        setData(res.data);
      })
      .then(() => [setLoading(false)]);
  };

  useEffect(() => {
    getData();
  }, []);

  const goToCreate = () => {
    navigate("/");
  };
  const handleDelete = (idx) => {
    //  alert('handleDelete')

    setLoading(true);
    axios
      .delete(`https://64aed2b0c85640541d4dc49d.mockapi.io/practice/${idx}`)
      .then(() => {
       
      })
      .then(() => {
        getData();
      });
      setLoading(false);
  };

  const handleEdit = (id, userName, email, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    navigate("/update");
  };

  return (
    <div className="App">
    {loading ? (
   <div className="center">
     <div class="lds-facebook">
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
</div>
   </div>
    ) : (
   <div className="Displaycontainer">
       <main className="table">
        <section className="table_header">
            <h1>User Details</h1>
        </section>
        <section className="table_body">
               <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                       
                        <th>Email</th>
                        <th>Number</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {data &&
               data.map((item, idx) => {
                 return (
                <>
                    <tr>
                       <td key={item.id}>{idx+1}</td>
                       <td>{item.userName}</td>
                       <td>{item.email}</td>
                       <td>{item.mobile}</td>
                       <td>
                         
                        <button className="Action1"
                          onClick={() =>
                            handleEdit(
                              item.id,
                              item.userName,
                              item.email,
                              item.mobile
                            )
                          }
                        >
                          Edit
                        </button>
                       
                      </td>
                      <td>
                      <button className="Action2"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                     </>
                                     );
                                   })}
                </tbody>
               </table>
               
        </section>
       
       </main>
        <button className="Back" onClick={goToCreate}>
        Back
    </button>
   </div>

       )}
      </div>
  );
}

export default Display;
// //  {loading ? (
//     <h2> Waiting</h2>
//     ) : (
//       <>
//         <h1>Details</h1>
       
//         <table >
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>User Name</th>
//               <th>Email</th>
//               <th>Mobile Number</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data &&
//               data.map((item, idx) => {
//                 return (
//                   <>
//                     <tr>
//                       <td key={item.id}>{idx+1}</td>
//                       <td>{item.userName}</td>
//                       <td>{item.email}</td>
//                       <td>{item.mobile}</td>
//                       <td>
//                         
//                         <button
//                           onClick={() =>
//                             handleEdit(
//                               item.id,
//                               item.userName,
//                               item.email,
//                               item.mobile
//                             )
//                           }
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(item.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                       <td></td>
//                     </tr>
//                   </>
//                 );
//               })}
//           </tbody>
//         </table>
//         <button className="Back" onClick={goToCreate}>
//           Back
//         </button>
//       </>
//     )}