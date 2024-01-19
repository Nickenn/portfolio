import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Contact,
  Footer,
  Education,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0 pt-15">
          <Hero />
          <Projects />
          <Skills />
          <Education />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
