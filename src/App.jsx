import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ApplyJob from "./pages/ApplyJob";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <h2>Job Portal</h2>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
            <Link to="/apply-job">Apply Job</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/24071a05j2" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply-job" element={<ApplyJob />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          copyright@24071A05J2
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;