import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const toggleDarkMode = () => {
    if (darkMode === "dark") {
      SetDarkMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      SetDarkMode("dark");
      document.body.style.backgroundColor = "#212529";
    }
  };

  const [darkMode, SetDarkMode] = useState("light");
  return (
    <>
      <Router>
        <Navbar
          title="TextInsight"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div>
          <Routes>
            <Route
              exact
              path="/about"
              element={<About darkMode={darkMode}></About>}
            ></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  darkMode={darkMode}
                  heading="Text-Analyzer"
                ></TextForm>
              }
            ></Route>
          </Routes>
        </div>

        <Footer darkMode={darkMode}></Footer>
      </Router>
    </>
  );
}

export default App;
