import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";
import Container from "./layout/container";
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
