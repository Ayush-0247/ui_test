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
import Audienceopen from "./pages/Audienceopen";
import PerformanceOpen from "./pages/PerformanceOpen";
import PartnershipClose from "./pages/PartnershipClose";
import PartnershipOpen from "./pages/PartnershipOpen";
import ContactClose from "./pages/ContactClose";
import ContactOpen from "./pages/ContactOpen";
import PricingClose from "./pages/PrcicingClose";
import PricingOpen from "./pages/PricingOpen";
import Login from "./pages/Login";
import OverviewClose from "./pages/OverviewClose";
import LifelinkrOverviewClose from "./pages/LifelinkrOverviewClose";
import Steps from "./components/Steps";
import LifelinkrAppointment from "./pages/LifelinkrAppointment";
import LifelinkrInteraction from "./pages/Lifelinkrinteraction";
import LifelinkrTimeline from "./pages/LifrlinkrTimeline";


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
      <Route path="/audience-close" element={<Audience />} />
      <Route path="/audience-open" element={<Audienceopen />} />
      <Route path="/PerformanceOpen" element={<PerformanceOpen />} />
      <Route path="/overview-close" element={<OverviewClose />} />
      <Route
        path="/lifelinkr-overview-close"
        element={<LifelinkrOverviewClose />}
      />
      <Route path="/Partnership-close" element={<PartnershipClose />} />
      <Route path="/Partnership-open" element={<PartnershipOpen />} />
      <Route path="/Contact-close" element={<ContactClose />} />
      <Route path="/Contact-open" element={<ContactOpen />} />
      <Route path="/pricing-close" element={<PricingClose />} />
      <Route path="/pricing-open" element={<PricingOpen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/steps" element={<Steps />} />
      <Route path="/lifelinkr-appointment" element={<LifelinkrAppointment />} />
      <Route path="/lifelinkr-interaction" element={<LifelinkrInteraction />} />
      <Route path="/lifelinkr-timeline" element={<LifelinkrTimeline />} />
    </Routes>
  );
}
