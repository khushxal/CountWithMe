import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
function Header() {
  return (
    <header className="container">
      <nav className="navbar">
        <div className="container d-flex justify-content-center">
          <BrowserView>
            <a className={`navbar-brand text-uppercase`} href="/">
              CountWithMee
            </a>
          </BrowserView>
          <MobileView>
            <a className={`navbar-brand text-uppercase text-white`} href="/">
              CountWithMee
            </a>
          </MobileView>
        </div>
      </nav>
    </header>
  );
}

export default Header;
