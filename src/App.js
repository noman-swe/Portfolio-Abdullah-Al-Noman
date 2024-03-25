import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
