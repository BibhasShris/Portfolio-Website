import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GraphicDesign from "./pages/GraphicDesign";
import UIUX from "./pages/UIUX";
import Photography from "./pages/Photography";
import Videography from "./pages/Videography";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
