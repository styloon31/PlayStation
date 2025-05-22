// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PS5 from "./pages/PS5";
import PS4 from "./pages/PS4";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PS5" element={<PS5 />} />
      <Route path="/PS4" element={<PS4 />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
