import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/page1";
import AudienceInsight from "./pages/AudienceInsight";
import Contact from "./pages/contact";
import Lookalike from "./pages/lookalike";
import Story from "./pages/StoryAndHastag";
import Stats from "./pages/Stats";
import Searchbar from "./pages/Searchbar";
import Performance from "./pages/Performance";
import Overview from "./pages/Overview";
import Content from "./pages/Content";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/audience-insight" element={<AudienceInsight />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lookalike" element={<Lookalike />} />
      <Route path="/StoryAndHastag" element={<Story />} />
      <Route path="/Statsandmedia" element={<Stats />} />
      <Route path="/Searchbar" element={<Searchbar />} />
      <Route path="/Performance" element={<Performance />} />
      <Route path="/Overview" element={<Overview />} />
      <Route path="/Content" element={<Content />} />

    </Routes>
  );
}
