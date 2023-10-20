import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import CivilEngagement from "./pages/CivilEngagement";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/civil-engagement' element={<CivilEngagement />} />
      </Routes>
    </>
  );
}

export default App;
