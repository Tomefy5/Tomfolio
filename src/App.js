import "./bootstrap-5.3.3-dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Sections from "./Components/Sections";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {

  const [darkTheme, setDrakTheme] = useState(false)
  const toggleDarkTheme = () => {
    setDrakTheme(!darkTheme)
  }

  return (
    <Router>
      <div className="App">
        <div className="container-sections container">
          <Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
          <Sections darkTheme={darkTheme} />
        </div>
      </div>
    </Router>
  );
}

export default App
