import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/page1";
import AudienceInsight from "./pages/AudienceInsight";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/audience-insight" element={<AudienceInsight />} />
    </Routes>
  );
}
