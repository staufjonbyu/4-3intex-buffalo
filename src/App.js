import logo from './logo.svg';
import './Custom.css';
import './App.css';
import CookieConsent from "react-cookie-consent";
import Home from './PageBody/Home';
import Burial from './PageBody/Burial';
import Admin from './PageBody/Admin';
import Supervised from './PageBody/Supervised';
import Unsupervised from './PageBody/Unsupervised';
import Header from './Header';
import Footer from './Footer'
import GDPR from './PageBody/Gpdr'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
      fetch('https://localhost:7127')
    .then(response => response.json())
    .then(data => {
      // 'data' contains the parsed JSON data
      // You can now use 'data' to update your application UI or do other operations.
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  useEffect(() => {
      const fetchData = async()=>{
          const rsp = await fetch('https://localhost:7127');
          const temp = await rsp.json();

      };
      fetchData();

  }, []);
  return (
    <div className="App">
        <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Congrats on Accepting");
          } else {
            alert("Click Accept!");
          }
        }}
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}>
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
      <BrowserRouter>
        <Header/>
        <body>
          <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/burial" element={<Burial></Burial>} />
                <Route path="/admin" element={<Admin></Admin>} />
                <Route path="/supervised" element={<Supervised></Supervised>}/>
                <Route path="/unsupervised" element={<Unsupervised></Unsupervised>}/>
                <Route path="/privacy" element={<GDPR></GDPR>}/>
            </Routes>
        </body>
        <Footer/>  
      </BrowserRouter>

    </div>
  );
}

export default App;
