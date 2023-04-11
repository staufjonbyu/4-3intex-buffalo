import React from "react";
import "./App.css";
import "./Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="d-none d-lg-block">
      <div className="container">
        <nav className="d-flex flex-wrap justify-content-center py-3 border-bottom">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/burial" className="nav-link text-dark">
                Burial
              </a>
            </li>
            <li className="nav-item">
              <a href="/supervised" className="nav-link text-dark">
                Supervised
              </a>
            </li>
            <li className="nav-item">
              <a href="/unsupervised" className="nav-link text-dark">
                Unsupervised
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin" className="nav-link text-dark">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link text-dark">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

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