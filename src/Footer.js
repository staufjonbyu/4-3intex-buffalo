import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import "./Custom.css";

function Footer() {
  return (
    <div className="container">
      <footer className="py-2 my-2" >
        <a href="/privacy">Our Privacy Policy</a>
        <p className="text-center text-muted">&copy; 2023 Buffalo Website</p>
      </footer>
    </div>
  );
}

// <footer>
//   <center>
//     <div className="footer-content">
//       <ul>
//         <li><a href="/privacy">Our Privacy Policy</a></li>
//       </ul>
//       <p>&copy; 2023 My Website. All rights reserved.</p>
//     </div>
//   </center>
// </footer>

export default Footer;
