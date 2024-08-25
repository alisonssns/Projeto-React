import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./components/pages/home";

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
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
