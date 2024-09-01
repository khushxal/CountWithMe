import React from "react";

function Footer() {
  return (
    <footer className="my-2 text-black">
      By{" "}
      <a style={{ color: "black" }} href="https://khushalverma.netlify.app">
        Khushal Verma
      </a>{" "}
      @ {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
