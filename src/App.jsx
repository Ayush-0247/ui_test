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
import ContentOpen from "./pages/ContentOpen";
import Audience from "./pages/Audience";
import PerformanceOpen from "./pages/PerformanceOpen";

import OverviewClose from "./pages/OverviewClose";
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
      <Route path="/content-close" element={<Content />} />
      <Route path="/content-open" element={<ContentOpen />} />
      <Route path="/audience" element={<Audience />} />
      <Route path="/PerformanceOpen" element={<PerformanceOpen />} />
      <Route path="/overview-close" element={<OverviewClose />} />
    </Routes>
  );
}
