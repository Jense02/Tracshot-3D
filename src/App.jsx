import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Community from "./sections/Community";
import AboutUs from "./sections/AboutUs";
import Download from "./sections/Download";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutUs />
    {/* <ShowcaseSection /> */}
    {/* <LogoShowcase /> */}
    <Testimonials />
    <Community />
    {/* <FeatureCards /> */}
    {/* <Experience /> */}
    {/* <TechStack /> */}
    <Download />
    {/* <Contact /> */}
    <Footer />
  </>
);

export default App;
