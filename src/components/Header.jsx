import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
function Header() {
  return (
    <header className="container mt-3">
      <nav className="navbar d-flex justify-content-center">
        <BrowserView>
          <a className={`navbar-brand text-uppercase`} href="/">
            <h1>
              <strong>Count-With-Me</strong>
            </h1>
          </a>
        </BrowserView>
        <MobileView>
          <a className="navbar-brand text-uppercase" href="/">
            <h1>Count-With-Me</h1>
          </a>
        </MobileView>
      </nav>
    </header>
  );
}

export default Header;
