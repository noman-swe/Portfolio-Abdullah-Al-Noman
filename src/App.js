import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        
      </div>
    </div>
  );
}

export default App;
