import React from "react";
import "./Custom.css";
import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/burial">Burial Data</a>
          </li>
          <li>
            <a href="/supervised">Supervised</a>
          </li>
          <li>
            <a href="/unsupervised">Unsupervised</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
        </ul>
      </nav>
      <h1>Water Buffalo</h1>
    </header>
  );
}

export default Header;
