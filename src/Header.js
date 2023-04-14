import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Custom.css";

function Header() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <div className="bg-light">
      <br></br>
      <h1 className="text-primary">The Way of the Buffalo</h1>
      <div className="container">
        <nav className="d-flex flex-wrap justify-content-center align-items-center py-3  navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark border">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/burial" className="nav-link text-dark border">
                Burials
              </a>
            </li>
            <li className="nav-item">
              <a href="/supervised" className="nav-link text-dark border">
                Predictions
              </a>
            </li>
            <li className="nav-item">
              <a href="/unsupervised" className="nav-link text-dark border">
                Unsupervised
              </a>
            </li>
            {authStatus === "authenticated" && (
              <>
                <li className="nav-item d-block d-lg-none">
                  <a href="/admin" className="nav-link text-dark border">
                    Admin
                  </a>
                </li>
                <li className="nav-item">
                  <Authenticator>
                    {({ signOut, user }) => (
                      <button
                        className="nav-link btn btn-link text-dark border"
                        onClick={signOut}
                      >
                        {user.username} Sign Out
                      </button>
                    )}
                  </Authenticator>
                </li>
              </>
            )}
            {authStatus !== "authenticated" && (
              <li className="nav-item">
                <a href="/login" className="nav-link text-dark border">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item d-none d-lg-block">
              <a href="/admin" className="nav-link text-dark border">
                Admin
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
    </div>
  );
}

// const Header = () => {
//   return (
//     <Authenticator.Provider>
//       <HeaderAuth></HeaderAuth>
//     </Authenticator.Provider>
//   );
// };
// <header>
//       <nav>
//         <ul classNameName="nav-links">
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/burial">Burial Data</a>
//           </li>
//           <li>
//             <a href="/supervised">Supervised</a>
//           </li>
//           <li>
//             <a href="/unsupervised">Unsupervised</a>
//           </li>
//           <li>
//             <a href="/admin">Admin</a>
//           </li>
//         </ul>
//       </nav>
//       <h1>Water Buffalo</h1>
//     </header>

export default Header;
