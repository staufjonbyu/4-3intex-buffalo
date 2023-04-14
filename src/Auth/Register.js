import React, { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const USER_REGEX = /^.{4,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{12,24}$/;
const REGISTER_URL = "/register";

const Register = ({ email = "", firstname = "", lastname = "", role = "" }) => {
  const mainUrl = "https://localhost:7127/api/User";
  const userRef = useRef();
  const errRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const roleRef = useRef();

  const [user, setUser] = useState(email);
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);
  const [roleName, setRoleName] = useState(role);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setUser(email);
    setFirstName(firstname);
    setLastName(lastname);
    setRoleName(role);
  }, [email, firstname, lastname, role]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const body = {
        email: user,
        firstname: firstName,
        lastname: lastName,
        hash: pwd,
        role: roleName,
      };
      console.log(body);
      await axios.post(mainUrl, body);
      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
      setDisplay(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <form onSubmit={handleSubmit}>
            {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="">
                  <div class="card rounded-3">
                    <div class="card-body p-4 p-md-5">
                      <h3 class="mb-2 pb-2 pb-md-0 mb-md-5 px-md-2">
                        Create New User
                      </h3>
                      <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                        <div class="col-6">
                          <div class="form-outline">
                            <label class="form-label" htmlFor="firstname">
                              First Name:
                              {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              ref={firstNameRef}
                              autoComplete="off"
                              onChange={(e) => setFirstName(e.target.value)}
                              value={firstName}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="form-outline">
                            <label class="form-label" htmlFor="lastname">
                              Last Name:
                              {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                            </label>
                            <input
                              type="lastname"
                              id="lastname"
                              ref={lastNameRef}
                              autoComplete="off"
                              onChange={(e) => setLastName(e.target.value)}
                              value={lastName}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                        <div class="col-6">
                          <div class="form-outline">
                            <label class="form-label" htmlFor="email">
                              Email:
                              {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                            </label>
                            <input
                              type="email"
                              id="user"
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              value={user} // set this to the value of the user's email address
                              required
                              aria-invalid={validName ? "false" : "true"}
                              aria-describedby="uidnote"
                              class="form-control"
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                            />
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="form-outline">
                            <label class="form-label" htmlFor="role">
                              Role:
                            </label>
                            <select
                              id="role"
                              ref={roleRef}
                              autoComplete="off"
                              onChange={(e) => setRoleName(e.target.value)}
                              class="form-select"
                            >
                              <option value="">Select role</option>
                              <option value="Admin">Admin</option>
                              <option value="Researcher">Researcher</option>
                            </select>
                          </div>
                        </div>
                        <div class="row pb-3 pt-3">
                          <div class="col-3 "></div>
                          <div class="col-6 pb-3 pt-3 ">
                            <label htmlFor="password" class="form-label">
                              Password:
                              {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                            </label>
                            <input
                              type="password"
                              id="password"
                              onChange={(e) => setPwd(e.target.value)}
                              value={pwd}
                              required
                              aria-invalid={validPwd ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setPwdFocus(true)}
                              onBlur={() => setPwdFocus(false)}
                              className="form-control"
                            />
                          </div>
                          <div class="col-3"></div>
                        </div>
                        <div class="row mb-4 pb-2 pb-md-0 mb-md-5 justify-content-center align-items-center">
                          <div className="col-8">
                            <p
                              id="pwdnote"
                              className={
                                pwdFocus && !validPwd
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              <ul>
                                <li>Note must be 12 to 24 characters.</li>
                                <li>
                                  Must include uppercase and lowercase letters,
                                  a number and a special character.
                                </li>
                                <li>
                                  {" "}
                                  Allowed special characters:{" "}
                                  <span aria-label="exclamation mark">
                                    !
                                  </span>{" "}
                                  <span aria-label="at symbol">@</span>{" "}
                                  <span aria-label="hashtag">#</span>{" "}
                                  <span aria-label="dollar sign">$</span>{" "}
                                  <span aria-label="percent">%</span>
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <div class="col-3"></div>
                          <div class="col-6">
                            <label htmlFor="confirm_pwd" class="form-label">
                              Confirm Password:
                              {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                            </label>
                            <input
                              type="password"
                              id="confirm_pwd"
                              onChange={(e) => setMatchPwd(e.target.value)}
                              value={matchPwd}
                              required
                              aria-invalid={validMatch ? "false" : "true"}
                              aria-describedby="confirmnote"
                              onFocus={() => setMatchFocus(true)}
                              onBlur={() => setMatchFocus(false)}
                              className="form-control"
                            />
                          </div>
                          <div class="col-3"></div>
                        </div>
                        <div class="row mb-4 pb-2 pb-md-0 mb-md-5 justify-content-center align-items-center">
                          <div className="col-8">
                            <p
                              id="confirmnote"
                              className={
                                matchFocus && !validMatch
                                  ? "instructions"
                                  : "offscreen"
                              }
                            >
                              <FontAwesomeIcon icon={faInfoCircle} />
                              Must match the first password input field.
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-3"></div>
                          <div className="col-6">
                            <button
                              disabled={
                                !validName || !validPwd || !validMatch
                                  ? true
                                  : false
                              }
                              className="btn btn-primary"
                            >
                              Create User
                            </button>
                          </div>
                          <div className="col-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Register;
