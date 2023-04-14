import Home from "./PageBody/Home";
import Burial from "./PageBody/Burial";
import BurialInfo from "./PageBody/BurialInfo";
import AdminPortal from "./Auth/AdminPortal";
import Supervised from "./PageBody/Supervised";
import Unsupervised from "./PageBody/Unsupervised";
import Login from "./Auth/login";
import Register from "./Auth/Register";
import Header from "./Header";
import Footer from "./Footer";
import NewEntry from "./PageBody/Admin/NewEntry";
import CookieBanner from "./Auth/CookieConsent.js";
import RequireAuth from './Auth/RequireAuth';
import GDPR from "./PageBody/Gpdr";
import EditEntry from "./PageBody/Admin/EditEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
// import auth from './Auth/AuthProvider';
import { AuthProvider} from "./Auth/AuthContext";
import { AuthContext } from "./Auth/AuthContext";

// import Login from "./Auth/login";

// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [ auth, setAuth ] = useState(localStorage.getItem('jwt') === true);
  console.log(auth);

  // useEffect(() => {
  //   localStorage.setItem('auth', auth);
  // });
 
  // function handleLogout() {
  //   setAuth(false);
  //   localStorage.setItem(auth, false);
  // }
  // console.log(auth);
  useEffect(() => {
    if (localStorage.getItem("cookieAccepted")) {
      setCookieAccepted(true);
    }
  }, []);
  // console.log(AuthContext.auth);
  // console.log(AuthContext.Provider);

  const ROLES = {
    'Researcher': 'Admin',
    'Admin': 'Admin'
  }

  return (
    <>

      <div>
          <div className="App">
            <CookieBanner></CookieBanner>
            <div>
              <BrowserRouter>
                <Header />
                <body>
                  <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/burial" element={<Burial></Burial>} />
                    <Route
                      path="/burial/:burialNum/:area/:eastWest/:sqew/:northSouth/:sqns"
                      element={<BurialInfo />}
                    />
                    {/* string burialNum, string area, string eastWest, string sqew, string northSouth, string sqns */}
                    <Route
                      path="/supervised"
                      element={<Supervised></Supervised>}
                    />
                    <Route
                      path="/unsupervised"
                      element={<Unsupervised></Unsupervised>}
                    />
                    <Route
                      path="/create"
                      element={<Register></Register>}
                    ></Route>
                    <Route path="/login" element={<Login></Login>}></Route>

                    <Route path="/privacy" element={<GDPR></GDPR>} />
                    <Route
                      path="/admin"
                      element={<AdminPortal></AdminPortal>}
                    />
                  </Routes>
                  {/* {user.username}

            <button onClick={signOut}>Sign out</button> */}
                  {cookieAccepted && <Footer></Footer>}
                </body>
              </BrowserRouter>
            </div>
          </div>
        
      </div>
    </>
  );
}
export default App;
// export default withAuthenticator(App);
