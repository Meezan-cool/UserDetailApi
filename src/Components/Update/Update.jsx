import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
// import Spinner from "./spinner/Spinner";

function Update() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const[require,setRequire]=useState(false)

    
  let isreq = () => {
    
    setRequire(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
  }, []);

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const postUpdate = () => {
    setLoading(true);
    axios
      .put(`https://64aed2b0c85640541d4dc49d.mockapi.io/practice/${id}`, {
        userName: userName,
        email: email,
        mobile: mobile,
      })
      .then(() => {
        navigate("/display");
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
     <div className="App" >
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
                <div  className="Createcontainer">
          <div className="subCreatecontainer" >
            <h1 className="title">Update</h1>
            <form action="">
              {/* <input
                type="text"
                value={userName}
                onChange={handleName}
                placeholder="Enter Username"
              />
              <input
                type="text"
                value={email}
                onChange={handleEmail}
                placeholder="Enter Email"
              />
              <input
                type="text"
                value={mobile}
                onChange={handleMobile}
                placeholder="Enter Mobile Number"
              /> */}
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

              <button type="submit"  onClick={userName && email && mobile ?postUpdate:isreq}>
                Update
              </button>
              
            </form>
            <button className="display" onClick={handleGoBack}>
                Display Again
              </button>
          </div>
        </div >
      )}
    </div>
  );
}

export default Update;