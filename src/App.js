import { useState } from "react";
import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#0b0b45";
    }
  };
  document.body.style.fontFamily = "Georgia, serif";

  return (
    <>
      {/* <Router> */}
      <Navbar title="PlayWithText" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        {/* { <Routes> 
            { <Route
              path="/"
              element={
                />
               } } */}
        <Textform heading="Enter Your Text " mode={mode} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
