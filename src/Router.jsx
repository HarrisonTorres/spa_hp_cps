import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Nav } from "./component/Nav/Nav";
import { Footer } from "./component/Footer/Footer";

export function AppRoutes() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
