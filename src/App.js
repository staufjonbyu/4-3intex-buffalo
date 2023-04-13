import logo from "./logo.svg";
import "./Custom.css";
import "./App.css";

// pages
import Home from "./PageBody/Home";
import Burial from "./PageBody/Burial";
import Admin from "./PageBody/Admin";
import Supervised from "./PageBody/Supervised";
import Unsupervised from "./PageBody/Unsupervised";
import Login from "./PageBody/Login";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./Auth/CookieConsent.js";
import GDPR from "./PageBody/Gpdr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieAccepted")) {
      setCookieAccepted(true);
    }
  }, []);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <>
      {authStatus !== "authenticated" ? (
        <div className="App">
          <CookieBanner></CookieBanner>
          <Authenticator.Provider>
            <BrowserRouter>
              <Header />
              <body>
                <Routes>
                  <Route path="/" element={<Home></Home>} />
                  <Route path="/burial" element={<Burial></Burial>} />
                  <Route
                    path="/supervised"
                    element={<Supervised></Supervised>}
                  />
                  <Route
                    path="/unsupervised"
                    element={<Unsupervised></Unsupervised>}
                  />
                  <Route path="/login" element={<Login></Login>}></Route>
                  <Route path="/privacy" element={<GDPR></GDPR>} />
                </Routes>
                {/* {user.username}
            <button onClick={signOut}>Sign out</button> */}
                {cookieAccepted && <Footer></Footer>}
              </body>
            </BrowserRouter>
          </Authenticator.Provider>
        </div>
      ) : (
        <div className="App">
          <Authenticator.Provider>
            <CookieBanner></CookieBanner>
            <BrowserRouter>
              <Header />
              <body>
                <Routes>
                  <Route path="/" element={<Home></Home>} />
                  <Route path="/burial" element={<Burial></Burial>} />
                  <Route path="/admin" element={<Admin></Admin>} />
                  <Route
                    path="/supervised"
                    element={<Supervised></Supervised>}
                  />
                  <Route
                    path="/unsupervised"
                    element={<Unsupervised></Unsupervised>}
                  />
                  <Route path="/login" element={<Login></Login>}></Route>
                  <Route path="/privacy" element={<GDPR></GDPR>} />
                </Routes>
                {/* {user.username}
              <button onClick={signOut}>Sign out</button> */}
                {cookieAccepted && <Footer></Footer>}
              </body>
            </BrowserRouter>
          </Authenticator.Provider>
        </div>
      )}
    </>
  );
}
export default App;
// export default withAuthenticator(App);
