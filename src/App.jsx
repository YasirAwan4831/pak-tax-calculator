import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialBar from "./components/layout/SocialBar";
import ScrollToTop from "./components/shared/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import TaxGuides from "./pages/TaxGuides";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster position="top-right" />
        <SocialBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tax-guides" element={<TaxGuides />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}
