import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Counter from "./components/Counter.jsx";
import LoadingPage from "./components/Loading.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
