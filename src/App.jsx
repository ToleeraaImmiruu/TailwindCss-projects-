import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Purpose from "./components/Porpuse";
import Program from "./components/Programs";
import Testimonials from "./components/Testimonilas";
import Contact from "./components/Contact";
import Login from "./components/login"; // Capitalize filename to match import

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />

        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Purpose />
                <Program />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* Login page route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
