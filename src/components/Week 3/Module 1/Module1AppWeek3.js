import "./App.css";
import Homepage from "./components/Week 3/Module 1/Homepage";
import AboutLittleLemon from "./components/Week 3/Module 1/AboutLittleLemon";
import Contact from "./components/Week 3/Module 1/Contact";
import { Routes, Route, Link } from "react-router-dom";

function Module1AppWeek3() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default Module1AppWeek3;
