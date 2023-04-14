import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from "./AuthProvider";

const Login = () => {
  const mainUrl = "https://de8jo1lugqs3e.cloudfront.net/api/Authenticate";
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [showForm, setShowForm] = useState(true);

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [verifed, setVerifed] = useState(false);
  const [code, setCode] = useState('');
  
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const body = {
            "email": user,
            "password": pwd,
        }

        const response = await axios.post(mainUrl, body);

        if (response.data.message === 'Authenticated!'){
          setSuccess(true);
        }

        // perform any necessary UI updates

        const accessToken = 'buffalo';
        const role = response.data.role;
        setUser(response.data.email);
        setName(response.data.firstname)
        setCode(response.data.code)

        // setEmail(response.data)

        setAuth({ user, role, accessToken, name });
        setUser('');
        setSuccess(true);
    } catch (error) {
        
    }
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(false);
    }, 60000);
    return () => clearTimeout(timeout);
  }, []);
  function handleVerificationSubmit(event) {
    event.preventDefault();
    // handle verification code submission here
    
    // check if verification code is correct
    const isCodeCorrect = true; // replace with your verification code validation logic
  
    if (isCodeCorrect) {
      // verification code is correct, set success state to true
      setVerifed(true);
    } else {
      // verification code is incorrect, set error message
      setErrMsg("Verification code is incorrect.");
  
      // set a timeout to hide the form after 1 minute
      const timeout = setTimeout(() => {
        setShowForm(false);
      }, 60000);
      return () => clearTimeout(timeout);
    }
  }
  
  
  return (
    <>
      {success ? (
        <>
            <h1>{name} you are now logged in!</h1>
            <br />
            {!verifed ?(
                  <form onSubmit={handleVerificationSubmit}>
                  <label>Enter Verification Code in your email:</label>
                  <input type="text" name="verificationCode" />
                  <button type="submit">Submit</button>
                </form>
            ):(
              <h4></h4>
            )
            
          
          }

      </>
    )  : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
}

  export default Login;