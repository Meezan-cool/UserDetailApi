// import React, { useState } from "react";
// import "./Create.css";
// // import "./Create.scss";
// import { useNavigate } from "react-router";
// function Create({ test, isEdit, selectkey, data }) {
//   const navigate = useNavigate();
//   const [isEdit2, setIsEdit2] = useState(isEdit);
//   const [isEdit3, setIsEdit3] = useState(isEdit);
//   const [isEdit4, setIsEdit4] = useState(isEdit);
//   const [reqname, setReqname] = useState(false);
//   const [reqemail, setReqemail] = useState(false);
//   const [reqnumber, setReqnumber] = useState(false);
//   const [username, setUsername] = useState(isEdit2 ? test.username : "");
//   const [email, setEmail] = useState(isEdit3 ? test.email : "");
//   const [number, setNumber] = useState(isEdit4 ? test.number : "");


//   // TO GET THE VALUE OF NAME INPUT FIELD
//   const handlename = (e) => {
//     setIsEdit2(false);
//     setUsername(e.target.value);
//     setReqname(false);
//   };

//    // TO GET THE VALUE OF EMAIL INPUT FIELD
//   function handlemail(e) {
//     setIsEdit3(false);
//     setEmail(e.target.value);
//     setReqemail(false);
//   }

//    // TO GET THE VALUE OF NUMBER INPUT FIELD
//   function handlenumber(e) {
//     setIsEdit4(false);
//     setNumber(e.target.value);
//     setReqnumber(false);

//   }

//   // TO SUBMIT THE GIVEN VALUE
//   function submit() {

//     const retain = JSON.parse(localStorage.getItem("data"));
//     if (retain) {
//       localStorage.setItem(
//         "data",
//         JSON.stringify([
//           ...retain,
//           { username: username, email: email, number: number },
//         ])
//       );
//     } else {
//       localStorage.setItem(
//         "data",
//         JSON.stringify([{ username: username, email: email, number: number }])
//       );
//     }
//     setUsername("");
//     setEmail("");
//     setNumber("");
//     navigate("/display");
//   }


//   // TO UPDATE THE SELECTED VALUE
//   function update() {
//     setUsername(username);
//     setEmail(email);
//     setNumber(number);
//     const retain = JSON.parse(localStorage.getItem("data"));
//     retain.splice(selectkey, 1, {
//       username: username,
//       email: email,
//       number: number,
//     });
//     localStorage.setItem("data", JSON.stringify(retain));
//     // console.log([username, email, number]);
//     setUsername("");
//     setEmail("");
//     setNumber("");
//     navigate("/display");
//   }

//   let isreq = () => {
//     setReqname(true);
//     setReqemail(true);
//     setReqnumber(true);
//   };

//   const display = () => {
//     navigate("/display");
//   };

//   return (
//     <div className="CreateContainer" >
//         <h1>ENTER USER DETAILS</h1>
//        <form action="">
//           <input
//             className={reqname ? "red" : ""}
//             required="required"
//             type="text"
//             placeholder={reqname ? "Username!" : "Username"}
//             value={username}
//             onChange={handlename}
//           />
//           <input
//             required="required"
//             className={reqemail ? "red" : ""}
//             type="email"
//             placeholder={reqemail ? "Email!" : "Email"}
//             value={email}
//             onChange={handlemail}
//           />
//           <input
//             required="required"
//             className={reqnumber ? "red" : ""}
//             type="number"
//             placeholder={
//               reqnumber ? "Contact No.!" : "Contact No."
//             }
//             value={number}
//             onChange={handlenumber}
//           />
//           {/* <input type="number" maxlength="10" pattern="[0-9]*" 
//            required="required"
//            className={reqnumber ? "red" : ""}
//            placeholder={
//              reqnumber ? "contact no. is required !" : "Contact No."
//            }
//            value={number}
//            onChange={handlenumber}/> */}
//           {isEdit ? (
//             <button
//               onClick={username && email && number ? update : isreq}
//             >
//               UPDATE{" "}
//             </button>
//           ) : (
//             <button
//               onClick={username && email && number ? submit : isreq}

//             >
//               SUBMIT{" "}
//             </button>
//           )}
//           </form>

//       <button onClick={display} >
//         DISPLAY
//       </button>{" "}
//     </div>
//   );
// }

// export default Create

import React from "react";
import { useState } from "react";
// import "./Create.scss";
import "./Create.css"

import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
// import Spinner from "./spinner/Spinner";

function Create() {
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [require, setRequire] = useState(false)


    let isreq = () => {

        setRequire(true);
    };

    const navigate = useNavigate();

    const display = () => {
        navigate("/display");
    };

    const handleName = (e) => {
        setUserName(e.target.value);
    };

    const handleMobile = (e) => {
        setMobile(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const postData = (e) => {
        e.preventDefault();
        // if (userName === '' || email === '' || mobile === '') {
        //     alert('Please fill out all required fields.');
        //     return;
        // }
        setLoading(true);
        axios
            .post("https://64aed2b0c85640541d4dc49d.mockapi.io/practice", {
                userName: userName,
                email: email,
                mobile: mobile,
            })
            .then(() => {
                setLoading(false);
            })
            .then(() => {
                navigate("/display");
            });
    };

    return (
        <body className="App">
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
                // <div className="Animation">
                //     <div className="superpoints">
                //         <div className="points">
                //             <div className="subpoints">



                //             </div>
                //         </div>
                //     </div>
                // </div>
                //     <div className="center">
                //     <div className="ring">

                //     </div>
                // </div>
            ) : (
                <div className="Createcontainer">
                    <div className="subCreatecontainer">
                        <h1 >Enter User Details</h1>
                        <form action="" >
                            <input
                                className={require}
                                required="required"
                                type="text"
                                value={userName}
                                onChange={handleName}
                                placeholder="Enter Username"
                            />
                            <input
                                className={require}
                                required="required"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="Enter Email"
                            />
                            <input
                                className={require}
                                required="required"
                                type="number"
                                value={mobile}
                                onChange={handleMobile}
                                placeholder="Enter Conatct Number"
                            />
                            <button type="submit"
                                onClick={userName && email && mobile ? postData : isreq}>
                                Submit
                            </button>
                        </form>
                        <button className="display" onClick={display}>
                            Display
                        </button>
                    </div>
                </div>
            )}
        </body>
    );
}

export default Create;