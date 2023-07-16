import React from "react";
import Intro from "./components/intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="App">
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
