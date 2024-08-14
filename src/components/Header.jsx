import React from "react";
import { isMobile } from "react-device-detect";
function Header() {
  return (
    <header className="container">
      <nav className="navbar">
        <div className="container d-flex justify-content-center">
          <a
            className={`navbar-brand text-uppercase ${
              isMobile && "text-white"
            }}`}
            href="/"
          >
            CountWithMee
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
