import logo from "./logo.svg";
import "./Custom.css";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import Home from "./PageBody/Home";
import Burial from "./PageBody/BurialList";
import Admin from "./PageBody/Admin";
import Supervised from "./PageBody/Supervised";
import Unsupervised from "./PageBody/Unsupervised";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./Auth/CookieConsent.js";

import GDPR from "./PageBody/Gpdr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://intexapi-env-1.eba-27nra4uc.us-east-1.elasticbeanstalk.com/api/Main"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
        <CookieBanner></CookieBanner>
      <BrowserRouter>
        <Header />
        <body>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/burial" element={<Burial data={data}></Burial>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/supervised" element={<Supervised></Supervised>} />
            <Route
              path="/unsupervised"
              element={<Unsupervised></Unsupervised>}
            />
            <Route path="/privacy" element={<GDPR></GDPR>} />
          </Routes>
        </body>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
