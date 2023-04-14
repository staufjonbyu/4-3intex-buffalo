import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const USER_REGEX = /^.{4,24}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{12,24}$/;
const REGISTER_URL = '/register';

const Register = ({email = '', firstname='', lastname='', role=''}) => {
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

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
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
        setErrMsg('');
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
            "email": user,
            "firstname": firstName,
            "lastname": lastName,
            "hash": pwd,
            "role": roleName
          };
          console.log(body);
          await axios.post(mainUrl, body);
          setSuccess(true);
          setUser('');
          setPwd('');
          setMatchPwd('');
          setDisplay(true);
        } catch (err) {
          if (!err?.response) {
            setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
            setErrMsg('Email Taken');
          } else {
            setErrMsg('Registration Failed');
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
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Create New User</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email:
                            {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                                type="text"
                                id="user"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user} // set this to the value of the user's email address
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                        <p></p>
                        {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter the email <br />
                        </p> */}
                        <label htmlFor="firstname">
                            First Name:
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>
                        
                        <input
                        type="text"
                        id="firstName"
                        ref={firstNameRef}
                        autoComplete="off"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName} 
                        />
                        <p></p>
                        <label htmlFor="lastname">
                            Last Name:
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>
                        <input
                            type="lastname"
                            id="lastname"
                            ref={lastNameRef}
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                        <p></p>
                        <label htmlFor="firstname">
                            Role:
                            {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                        </label>
                        <select id="role"     ref={roleRef}
                            autoComplete="off"onChange={(e) => setRoleName(e.target.value)}>
                            <option value="">Select role</option>
                            <option value="Admin">Admin</option>
                            <option value="Researcher">Researcher</option>
                        </select>

                        <p></p>

                        <label htmlFor="password">
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
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Note must be 12 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
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
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Create User</button>
                    </form>
                    <p>
                        Change Mind?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/admin">Admin Menu</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register