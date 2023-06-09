import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="relative z-0  bg-gradient-to-tr from-[#ededda] to-[#a87e9f] opacity-90"> */}
      <div className="relative z-0  bg-gradient-to-tr from-[#beabc7] to-[#f0f4f5] opacity-90">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Experience />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
