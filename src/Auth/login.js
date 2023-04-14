import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import useAuth from "./useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { LocationSearch } from "@aws-amplify/ui-react";

const Login = () => {



  const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api/Authenticate";


  const navigate = useNavigate();
  const location = useLocation();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  // const (showFrom, setShowForm) = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [verifed, setVerifed] = useState(false);

  const [code, setCode] = useState("");
  const [response, setRes] = useState({});

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email: user,
      password: pwd,
    };

    // const response = await axios.post(mainUrl, body).then((res) => {
    //   setRes(response);
    // });
    const response = await axios.post(mainUrl, body);
    
    console.log(response.data);
    localStorage.setItem("user", response.data.email);
    localStorage.setItem("name", response.data.firstname);
    localStorage.setItem("code", response.data.code);
    localStorage.setItem("message", response.data.message);
    localStorage.setItem("role", response.data.role)
    
    if (response.data.message === 'Authenticated!'){
      setSuccess(true);
      window.location.href = "/";
      // window.location.reload();
      

      
    }
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // setShowForm(false);
  //   }, 60000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // function handleVerificationSubmit(event) {
  //   event.preventDefault();
  //   // handle verification code submission here

  //   // check if verification code is correct
  //   const isCodeCorrect = true; // replace with your verification code validation logic

  //   if (isCodeCorrect) {
  //     // verification code is correct, set success state to true
  //     setVerifed(true);
  //   } else {
  //     // verification code is incorrect, set error message
  //     setErrMsg("Verification code is incorrect.");

  //     // set a timeout to hide the form after 1 minute
  //     const timeout = setTimeout(() => {
  //       // setShowForm(false);
  //     }, 60000);
  //     return () => clearTimeout(timeout);
  //   }
  // }
  // console.log(auth);

  return (
    <>
      {success ? (
        <>
          <h1>{name} you are now logged in!</h1>
          <br />
          {/* {!verifed ? (
            <form onSubmit={handleVerificationSubmit}>
              <label>Enter Verification Code in your email:</label>
              <input type="text" name="verificationCode" />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <h4></h4>
          )} */}
        </>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Login
                    </h3>
                    <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                      <div class="">
                        <div class="form-outline">

                    <form onSubmit={handleSubmit}>
                      <label class="form-label" htmlFor="username">Username:</label>
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                      <br></br>
                      <br></br>
                      <label class="form-label" htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                      <br></br>
                      <br></br>
                      <button class="btn btn-primary mb-4">Sign In</button>
                    </form>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
        </section>
      )}
    </>
  );
};

export default Login;
