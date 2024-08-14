import React from "react";

function Footer() {
  return (
    <footer className="my-2">
      By <a href="https://khushxal.github.io/Khushal/">Khushal Verma</a> @{" "}
      {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
